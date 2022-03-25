const API_url ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=09fb54c8e59d99da60d4cb69e95144ee&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API ='https://api.themoviedb.org/3/search/movie?api_key=09fb54c8e59d99da60d4cb69e95144ee&query="';

getmovies(API_url);
const form=document.getElementById('form');
const search=document.getElementById('search');
const main=document.getElementById('main');
async function getmovies(url) {
  const res = await fetch(url);// fetching the url
  const data = await res.json();//converting into json 
  showmovie(data.results);
  // results api ke andr tha
}
function showmovie(movies){ 
  main.innerHTML= ''
  movies.forEach((movie)=>{
    const{title, poster_path, vote_average, overview}=movie

    const movieEl=document.createElement('div')
    movieEl.classList.add('movie');
    movieEl.innerHTML=`
    
    <img src="${IMG_PATH+poster_path}" alt="${title}"/>
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getclassbyrate()}">${vote_average}</span>
    </div> 
    <div class="overview">
      <h3>overview</h3>
     ${overview}
    </div>
    
    `
    main.appendChild(movieEl)
  })

}
function getclassbyrate(vote){
  if(vote>=8){
    return 'green'
  }else if(vote>5 ){
    return 'orange'
  } else{
    return 'red'
  }
}

form.addEventListener('submit' ,(e)=>{ // when the form is submitted then it will tiggered 
  e.preventDefault();
const searchterm=search.value;
if(searchterm && searchterm!==''){ // if the value is not empty
  getmovies(SEARCH_API + searchterm) //concatinate the searchapi with value thst user is searching 
  search.value='';

} else {    //if value is empty then it will reload the screen

  window.location.reload();
}

})
