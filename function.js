const button=document.getElementById("button")
const linkspace=document.getElementById("site")

function getJoke(){
    const sites=[
    "https://5movierulz.tc/telugu-movie/",
    "https://olamovies.cloud/",
    "https://www.1377x.is/",
    "https://myflixer.onl/",
    "https://ww2.ibomma.link/",
    "www.youtube.com",
    ];
    const randomindexvalue=Math.floor(Math.random() * sites.length);
    const link=sites[randomindexvalue];
    linkspace.innerText = link;

}

button.addEventListener("click", getJoke)
