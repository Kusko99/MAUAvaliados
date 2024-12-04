from flask import Flask
from auth import get_token
from barramento import barramento
from threading import Thread
import os, sys
from flask_cors import CORS


app = Flask(__name__)
CORS(app, origins="http://localhost:3000", methods=["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"], allow_headers=["Content-Type", "Authorization"])

# def consumer():
#     try:
#         barramento().recive()
#     except KeyboardInterrupt:
#         try:
#             sys.exit(0)
#         except SystemExit:
#             os._exit(0)

def main():
    #Importando as rotas
    from routes import games_routes
    #Registrando as rotas
    app.register_blueprint(games_routes)
    #Obtendo o token de acesso da API
    get_token()
    
if __name__ == '__main__':
    # consumer_thread = Thread(target=consumer)
    # consumer_thread.start()

    main()  
    app.run(port=5051) 