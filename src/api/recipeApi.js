const API_KEY = "d12bba608f7742e89214";

const BASE_URL = "https://openapi.foodsafetykorea.go.kr/api";

export async function getRecipes() {
  try {
    const url = `${BASE_URL}/${API_KEY}/COOKRCP01/json/1/50`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data.COOKRCP01?.row) {
      return [];
    }

    return data.COOKRCP01.row;
  } catch (error) {
    console.log("getRecipes 오류:", error);
    return [];
  }
}

export async function searchRecipes(query) {
  try {
    const url = `${BASE_URL}/${API_KEY}/COOKRCP01/json/1/100`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data.COOKRCP01?.row) {
      return [];
    }

    return data.COOKRCP01.row.filter((recipe) =>
      recipe.RCP_NM?.includes(query)
    );
  } catch (error) {
    console.log("searchRecipes 오류:", error);
    return [];
  }
}

export async function getRecipeDetail(recipeId) {
  try {
    const url = `${BASE_URL}/${API_KEY}/COOKRCP01/json/1/100`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data.COOKRCP01?.row) {
      return null;
    }

    return (
      data.COOKRCP01.row.find(
        (item) => String(item.RCP_SEQ) === String(recipeId)
      ) || null
    );
  } catch (error) {
    console.log("getRecipeDetail 오류:", error);
    return null;
  }
}