//const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s`;
document.addEventListener(`DOMContentLoaded`, function(){

document.querySelector(`form`).addEventListener(`submit`, function(event){
    event.preventDefault();
    const searchValue = document.querySelector(`#search`).value;
    searchCocktail(searchValue);
});

// Fetch data from the public API
   function searchCocktail(searchValue){ 
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s`)
    .then(res => res.json())
    .then(data => {
        displayCocktails(data.drinks);
    });
}

//Created a function that handles the response acquired from the Public API
    function displayCocktails(cocktails){
        const cocktailList = document.querySelector(`#cocktailList`);
        const cocktailDetails = document.querySelector(`#cocktailDetails`);
        cocktailList.innerHTML = ``;
        cocktailDetails.innerHTML = ``;


//added a list that will store and show the results after searching for a drink
        if(cocktails){
            cocktails.forEach(cocktail => {
                const cocktailItem = document.createElement(`li`);
                cocktailItem.textContent = cocktail.strDrink;
                cocktailItem.addEventListener(`click`, function(){
                    displayCocktailDetails(cocktail);
                });
                cocktailList.appendChild(cocktailItem);
            });
        } else {
            // incase the drink searched is not available i have created a list element that will dislpay a message 
            const message = document.createElement(`li`);
            message.textContent = `Cocktail cannot be found`;
            cocktailList.appendChild(message);
        };
    }


    function displayCocktailDetails(cocktail) {
        const cocktailDetails = document.querySelector(`#cocktailDetails`);
        const detailsContainer = document.createElement(`div`);

        detailsContainer.innerHTML = `
        <h2>${cocktail.strDrink}</h2>
        <p>Category: ${cocktail.strCategory}</p>
        <p>Glass: ${cocktail.strGlass}</p>
        <p>Instructions: ${cocktail.strInstructions}</p>
        <p>InstructionsES: ${cocktail.strInstructionES}</p>
        <p>InstructionDE: ${cocktail.strInstructionDE}</p>
        <p>InstructionIT: ${cocktail.strInstructionIT}</p>
        <p>DrinkThumb: ${cocktail.strDrinkThumb}</p>
        <p>Ingredient 1: ${cocktail.strIngredient1}</p>
        <p>Ingredient 2: ${cocktail.strIngredient2}</p>
        <p>Ingredient 3: ${cocktail.strIngredient3}</p>`;

        cocktailDetails.appendChild(detailsContainer);

    };
});