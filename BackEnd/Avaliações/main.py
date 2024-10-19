from flask import Flask
from flask_cors import CORS
from barramento import barramento
from threading import Thread
import os, sys

app = Flask(__name__)
CORS(app)

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
    from routes import avalicao_routes
    #Registrando as rotas
    app.register_blueprint(avalicao_routes)

if __name__ == '__main__':
    consumer_thread = Thread(target=consumer)
    consumer_thread.start()

    main()
    app.run(port=6000, debug=True)