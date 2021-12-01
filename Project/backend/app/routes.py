from flask import render_template, flash, redirect, url_for, request
from app import app, db
from flask_login import current_user, login_user, logout_user
from app.models import User, Entry
from app.forms import LoginForm, RegistrationForm
from app.journal import Journal
from random import *

@app.route('/')
def home():
    return "hello world"
@app.route('/verify')
def verify():
    user = current_user
    if not (current_user.is_authenticated):
        return "no user is logged in"
    return "username: " + current_user.username + "\n email: " + current_user.email
@app.route('/login', methods=['GET', 'POST']) # use this route for login screen
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user is None or not user.check_password(form.password.data):
            return {}
            # return render_template('login.html', info="login unsuccessful :(", form=form)
        login_user(user, remember=form.remember_me.data)
        return {'id': user.id, 'username': user.username, 'email': user.email}
        # render_template('login.html', info="login successful :) welcome, " + form.username.data, form=form)
    return render_template('login.html', info="please sign in", form=form)
@app.route('/affirmation', methods=['GET', 'POST']) # untested -- affirmations api
def affirmation():
    source = request.args.get("https://www.affirmations.dev")
    # response = requests.get(url).json
    return source
@app.route('/logout') # use this for logout button
def logout():
    logout_user()
    return redirect(url_for('index'))
@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(username=form.username.data, email=form.email.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        # flash('Congratulations, you are now a registered user!')
        return "you are registered :)"
    return render_template('register.html', title='Register', form=form)
@app.route('/prompt', methods=['GET', 'POST'])
def prompt():
    journal = Journal()
    return journal.getRandomEntry()