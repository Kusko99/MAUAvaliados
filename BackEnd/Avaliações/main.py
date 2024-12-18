from flask import Flask
from flask_cors import CORS
from barramento import barramento
from threading import Thread
import os, sys
from connector import db, init_db
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="http://localhost:3000", methods=["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"], allow_headers=["Content-Type", "Authorization"])

# CORS(
#     app,
#     resources={r"/*": {"origins": "http://localhost:3000"}},
#     supports_credentials=True,  # Se você usar cookies ou autenticação
#     expose_headers=["Content-Type", "Authorization"],  # Exponha cabeçalhos necessários
# )


# CORS(app)

def consumer():
    try:
        print("Hello")
        barramento().recive()
    except KeyboardInterrupt:
         try:
             sys.exit(0)
         except SystemExit:
             os._exit(0)

def main():
    #Importando as rotas
    from routes import avaliacao_routes
    #Registrando as rotas
    init_db(app)
    app.register_blueprint(avaliacao_routes)
    

if __name__ == '__main__':
    consumer_thread = Thread(target=consumer)
    consumer_thread.start()

    main()
    app.run(port=6051)