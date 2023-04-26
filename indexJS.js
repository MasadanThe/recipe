const recipeButton = document.querySelector('.see-recipe-button');

function handleSeeRecipeButtonClick(){
    window.location.href="recipe.html";
}
recipeButton.addEventListener('click', handleSeeRecipeButtonClick)