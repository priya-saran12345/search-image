const accesskey="2Hp5q1xGaDA741dLOeR9DCiMiKmyTUUHkS1apVpeqlY";
const input = document.querySelector(".input");
const allimage = document.querySelector(".img");
const form = document.querySelector("form");
const more = document.querySelector(".btn1");

let search="";
let pageno=1;

async function show ()
{
search=input.value;
console.log(search)
const url= `https://api.unsplash.com/search/photos?page=${pageno}&query=${search}&client_id=${accesskey}`;

const response= await fetch(url);
const data= await response.json();
const result = data.results;
console.log(data)

if (pageno ===1)
{
    allimage.innerHTML=""
}
 result.map((res)=>
 {
    const  imagewrapper =document.createElement("div")
    imagewrapper.classList.add("img1")
   const image=document.createElement("img")
   image.src=res.urls.small;
   image.alt=res.alt_description;
   const link =document.createElement("a")
   link.href =res.links.html;
   link.target="_blank";
   link.textContent=res.alt_description;
   imagewrapper.appendChild(image);
   imagewrapper.appendChild(link);
   allimage.appendChild(imagewrapper);


 });
 pageno ++;
 if(pageno >1)
 {
    more.style.display ="block";
 }
}


form.addEventListener('submit',(event)=>
{
    event.preventDefault();
    pageno=1;
    show();
})

more.addEventListener("click",()=>
{
    show();
})