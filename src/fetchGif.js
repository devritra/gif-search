const img = document.querySelector('img');
const error = document.querySelector(".error");
export function fetchGif(searchTopic){
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=EROv1aYNO5FNvg5upi7teFQSeSzoiNlQ&s=${searchTopic}`)
    .then(function(response) {
        if(response.ok){
            let convertedResponse = response.json();
            console.log(convertedResponse);
            return convertedResponse;
        } else {
            console.log("Error: server error");
            error.textContent = 'Error: server error';
        }
    })
    .then(function(response) {
        console.log(response);
        console.log(response.data.images.original.url);
        img.src = response.data.images.original.url;
    })
    .catch(function(response) {
        console.log(response);
        console.log("error ooof");
    });
}