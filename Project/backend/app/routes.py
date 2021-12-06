from flask import render_template, flash, redirect, url_for, request, jsonify
from app import app, db
from flask_login import current_user, login_user, logout_user
from app.models import User, Entry
from app.forms import LoginForm, RegistrationForm
from app.journal import Journal
from random import *

# query string -> 10.27.09.91/index?arg1=value1&arg2=value2 use this for passing data to login and submitEntry and maybe other routes

@app.route('/')
def home():
    return "hello world"

# user and login routes
@app.route('/verify')
def verify():
    user = current_user
    if not (current_user.is_authenticated):
        return jsonify(message="no user is logged in")
    return "username: " + current_user.username + "\n email: " + current_user.email
@app.route('/login/<username>/<password>/<remember_me>', methods=['GET', 'POST']) # use this route for login screen -- will return json of user if auth or {} if not
def login():
    try:
        username = request.args['username']
        password = request.args['password']
        remember_me = request.args['remember_me']
        user = User.query.filter_by(username=username).first()
        if user is None or not user.check_password(password):
            return jsonify(message="username or password incorrect")
        login_user(user, remember=remember_me)
        return jsonify(
            id=user.id,
            username=user.username,
            email=user.email
        )
    finally:
        return jsonify(message="error logging in (SHOULD NOT HAPPEN IN PRODUCTION)")
@app.route('/logout') # use this for logout button
def logout():
    logout_user()
    return jsonify(message="successfully logged out")
@app.route('/register', methods=['GET', 'POST'])
def register(username, email, password):
    try:
        user = User(username=username, email=email)
        user.set_password(password)
        db.session.add(user)
        db.session.commit()
    finally:
        return jsonify(message="invalid input")

# journal routes
@app.route('/prompt', methods=['GET', 'POST'])
def prompt():
    journal = Journal()
    return jsonify(prompt=journal.getRandomEntry())
@app.route('/getEntries', methods=['GET', 'POST'])
def getEntries():
    if (current_user.is_authenticated):
        return jsonify(entries=current_user.posts.all())
    else:
        return jsonify(message="not logged in")
@app.route('/submitEntry', methods=['GET', 'POST'])
def submitEntry(body, prompt):
    journal = Journal
    if (current_user.is_authenticated):
        try:
            journal.submitEntry(body, prompt, current_user)
        finally:
            return jsonify(message="not successfully submitted")
    else:
        return jsonify(message="not logged in")