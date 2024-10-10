from connector import db, User


class UserDB:
    def __init__(self):
        pass

    def create_user(self, user: User):
        "Função para criar um usuário"
        print(user)
        try:
            db.session.add(user)
            db.session.commit()
            print("Usuário criado com sucesso!")
            return user.to_dict()
        except Exception as e:
            return {"error": f"Erro ao criar usuário: {str(e)}"}

    def get_user_by_id(self, user_id: str):
        "Função para buscar um usuário por ID"
        try:
            user = db.session.query(User).filter_by(id=user_id).first()
            return user.to_dict()
        except Exception as e:
            return {"error": f"Erro ao criar usuário: {str(e)}"}
        
    def update_user(self, user_id: str, data: dict):
        "Função para atualizar um usuário"
        try:
            user = db.session.query(User).filter_by(id=user_id).first()
            if not user:
                return {"error": "Usuário não encontrado."}
            
            for key, value in data.items():
                if hasattr(user, key):
                    setattr(user, key, value)

            db.session.commit()
            return user.to_dict()
        except Exception as e:
            db.session.rollback()  
            return {"error": f"Erro ao atualizar usuário: {str(e)}"}