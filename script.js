const submit = document.querySelector(".formed");
const searchBox = document.querySelector(".searchBox");

const searchButton = document.querySelector(".searchBtn");

const myImg = document.querySelector("#availImg");

let userSearch= "";
let page = 1;
let apiKey = "cLJeez9NqgMBgS0JWD-RQD-AoPI5AoPFz4zTiu6mlY0";

async function getImages(){
    userSearch = searchBox.value;
    const apiurl = `https://api.unsplash.com/search/photos?page=${page}&query=${userSearch}&client_id=${apiKey}&per_page=12`;

    const response = await fetch(apiurl);
    const data = await response.json();
    
    if(page===1){
        myImg.innerHTML = "";
    }
     const results = data.results;
     results.map((result)=>{
         const images = document.createElement("img");
         images.src = result.urls.small;

         const reference = document.createElement("a");

         reference.href = result.links.html;

         reference.appendChild(images);
           myImg.appendChild(reference);

           
     });
        
     showMore.style.display = "block";
     
}

searchButton.addEventListener("click",(e) =>{
    e.preventDefault();
    page = 1;
    getImages();
})


const showMore = document.querySelector(".showmore");

showMore.addEventListener("click", () =>{
    page++;
    getImages();
   
})


 


 