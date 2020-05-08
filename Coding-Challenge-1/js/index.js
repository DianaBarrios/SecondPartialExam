function fetchResults(topic){
    let url = 'https://www.themealdb.com/api/json/v1/1/search.php';
    let settings = {
        Method: 'GET',
        query: {
            s: topic
        }
    };

    fetch(url, settings)
    .then( result => {
        console.log(result);
        let body = result.body;
        console.log(body);
        let completName = body.strMeal;
        let mealArea = body.strArea;
        let instructions = body.strInstructions;

    })
    .catch(err => {
        return err;
    })
}

function watchForm(){
    let form = document.querySelector('.js-search-form');
    let topic = document.querySelector('.js-query');
    form.addEventListener('submit', (event) =>{
        //
        console.log("clicking")
        event.preventDefault();
        fetchResults(topic.value);
    });
}

function init(){
    watchForm();
}

init();