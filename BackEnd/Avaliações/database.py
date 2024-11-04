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
        