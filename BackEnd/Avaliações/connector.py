from mysql.connector import Error
from dotenv import load_dotenv
from pathlib import Path
import os
from flask_sqlalchemy import SQLAlchemy

load_dotenv()

db = SQLAlchemy()

def init_db(app):
    "Função para inicializar o SQLAlchemy"
    app.config["SQLALCHEMY_DATABASE_URI"] = (
        f"mysql+pymysql://{os.getenv('MYSQL_USER')}:{os.getenv('MYSQL_PASSWORD')}"
        f"@{os.getenv('MYSQL_HOST')}/{os.getenv('MYSQL_DB_AVAL')}"
    )
    db.init_app(app)
    with app.app_context():
        db.create_all()

class Aval (db.Model):
    "Classe que representa as avaliações no banco de dados"
    __tablename__ = "aval"

    id = db.Column(db.String(36), primary_key = True)
    id_user = db.Column(db.String(255), nullable = False)
    id_jogo = db.Column(db.String(255), nullable = False)
    aval_escrita = db.Column(db.String(1000), nullable = False)
    aval_nota = db.Column(db.Float, nullable = False)

    def to_dict(self):
        """Converte o objeto User para um dicionário."""
        return {
            column.name: getattr(self, column.name) for column in self.__table__.columns
        }