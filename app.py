import os

import pandas as pd
import numpy as np

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



@app.route("/findPet")
def findPet():
    return render_template("findPet.html")
    

@app.route("/overview")
def overview():
    return render_template("overview.html")

@app.route("/maps")
def maps():
    return render_template("maps.html")

@app.route("/cost")
def cost():
    return render_template("cost.html")

if __name__ == "__main__":
    app.run()