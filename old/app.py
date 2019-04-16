import os

import pandas as pd
import numpy as np

from flask_pymongo import PyMongo
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


#################################################
# Database Setup
#################################################

####### TODO  ↓ ↓ ↓ ↓ ↓ ↓ 
##app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/OOOOOOOOOOOOO.sqlite"

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/pets"
# app.config["MONGO_URI"] = "mongodb+srv://k9sam:1234@petfinder-qbryn.mongodb.net/test"

mongo = PyMongo(app)

db = SQLAlchemy(app)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(db.engine, reflect=True)

# Save references to each table
####### TODO  ↓ ↓ ↓ ↓ ↓ ↓ 
# Adoption_data = Base.classes.OOOOOOO



@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")


@app.route("/findDog")
def findDog():
    """Return a list of sample names."""

    # Use Pandas to perform the sql query
    stmt = db.session.query(Adoption_data)
    df = pd.read_sql_query(stmt, db.session.bind)

    # Return a list of the column names (sample names)
    return jsonify(list(df.columns)[2:])


@app.route("/findCat")
def findCat():
    """Return a list of sample names."""

    # Use Pandas to perform the sql query
    stmt = db.session.query(Adoption_data)
    df = pd.read_sql_query(stmt, db.session.bind)

    # Return a list of the column names (sample names)
    return jsonify(list(df.columns)[2:])



@app.route("/adoptadog")
def findPet():
    return render_template("findadog.html")

@app.route("/adoptacat")
def findPet():
    return render_template("findacat.html")
    
@app.route("/about")
def overview():
    return render_template("about.html")

@app.route("/maps")
def maps():
    return render_template("maps.html")

@app.route("/cost")
def cost():
    return render_template("cost.html")

if __name__ == "__main__":
    app.run()