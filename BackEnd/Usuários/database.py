from connector import db, User, UserList, ListGame


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
    
    def delete_user(self, user_id: str):
        "Função para deletar um usuário"
        try:
            user = db.session.query(User).filter_by(id=user_id).first()
            if not user:
                return {"error": "Usuário não encontrado."}
            
            db.session.delete(user)
            db.session.commit()
            return {"message": "Usuário deletado com sucesso!"}
        except Exception as e:
            db.session.rollback()  
            return {"error": f"Erro ao deletar usuário: {str(e)}"}
        
    def create_list(self, list: UserList):
        "Função para criar uma lista de jogos"
        try:
            db.session.add(list)
            db.session.commit()
            return list.to_dict()
        except Exception as e:
            return {"error": f"Erro ao criar lista de jogos: {str(e)}"}
        
    def add_game_to_list(self, game: ListGame):
        "Função para adicionar um jogo a uma lista de jogos"
        try:
            db.session.add(game)
            db.session.commit()
            return {"message": "Jogo adicionado a lista de jogos com sucesso!"}
        except Exception as e:
            db.session.rollback()  
            return {"error": f"Erro ao adicionar jogo a lista de jogos: {str(e)}"}
    
    def updateQuantidade(self, list_id: str):
        "Função para atualizar a quantidade de jogos em uma lista de jogos"
        try:
            list = db.session.query(UserList).filter_by(id=list_id).first()
            if not list:
                return {"error": "Lista de jogos nao encontrada."}
            list.quantidade += 1
            db.session.commit()
            return list.to_dict()
        except Exception as e:
            db.session.rollback()  
            return {"error": f"Erro ao atualizar quantidade de jogos: {str(e)}"}
    