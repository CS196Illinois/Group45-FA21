from flask import render_template, flash, redirect, url_for, request, jsonify
from app import app, db
from flask_login import current_user, login_user, logout_user
from app.models import User, Entry
from app.journal import Journal
from app.affirmations import Affirmations
from random import *

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
def login(username, password, remember_me): # http://127.0.0.1:5000/login/user/pass/true for demo purposes
    users = User.query.all()
    for user in users:
        print(user.username)
    print(username)
    user = User.query.filter_by(username=username).first()
    if user is None or not user.check_password(password):
        return jsonify(message="username or password incorrect", success=0)
    login_user(user, remember=remember_me)
    return jsonify(
        message="success",
        success=1,
        id=user.id,
        username=user.username,
        email=user.email
    )
@app.route('/getUsers') # dev use only
def getUsers():
    users = User.query.all()
    for u in users:
        print(u.id, u.username)
    return "success"
@app.route('/logout') # use this for logout button
def logout():
    logout_user()
    return jsonify(message="successfully logged out")
@app.route('/register/<username>/<password>', methods=['GET', 'POST'])
def register(username, password):
    #try:
        user = User(username=username, email="none@gmail.com")
        user.set_password(password)
        db.session.add(user)
        db.session.commit()
        return jsonify(message="success")
    #finally:
    #    return jsonify(message="failure")

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

# affirmation route
@app.route('/affirmation', methods=['GET', 'POST'])
def affirmation():
    affirmationGenerator = Affirmations()
    return jsonify(affirmation=affirmationGenerator.getRandomAffirmation())