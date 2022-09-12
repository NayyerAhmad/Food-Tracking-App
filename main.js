import { FetchWrapper } from "./fetch-wrapper.js"

const form = document.querySelector("form");
const carbsInput = document.querySelector("#nut_carbs");
const proteinInput = document.querySelector("#nut_protein");
const fatInput = document.querySelector("#nut_fat");
const submitButton = document.querySelector("button");
const foodSelection = document.querySelector("select_food");
const containerLoggedFood = document.querySelector(".containter_loggedFood");
const totalCalories = document.querySelector(".caloriesLogged");
let foodItemDivs = document.querySelectorAll(".foodItem");

const API = new FetchWrapper(
  "https://firestore.googleapis.com/v1/projects/programmingjs-90a13/databases/(default)/documents/helloworld54321"
);
