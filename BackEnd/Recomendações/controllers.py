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
    
    def create_usuario(self, user:dict):
        "Controller para criar usuário"
        RecomendaDB().create_usuario(user)       
    
    def delete_usuario(self, user:dict):
        "Controller para deletar usuario no banco"
        saida = RecomendaDB().delete_usuario(user)
        retorno = dumps(saida)
        return retorno
    
    def create_aval(self, body:dict):
        "Controller para criar aval"
        if body["aval_nota"] >= 6:
            saida = RecomendaDB().create_aval(body)
        else:
            saida = {"Nota muito baixa, não serão recomendados jogos parecidos"}
        retorno = dumps(saida)
        return retorno
    
    def edit_aval (self, body):
        "Controller para editar aval"
        checagem = RecomendaDB().get_aval(body)
        if body["aval_nota"] >= 6:
            if len(checagem) == 0:
                saida = RecomendaDB().create_aval(body)
            else:  
                saida = {"Avaliacao ja existe no banco"}
        else:
            if len(checagem) == 0:
                saida = {"Nota muito baixa, avaliacao apagada"}
            else:  
                saida = RecomendaDB().delete_aval(body)
        retorno = dumps(saida)
        return retorno
    
    def delete_aval(self, body):
        retorno = RecomendaDB().delete_aval(body)
        return dumps(retorno)

    




    