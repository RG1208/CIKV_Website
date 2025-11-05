from flask import Flask #type:ignore
from flask_cors import CORS #type:ignore
from dotenv import load_dotenv #type:ignore
import os

from extensions import db
from routes import auth_bp, blog_bp, event_bp, gallery_bp
from config import Config

load_dotenv()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Init extensions
    db.init_app(app)
    CORS(app)

    # Register blueprints
    app.register_blueprint(auth_bp)
    app.register_blueprint(blog_bp)
    app.register_blueprint(event_bp)
    app.register_blueprint(gallery_bp)

    with app.app_context():
        db.create_all()

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
