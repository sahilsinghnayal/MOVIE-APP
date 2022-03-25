const API_url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=09fb54c8e59d99da60d4cb69e95144ee&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API ='https://api.themoviedb.org/3/search/movie?api_key=09fb54c8e59d99da60d4cb69e95144ee&query="';
getmovies(API_url);
const form=document.getElementById('form');
const search=document.getElementById('search');
async function getmovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results);
  // results api ke andr tha
}

form.addEventListener('submit' ,(e)=>{
  e.preventDefault();
const searchterm=search.value;
if(searchterm && searchterm!==''){
  getmovies(SEARCH_API + searchterm) //conactinate the searchapi with value thst user is searching 
  search.value='';

} else {
  window.location.reload();
}

})
