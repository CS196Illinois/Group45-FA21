from flask import render_template
from app import app, db
from flask_login import current_user, login_user
from app.models import User
from flask_login import logout_user
from app.forms import LoginForm, RegistrationForm

@app.route('/')
@app.route('/index')
def index():
    return "hi"
@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user is None or not user.check_password(form.password.data):
            return render_template('login.html', info="login unsuccessful :(", form=form)
        login_user(user, remember=form.remember_me.data)
        return render_template('login.html', info="login successful :) welcome, " + form.username.data, form=form)
    return render_template('login.html', info="please sign in", form=form)
@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('index'))
@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(username=form.username.data, email="email@gmail.com")
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        # flash('Congratulations, you are now a registered user!')
        return "you are registered :)"
    return render_template('register.html', title='Register', form=form)
