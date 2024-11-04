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
            id=uuid.uuid4(),
            id_user=aval["id_user"],
            id_jogo=aval["id_jogo"],
            aval_escrita=aval["aval_escrita"],
            aval_nota=aval["aval_nota"],
        )
        barramento().publish("AvaliacaoCreated", db_aval.to_dict())
        aval = AvaliacaoDB().create_avaliacao(db_aval)
        return aval