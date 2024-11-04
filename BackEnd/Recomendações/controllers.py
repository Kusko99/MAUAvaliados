from database import RecomendaDB
from json import dumps

class RecomendaController:
    def __init__(self):
        pass

    def get_recomendacao_by_id(self, id: str) -> dict:
        "Controller para conseguir uma recomendação baseda no id do user"
        jogos = RecomendaDB().get_recomendacao_by_id(id)
        n =1
        dic ={}
        for jogo in jogos:
            chave = f"jogo {n}"
            dic[chave]=jogo
            n+=1
        recomendacao = dumps(dic)
        return recomendacao



    