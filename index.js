const url = "www.thecocktaildb.com/api/json/v1/1/search.php?s"

// Fetch data from the public API
document.addEventListener(`DOMContentLoaded`, function(){
   function searchCocktail(searchValue){ 
    fetch(url)
    .then(res => res.json)
    .then(data => {
        displayCocktails(data.drinks);
    });
}

    document.querySelector(`form`).addEventListener(`submit`, function(event){
        event.preventDefault();
        const searchValue = document.querySelector(`search`).value;
        searchCocktail(searchValue);
    });

    function displayCocktails(cocktails){
        const cocktailList = document.querySelector(`#cocktail-list`);
        cocktailList.innerHTML = ``;

        if(cocktails){
            cocktails.forEach(cocktail => {
                const cocktailItem = document.createElement(`li`);
            })
        }
    }
});