from connector import db, Aval

class AvaliacaoDB :
    def __init__(self) :
        pass

    def create_aval(self, aval: Aval):
        "Função para criar uma avaliação"
        print(aval)
        try:
            db.session.add(aval)
            db.session.commit()
            print("Avaliação criada com sucesso!")
            return aval.to_dict()
        except Exception as e:
            return {"error": f"Erro ao criar avaliação: {str(e)}"}
        
    def get_aval_by_id_user(self, id_user:str):
        "função para buscar uma avaliação pelo id do usuário"
        try:
            list_aval = db.session.query(Aval).filter_by(id_user=id_user).all()
            resp = []
            for aval in list_aval:
                resp.append(aval.to_dict())
            return {"avaliações": resp} 
        except Exception as e:
            return {"error": f"Erro ao buscar avaliação: {str(e)}"}
        
    def get_aval_by_id_jogo(self, id_jogo:str):
        "função para buscar uma avaliação pelo id do jogo"
        try:
            list_aval = db.session.query(Aval).filter_by(id_jogo=id_jogo).all()
            resp = []
            for aval in list_aval:
                resp.append(aval.to_dict())
            return {"avaliações": resp}
        except Exception as e:
            return {"error": f"Erro ao buscar avaliação: {str(e)}"}
    
    def update_aval(self, id: str, data: dict):
        "Função para atualizar uma avaliação"
        try:
            aval = db.session.query(Aval).filter_by(id=id).first()
            if not aval:
                return {"error": "Avaliação não encontrada."}
            
            for key, value in data.items():
                if hasattr(aval, key):
                    setattr(aval, key, value)

            db.session.commit()
            return aval.to_dict()
        except Exception as e:
            db.session.rollback()
            return {"error": f"Erro ao atualizar avaliação: {str(e)}"}

    def delete_aval(self, id: str):
        "função de deletar avaliação"
        try:
            aval = db.session.query(Aval).filter_by(id=id).first()
            if not aval:
                return {"error": "Avaliação não encontrada"}

            db.session.delete(aval)
            db.session.commit()
            return {"message": "Usuário deletado com sucesso!"}
        except Exception as e:
            db.session.rollback()
            return {"error": f"Erro ao deletar avaliações: {str(e)}"}
            