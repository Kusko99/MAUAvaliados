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
        f"@{os.getenv('MYSQL_HOST')}/{os.getenv('MYSQL_DB_USER')}"
    )
    db.init_app(app)
    with app.app_context():
        db.create_all()


class User(db.Model):
    "Classe que representa o usuário no banco de dados"
    __tablename__ = "users"

    id = db.Column(db.String(255), primary_key=True)
    password = db.Column(db.Boolean, nullable=False)
    banned = db.Column(db.Boolean, nullable=False)
    locked = db.Column(db.Boolean, nullable=False)
    imageUrl = db.Column(db.String(255), nullable=False)
    hasImage = db.Column(db.Boolean, nullable=False)
    username = db.Column(db.String(255), nullable=True)
    firstName = db.Column(db.String(255), nullable=True)
    lastName = db.Column(db.String(255), nullable=True)
    emailAdress = db.Column(db.String(255), nullable=True)

    def to_dict(self):
        """Converte o objeto User para um dicionário."""
        return {
            column.name: getattr(self, column.name) for column in self.__table__.columns
        }
    
class UserList(db.Model):
    "Classe que representa a lista de jogos de um usuário no banco de dados"
    __tablename__ = "userlist"

    id = db.Column(db.String(255), primary_key=True)
    id_user = db.Column(db.String(255), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    quantidade = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        """Converte o objeto User para um dicionário."""
        return {
            column.name: getattr(self, column.name) for column in self.__table__.columns
        }
    
class ListGame(db.Model):
    "Classe que representa o jogo de uma lista de jogos no banco de dados"
    __tablename__ = "listgame"

    id_list = db.Column(db.String(255), nullable=False)
    id_jogo = db.Column(db.String(255), nullable=False)

    __table_args__ = (
        db.PrimaryKeyConstraint('id_list', 'id_jogo'),  # Define chave primária composta
    )

    def to_dict(self):
        """Converte o objeto User para um dicionário."""
        return {
            column.name: getattr(self, column.name) for column in self.__table__.columns
        }