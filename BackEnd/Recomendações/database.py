from neo4j import GraphDatabase
from json import dumps

class RecomendaDB:

    def __init__(self,):
        self.driver = GraphDatabase.driver(self.uri, auth=(self.user, self.password))

    def close(self):
        self.driver.close()

    def query(self, query, parameters=None):
        with self.driver.session() as session:
            result = session.run(query, parameters)
            return [record for record in result]
        
    def get_recomendacao_by_id(self,id):
        jogos = []
        try:
            #q=(l)-[:JOGOU]->
            result = self.query(f'''MATCH q=(l)-[:JOGOU]->(n)-[:Do_Genero]->(p)<-[:Do_Genero]-(b) WHERE l.id="{id}"  RETURN b LIMIT 15''')
            for record in result:
                saida = record.data()["b"]
                del saida['criado_em']
                resultado = dumps(saida)
                jogos.append(resultado)
            return jogos
        except Exception as e:
            return {"error": f"Erro ao coletar recomendacoes: {str(e)}"}
    
    def get_jogos_nota(self):
        jogos = []
        try:
            #q=(l)-[:JOGOU]->
            result = self.query(f'''MATCH (a:Jogos) WHERE a.`notas.total_rating` IS NOT NULL  ORDER BY a.`notas.total_rating` DESC RETURN a LIMIT 15;''')
            for record in result:
                saida = record.data()["a"]
                del saida['criado_em']
                resultado = dumps(saida)
                jogos.append(resultado)
            return jogos
        except Exception as e:
            return {"error": f"Erro ao coletar jogos: {str(e)}"}
        
    def get_jogos_data(self):
        jogos = []
        try:
            #q=(l)-[:JOGOU]->
            result = self.query(f'''MATCH (a:Jogos) WHERE a.`criado_em` IS NOT NULL  ORDER BY a.`criado_em` DESC RETURN a LIMIT 15;''')
            for record in result:
                saida = record.data()["a"]
                del saida['criado_em']
                resultado = dumps(saida)
                jogos.append(resultado)
            return jogos
        except Exception as e:
            return {"error": f"Erro ao coletar jogos: {str(e)}"}
    
    def create_usuario(self, user):
        entrada1 = 'CREATE (:person {'
        entrada2 = f'id: "{user["id"]}"'
        entrada3 = '})'
        entrada = entrada1 + entrada2 + entrada3
        try:
            self.query(entrada)
            result = self.query(f'''MATCH (a) WHERE a.id="{user["id"]}" RETURN a''')
            for record in result:
                resultado = dumps(record.data()["a"])
            return resultado
        except Exception as e:
            return {"error": f"Erro ao criar usuário: {str(e)}"}
            
    
    def delete_usuario(self, user):
        try:
            self.query(f'MATCH (a)-[n:JOGOU]->() WHERE a.id="{user["user_id"]}" DELETE n')
            self.query(f'MATCH (a) WHERE a.id="{user["user_id"]}" DELETE a')
            return {"message": "Usuário deletado com sucesso!"}
        except Exception as e:
            return {"error": f"Erro ao deletarusuário: {str(e)}"}
        
    def create_aval(self,body):
        try:
            self.query(f'MATCH (a:person),(b:GAME) WHERE a.id="{body["id_user"]}" AND b.id="{body["id_game"]}" CREATE (a)-[n:JOGOU]->(b) SET n.id="{body["id"]}"')
            return {"message": "Avaliacao criada com sucesso!"}
        except Exception as e:
            return {"error": f"Erro ao criar avaliacao: {str(e)}"}
        
    def delete_aval(self, body):
        try:
            self.query(f'MATCH ()-[r:JOGOU]->() WHERE r.id="{body["id"]}" DELETE r ')
            return {"message": "Avaliacao deletada com sucesso!"}
        except Exception as e:
            return {"error": f"Erro ao deletar avaliacao: {str(e)}"}
        
    def get_aval(self, body):
        try:
            a = self.query(f'MATCH ()-[n:JOGOU]->() WHERE n.id="{body["id"]}" RETURN n')
            return  a
        except Exception as e:
            return {"error": f"Erro ao buscar avaliacao: {str(e)}"}

    uri = "neo4j+ssc://bd4734be.databases.neo4j.io"
    user = "neo4j"
    password = "yTLZZOMbu_IzqJFwlBvtXMkp6FUvsFaY_hobmdZft_E"

conn = RecomendaDB()
# porta = conn.get_jogos_data()
# for jogo in porta:
#     print(jogo)





# try:
#     result = conn.query('''MATCH (n) WHERE n.title="teste" RETURN n LIMIT 10''')
#     for record in result:
#         print(record.data())
# finally:
#     print("n deu")
#     conn.close()