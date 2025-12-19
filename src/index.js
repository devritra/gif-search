import { fetchGif } from './fetchGif';
import './style.css';
const searchBox = document.querySelector("#search_box");
const searchBtn = document.querySelector("#search_btn");
const refreshBtn = document.querySelector("#refresh_btn");
const error = document.querySelector(".error");
let isFetched = false;
let searchTopic;

searchBtn.addEventListener("click",()=>{
    if(searchBox.value === ""){
        error.textContent = 'Please search something';
        return;
    }
    searchTopic = searchBox.value;
    fetchGif(searchTopic);
    isFetched = true;
})

searchBox.addEventListener("input",()=>{
    error.textContent = '';
    isFetched = false;
})

refreshBtn.addEventListener("click",()=>{
    if(isFetched){
        fetchGif(searchTopic);
    }
})