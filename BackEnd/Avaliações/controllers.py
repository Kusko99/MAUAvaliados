from database import AvaliacaoDB 
from connector import Aval
from barramento import barramento
import uuid

class AvaliacaoController:
    def __init__(self) -> None:
        pass

    def create_avaliacao(self, aval: dict) -> dict:
        "Controller de criação de uma Avaliação"
        db_aval = Aval(
            id=str(uuid.uuid4()),
            id_user=aval["id_user"],
            id_jogo=aval["id_jogo"],
            aval_escrita=aval["aval_escrita"],
            aval_nota=aval["aval_nota"],
        )
        barramento().publish("AvaliacaoCreated", db_aval.to_dict())
        aval = AvaliacaoDB().create_aval(db_aval)
        return aval
    
    def get_aval_by_id_user(self, id_user:str) -> dict:
        "Controller de puxar uma avaliação pelo id do usuário"
        aval = AvaliacaoDB().get_aval_by_id_user(id_user)
        return aval
    
    def get_aval_by_id_jogo(self, id_jogo:str) -> dict:
        "Controller de puxar uma avaliação pelo id do jogo"
        aval = AvaliacaoDB().get_aval_by_id_jogo(id_jogo)
        return aval
    
    def update_aval(self, id: str, aval_data: dict) -> dict:
        "Controller de atualização de uma avaliação"
        update_aval = AvaliacaoDB().update_aval(id, aval_data)
        barramento().publish("AvalUpdate", update_aval)
        return update_aval
    
    def delete_aval(self, id: str) -> dict:
        "Controller de exclusão de uma avaliação"
        response = AvaliacaoDB().delete_aval(id)
        barramento().publish("AvaliaçãoDeleted", {"aval_id": id})
        return response