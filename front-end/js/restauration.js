import { Carousel } from './script.js';

async function fetchFoods() {
  try {
    const response = await fetch("../../front-end/js/data/foods.json");
    const dataf = await response.json();

    if (dataf.data) {
      const foods = dataf.data.map(item => ({
        description : item.name,
        image: item.picture
      }));
      // Création de plusieurs carrousels
      new Carousel(foods, "carrousel-restau-1", "dot-restau-1");
    }
  } catch (error) {
    console.error("Erreur lors du chargement des restaurants :", error);
  }
}

fetchFoods();
