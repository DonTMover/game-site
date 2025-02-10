import os
from flask import Flask, render_template, send_from_directory

app = Flask(__name__, static_folder='static', template_folder='templates')

@app.after_request
def add_headers(response):
    response.headers['Cross-Origin-Opener-Policy'] = 'same-origin'
    response.headers['Cross-Origin-Embedder-Policy'] = 'require-corp'
    return response

# Главная страница сайта (landing page)
@app.route('/')
def index():
    return render_template('index.html')

# Страница с игрой, которая будет в iframe
@app.route('/play')
def play():
    return render_template('ViralGame.html')

# Абсолютный путь до папки 'game'
GAME_FOLDER = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'game')

# Универсальный маршрут для отдачи любых файлов из папки game
@app.route('/game/<path:filename>')
def serve_game_files(filename):
    return send_from_directory(GAME_FOLDER, filename)

# Маршрут для отдачи файла ViralGame.png
@app.route('/ViralGame.png')
def serve_game_image():
    return send_from_directory(GAME_FOLDER, "ViralGame.png")

if __name__ == '__main__':
    app.run(debug=True)

