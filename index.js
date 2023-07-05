const url = "www.thecocktaildb.com/api/json/v1/1/search.php?s"

// Fetch data from the public API
document.addEventListener(`DOMContentLoaded`, function(){
   function searchCocktail(searchValue){ 
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayCocktails(data.drinks);
    });
}

    document.querySelector(`form`).addEventListener(`submit`, function(event){
        event.preventDefault();
        const searchValue = document.querySelector(`search`).value;
        searchCocktail(searchValue);
    });
//Created a function that handles the response acquired from the Public API
    function displayCocktails(cocktails){
        const cocktailList = document.querySelector(`#cocktail-list`);
        cocktailList.innerHTML = ``;

//added a list that will store and show the results after searching for a drink
        if(cocktails){
            cocktails.forEach(cocktail => {
                const cocktailItem = document.createElement(`li`);
                cocktailItem.textContent = cocktail.strDrink;
                cocktailItem.addEventListener(`click`, function(){
                    getCocktailDetails(cocktail.idDrink);
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
    function getCocktailDetails(cocktailid){
        fetch(url)
        .then(res => res.json())
        .then(data => {
            displayCocktailDetails(data.drinks[0]);
        })
        //error message to be displayed here
    };

    function displayCocktailDetails(cocktail) {
        alert(`Name: ${cocktail.strDrink}, Category: ${cocktail.strCategory}, Glass: ${cocktail.strGlass}, Instructions: ${cocktail.strInstructions}`);
    };
});