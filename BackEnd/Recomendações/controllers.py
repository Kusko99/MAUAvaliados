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
    
    def create_usuario(self, id: str) -> dict:
        "Controller para criar usuario no banco"
        usuario = RecomendaDB().create_usuario(id)
        return usuario
    
    def delete_usuario(self, id: str) -> dict:
        "Controller para deletar usuario no banco"
        saida = RecomendaDB().delete_usuario(id)
        retorno = dumps(saida)
        return retorno
    
    def create_aval(self, id_user: str, id_game: str, id_aval: str, nota: float) -> dict:
        "Controller para criar aval"
        if nota >= 6:
            saida = RecomendaDB().create_aval(id_user,id_game, id_aval)
        else:
            saida = {"Nota muito baixa, não serão recomendados jogos parecidos"}
        retorno = dumps(saida)
        return retorno
    
    def edit_aval (self, id_user: str, id_game: str, id_aval: str, nota: float) -> dict:
        "Controller para editar aval"
        checagem = RecomendaDB().get_aval(id_aval)
        if nota >= 6:
            if len(checagem) == 0:
                saida = RecomendaDB().create_aval(id_user,id_game)
            else:  
                saida = {"Avaliacao ja existe no banco"}
        else:
            if len(checagem) == 0:
                saida = {"Nota muito baixa, avaliacao apagada"}
            else:  
                saida = RecomendaDB().delete_aval(id_user,id_game)
        retorno = dumps(saida)
        return retorno
    




    