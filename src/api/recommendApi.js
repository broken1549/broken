const SERVER_URL = "http://localhost:3000";

export async function getRecommendedRecipes(ingredients) {
  const response = await fetch(`${SERVER_URL}/recipes/recommend`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: ingredients,
    }),
  });

  const data = await response.json();
  return data.recipes;
}