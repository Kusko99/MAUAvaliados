from database import RecomendaDB
from database import connector

class RecomendaController:
    def __init__(self):
        pass

    def get_user_by_id(self, id: str) -> dict:
        "Controller que busca um(usuário) por ID"
        jogos = RecomendaDB().get_recomendacao_by_id(id)
        n =1
        dic ={}
        for jogo in jogos:
            chave = f"jogo{n}"
            dic[chave]=jogo
        return recomendacao