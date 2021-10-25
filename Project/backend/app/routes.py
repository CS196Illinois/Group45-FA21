from flask import render_template
from app import app
from flask_login import current_user, login_user

@app.route('/')
@app.route('/index')
def index():
    return "hi"
@app.route('/login', methods=['GET', 'POST'])
def login():
    if()
    return redirect(url_for('index'))
