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
        finally:
            self.close()

    uri = "neo4j+s://bd4734be.databases.neo4j.io"
    user = "neo4j"
    password = "yTLZZOMbu_IzqJFwlBvtXMkp6FUvsFaY_hobmdZft_E"

# conn = RecomendaDB(RecomendaDB.uri, RecomendaDB.user, RecomendaDB.password)

# conn.get_recomendacao_by_id(1)

# try:
#     result = conn.query('''MATCH (n) WHERE n.title="teste" RETURN n LIMIT 10''')
#     for record in result:
#         print(record.data())
# finally:
#     print("n deu")
#     conn.close()