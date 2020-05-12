function fetchResults(topic){
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${topic}`;
    let settings = {
        method: 'GET',
    };

    fetch(url, settings)
        .then( response => {
            if(response.ok){
                return result.json;
            }
        })
        .then(resJSON => {
            if(resJSON === null){
                console.log("Error")
            }

        })
        .catch(err => {
            console.log(err);
            return err;
        })
}

function watchForm(){
    let form = document.querySelector('.js-search-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let topic = document.querySelector('.js-query');
        
        fetchResults(topic);
    });
}

function init(){
    watchForm();
}

init();