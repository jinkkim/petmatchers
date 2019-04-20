import pandas as pd
import numpy as np
from states_covert import states_convert

from flask_pymongo import PyMongo
from flask import Flask, render_template, request, redirect, url_for
from bson.json_util import dumps
import json
app = Flask(__name__)

# Database Setup
#app.config["MONGO_URI"] = "mongodb://localhost:27017/pets"
app.config["MONGO_URI"] = "mongodb+srv://k9sam:1234@petfinder-qbryn.mongodb.net/pets"

mongo = PyMongo(app)

# variables for collections in the "pets" DB
db_dogData = mongo.db.dogs_by_page
dog_search_results = list(db_dogData.find().limit(100))
dog_list_breeds = [""] + list(db_dogData.distinct("breed"))
dog_list_sizes = [""] + list(db_dogData.distinct("size"))
dog_list_genders = [""] + list(db_dogData.distinct("gender"))
dog_list_ages =  [""] + list(db_dogData.distinct("age"))
dog_list_colors =  [""] + list(db_dogData.distinct("color"))

db_catData = mongo.db.cats_by_page
cat_search_results = list(db_catData.find().limit(100))
cat_list_breeds = [""] + list(db_catData.distinct("breed"))
cat_list_sizes = [""] + list(db_catData.distinct("size"))
cat_list_genders = [""] + list(db_catData.distinct("gender"))
cat_list_ages =  [""] + list(db_catData.distinct("age"))
cat_list_colors =  [""] + list(db_dogData.distinct("color"))

search_results = []
list_breeds = []
list_sizes = []
list_genders = []
list_ages = []
list_colors = []
face=""

db_cost = mongo.db.annual_costs
db_cap_cost = mongo.db.capital_costs

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/search_this', methods = ['POST'])
def search_this():

    received_data = request.form['search_data']
    search_keyword = json.loads(received_data)
    global search_results
    global list_breeds
    global list_sizes
    global list_genders
    global list_ages
    global list_colors
    global face

    if search_keyword["species"] == "Cat":
        query = [{k:v} for k,v in search_keyword.items() if v != ""]
        search_results = list(db_catData.find( {"$and": query }).limit(100))
        list_breeds = cat_list_breeds
        list_sizes = cat_list_sizes
        list_genders = cat_list_genders
        list_ages = cat_list_ages
        list_colors = cat_list_colors
        face = "🐱"

    elif search_keyword["species"] == "Dog":
        query = [{k:v} for k,v in search_keyword.items() if v != ""]
        search_results = list(db_dogData.find( {"$and": query }).limit(100))

        list_breeds = dog_list_breeds
        list_sizes = dog_list_sizes
        list_genders = dog_list_genders
        list_ages = dog_list_ages
        list_colors = dog_list_colors
        face = "🐶"

    else:
        pass

    return redirect(url_for("adoptapet"))

@app.route("/adoptadog")
def adoptadog():
    animals = list(db_dogData.find().limit(100))
    return render_template("adoptadog.html", animals = animals)


@app.route("/adoptacat")
def adoptacat():
    animals = list(db_catData.find().limit(100))
    return render_template("adoptacat.html", animals = animals)

@app.route("/cost")
def cost():
    cost_data = dumps(db_cost.find())
    cap_cost_data = dumps(db_cap_cost.find())
    return render_template("cost.html", cost_data = cost_data, cap_cost_data = cap_cost_data)

@app.route("/aboutdogs")
def about_dog():

    return render_template("aboutdogs.html")

@app.route("/aboutcats")
def about_cat():
    return render_template("aboutcats.html")



if __name__ == "__main__":
    app.run()