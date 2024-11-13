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
            result = self.query(f'''MATCH q=(l)-[:JOGOU]->(n)-[a]->(p)<-[]-(b) WHERE l.id="{id}"  RETURN b LIMIT 30''')
            for record in result:
                resultado = dumps(record.data()["b"])
                jogos.append(resultado)
            return jogos
        except Exception as e:
            return {"error": f"Erro ao coletar recomendacoes: {str(e)}"}
    
    def create_usuario(self, id):
        entrada1 = 'CREATE (:person {'
        entrada2 = f'id: "{id}"'
        entrada3 = '})'
        entrada = entrada1 + entrada2 + entrada3
        try:
            self.query(entrada)
            result = self.query(f'''MATCH (a) WHERE a.id="{id}" RETURN a''')
            for record in result:
                resultado = dumps(record.data()["a"])
            return resultado
        except Exception as e:
            return {"error": f"Erro ao criar usuário: {str(e)}"}
            
    
    def delete_usuario(self, id):
        try:
            self.query(f'MATCH (a)-[n:JOGOU]->() WHERE a.id="{id}" DELETE n')
            self.query(f'MATCH (a) WHERE a.id="{id}" DELETE a')
            return {"message": "Usuário deletado com sucesso!"}
        except Exception as e:
            return {"error": f"Erro ao deletarusuário: {str(e)}"}
        
    def create_aval(self, id_user, id_game, id_aval):
        try:
            self.query(f'MATCH (a:person),(b:GAME) WHERE a.id="{id_user}" AND b.id="{id_game}" CREATE (a)-[n:JOGOU]->(b) SET n.id="{id_aval}"')
            return {"message": "Avaliacao criada com sucesso!"}
        except Exception as e:
            return {"error": f"Erro ao criar avaliacao: {str(e)}"}
        
    def delete_aval(self, id_user, id_game):
        try:
            self.query(f'MATCH (a:person)-[r:JOGOU]->(b:GAME) WHERE a.id="{id_user}" AND b.id="{id_game}" DELETE r ')
            return {"message": "Avaliacao deletada com sucesso!"}
        except Exception as e:
            return {"error": f"Erro ao deletar avaliacao: {str(e)}"}
        
    def get_aval(self, id_aval):
        try:
            a = self.query(f'MATCH ()-[n:JOGOU]->() WHERE n.id="{id_aval}" RETURN n')
            return  a
        except Exception as e:
            return {"error": f"Erro ao buscar avaliacao: {str(e)}"}

    uri = "neo4j+s://bd4734be.databases.neo4j.io"
    user = "neo4j"
    password = "yTLZZOMbu_IzqJFwlBvtXMkp6FUvsFaY_hobmdZft_E"

conn = RecomendaDB()
print(conn.get_aval(5))




# try:
#     result = conn.query('''MATCH (n) WHERE n.title="teste" RETURN n LIMIT 10''')
#     for record in result:
#         print(record.data())
# finally:
#     print("n deu")
#     conn.close()