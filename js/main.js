// constructing a shoe object
// when you construct an object you provided arguments, these arguments are not strings.
// ask Leon the difference btw the two
function Shoe (price, brand, color, style, pic){
  this.price=price;
  this.brand=brand;
  this.color=color;
  this.style=style;
  this.pic=pic;
}
// creating an instance of shoe object
const aldo = new Shoe (34.99,"aldo", "black", "flat", "images/aldo2.jpg")
const steveMadden = new Shoe (89.99,"steveMadden","black","heel", "images/steveM.jpg")
const dsw = new Shoe (54.99, "dsw", "cognac", "thigh knee boot", "images/dsw.jpeg")
const vans = new Shoe(49.99, "vans", "black","sneaker", "images/vans.jpeg");

function create_image(src, brand) {
  let img = document.createElement("img");
  img.id = brand;
  img.src = src;
  img.alt = brand;
  document.getElementById(brand).appendChild(img);
}

function create_div(shoe) {
  let div = document.createElement("div");
  let pic = shoe.pic;
  let style = shoe.style;
  let color = shoe.color;
  let brand = shoe.brand;
  let price = shoe.price;

  div.id = brand;
  div.className = color + " shoe";
  document.getElementById('shoes').appendChild(div);

  create_image(pic, brand);

  let h2 = document.createElement("h2");
  h2.innerHTML = brand;
  h2.className = "brand hide";
  div.appendChild(h2);

  let h3 = document.createElement("h3");
  h3.innerHTML = style;
  h3.className = "style hide";
  div.appendChild(h3);

  let h3h3 = document.createElement("h3");
  h3h3.innerHTML = color;
  h3h3.className = "color hide";
  div.appendChild(h3h3);

  let h3h3h3 = document.createElement("h3");
  h3h3h3.innerHTML = price;
  h3h3h3.className = "price hide";
  div.appendChild(h3h3h3);
}

create_div(aldo);
create_div(dsw);
create_div(steveMadden);
create_div(vans);

document.getElementById("vans").onclick = showVans;

function showVans(){
  document.querySelector("#vans .brand").classList.toggle("hide");
  document.querySelector("#vans .style").classList.toggle("hide");
  document.querySelector("#vans .color").classList.toggle("hide");
  document.querySelector("#vans .price").classList.toggle("hide");
}

document.getElementById("steveMadden").onclick = stevie;

function stevie(){
  document.querySelector("#steveMadden .brand").classList.toggle("hide");
  document.querySelector("#steveMadden .style").classList.toggle("hide");
  document.querySelector("#steveMadden .color").classList.toggle("hide");
  document.querySelector("#steveMadden .price").classList.toggle("hide");
}

document.getElementById("aldo").onclick = aldo1;

function aldo1(){
  document.querySelector("#aldo .brand").classList.toggle("hide");
  document.querySelector("#aldo .style").classList.toggle("hide");
  document.querySelector("#aldo .color").classList.toggle("hide");
  document.querySelector("#aldo .price").classList.toggle("hide");
}

document.getElementById("dsw").onclick = dsw1;

function dsw1(){
  document.querySelector("#dsw .brand").classList.toggle("hide");
  document.querySelector("#dsw .style").classList.toggle("hide");
  document.querySelector("#dsw .color").classList.toggle("hide");
  document.querySelector("#dsw .price").classList.toggle("hide");
}



document.getElementById("black").onclick = showBlackOnly;
function showBlackOnly(){
  let tag = document.getElementsByClassName("shoe");
  console.log(tag);

  for (let i = 0; i < tag.length; i++) {
    tag[i].style.display="none";
  }


  let tag2 = document.getElementsByClassName("black");
  for (let i = 0; i < tag2.length; i++) {
    tag2[i].style.display="inline-block";
    console.log(tag2[i]);
  }
  console.log(tag2);
}

document.getElementById("cognac").onclick = showCognacOnly;
function showCognacOnly(){
  let tag = document.getElementsByClassName("shoe");
  console.log(tag);

  for (let i = 0; i < tag.length; i++) {
    tag[i].style.display="none";
  }


  let tag2 = document.getElementsByClassName("cognac");
  for (let i = 0; i < tag2.length; i++) {
    tag2[i].style.display="inline-block";
  }
}





// ES6 syntax


// click event for filtering, user will:
// user will: click on a button to get the filter they want
// user expects: to get things that match what they were filtering by

// user willL click on the shoe to get the description of the shoe
// user expects: the description of the shoe on the screen or dom

// Task create 3 buttons in html for colors, create 3 buttons for brands.
// create a div that will hold desrcription info, give id of shoe-description.
// css task: make the shoes div width 50%, float left display inline block (both).
// create a function that compares the color of a shoe with a color from one of my filter buttons.
// create a function that creates these elements: img for shoe image, h1 for the shoe brand, h2 for the shoe price, h3 for the shoe color, h4 for the shoe style.
// append the shoe description to the shoe description div element
