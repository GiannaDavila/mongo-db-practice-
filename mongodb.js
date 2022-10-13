import {MongoClient}from "mongodb";

import {uri} from "./credentials.js";

const client = new MongoClient(uri);
const db = client.db("sample_restaurants");
const restaurantsCollections = db.collection("MyRestaurants")

const newRestaurants = {
    name: "La Perrada Goldo",
    rating: "5 stars✨",
    genre: "Colombian",
    DateVisited: "2022/12/16",
  };

  const results = await restaurantsCollections.insertOne(newRestaurants)
  console.log("results of insert", results)