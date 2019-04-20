from states_covert import states_convert
import pandas as pd
import numpy as np
#import sqlalchemy
#from sqlalchemy.ext.automap import automap_base
#from sqlalchemy.orm import Session
#from sqlalchemy import create_engine
#from flask_sqlalchemy import SQLAlchemy

from flask_pymongo import PyMongo
from flask import Flask, render_template
from bson.json_util import dumps

app = Flask(__name__)

# Database Setup
#app.config["MONGO_URI"] = "mongodb://localhost:27017/pets"
app.config["MONGO_URI"] = "mongodb+srv://k9sam:1234@petfinder-qbryn.mongodb.net/pets"

mongo = PyMongo(app)

# variables for collections in the "pets" DB
db_dogData = mongo.db.dogs_by_page
db_catData = mongo.db.cats_by_page
db_cost = mongo.db.annual_costs


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/adoptadog")
def adoptadog():
    animals = list(db_dogData.find().limit(100))
    return render_template("adoptapet.html", animals = animals)


@app.route("/adoptacat")
def adoptacat():
    animals = list(db_catData.find().limit(100))
    return render_template("adoptapet.html", animals = animals)

@app.route("/cost")
def cost():
    cost_data = dumps(db_cost.find())
    return render_template("cost.html", cost_data = cost_data)

    
@app.route("/about")
def about():
    
    # dog statistics
    df_dogData = pd.DataFrame(list(db_dogData.find()))
    breed_info = df_dogData.groupby("breed")["_id"].count().sort_values(ascending=False)
    breed_names = list(breed_info[0:10].keys())
    breed_count = list(breed_info[0:10])

    age_info = df_dogData.groupby("age")["_id"].count()
    age_names = list(age_info.keys())
    age_count = list(age_info)

    size_info = df_dogData.groupby("size")["_id"].count()
    size_names = list(size_info.keys())
    size_count = list(size_info)


    US_state_info = df_dogData[df_dogData["contact_country"] == "US"].groupby("contact_state")["_id"].count()
    state_names = list(US_state_info.keys())
    state_count = list(US_state_info)
    state_name_converted = []
    dog_population = {}
    
    for state in state_names:
        state_name_converted.append(states_convert[state])

    for i in range(len(state_names)):
        dog_population.update({state_name_converted[i]:state_count[i] })

    dog_statistics = [breed_names, breed_count, age_names, age_count, size_names, size_count, dog_population]
    
    return render_template("about.html", dog_statistics = dog_statistics )





if __name__ == "__main__":
    app.run()