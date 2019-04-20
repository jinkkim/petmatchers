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

db_annual_cost = mongo.db.annual_costs
db_capital_cost = mongo.db.capital_costs


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
    return render_template("adoptapet.html", animals = dog_search_results, list_breeds=dog_list_breeds, list_sizes = dog_list_sizes, list_genders = dog_list_genders, list_ages = dog_list_ages, list_colors = dog_list_colors, face = "🐶"  )

@app.route("/adoptacat")
def adoptacat():
    return render_template("adoptapet.html", animals = cat_search_results, list_breeds=cat_list_breeds, list_sizes = cat_list_sizes, list_genders = cat_list_genders, list_ages = cat_list_ages, list_colors = cat_list_colors, face = "🐱" )

@app.route("/adoptapet")
def adoptapet():
    return render_template("adoptapet.html", animals = search_results, list_breeds= list_breeds, list_sizes = list_sizes, list_genders = list_genders, list_ages = list_ages, list_colors = list_colors, face = face )


@app.route("/cost")
def cost():
    cost_data = ["",""]
    cost_data[0] = dumps(db_annual_cost.find())
    cost_data[1] = dumps(db_capital_cost.find())
    return render_template("cost.html", cost_data = cost_data)

    
@app.route("/aboutdogs")
def about_dog():

    df_dogData = pd.DataFrame(list(db_dogData.find()))

     # dog statistics for chart
    breed_info = df_dogData.groupby("breed")["_id"].count().sort_values(ascending=False)
    breed_names = list(breed_info[0:10].keys())
    breed_count = list(breed_info[0:10])

    age_info = df_dogData.groupby("age")["_id"].count()
    age_names = list(age_info.keys())
    age_count = list(age_info)

    size_info = df_dogData.groupby("size")["_id"].count()
    size_names = list(size_info.keys())
    size_count = list(size_info)

    dog_statistics = [breed_names, breed_count, age_names, age_count, size_names, size_count]


    # data for maps
    US_state_info = df_dogData[df_dogData["contact_country"] == "US"].groupby("contact_state")["_id"].count()
    state_names = list(US_state_info.keys())
    state_count = list(US_state_info)
    state_name_converted = []
    dog_population = {}
    
    for state in state_names:
        state_name_converted.append(states_convert[state])

    for i in range(len(state_names)):
        dog_population.update({state_name_converted[i]:state_count[i] })

    return render_template("aboutdogs.html", dog_statistics = dog_statistics, dog_population = dog_population )

@app.route("/aboutcats")
def about_cat():

    df_catData = pd.DataFrame(list(db_catData.find()))
    
    # cat statistics for graphs
    breed_info = df_catData.groupby("breed")["_id"].count().sort_values(ascending=False)
    breed_names = list(breed_info[0:10].keys())
    breed_count = list(breed_info[0:10])

    age_info = df_catData.groupby("age")["_id"].count()
    age_names = list(age_info.keys())
    age_count = list(age_info)

    size_info = df_catData.groupby("size")["_id"].count()
    size_names = list(size_info.keys())
    size_count = list(size_info)

    cat_statistics = [breed_names, breed_count, age_names, age_count, size_names, size_count]


    # cat data for maps
    US_state_info = df_catData[df_catData["contact_country"] == "US"].groupby("contact_state")["_id"].count()
    state_names = list(US_state_info.keys())
    state_count = list(US_state_info)
    state_name_converted = []
    cat_population = {}
    
    for state in state_names:
        state_name_converted.append(states_convert[state])

    for i in range(len(state_names)):
        cat_population.update({state_name_converted[i]:state_count[i] })

    return render_template("aboutcats.html", cat_statistics = cat_statistics, cat_population = cat_population)


if __name__ == "__main__":
    app.run(debug=True)