/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import { registerImage } from "./lazy.js";
import { showCount } from "./lazy.js";

const minimum = 1; 
const maximun = 123;
const random = () => Math.floor(Math.random()*(maximun - minimum)) + minimum;

const createImagenNode = () => {
    const container = document.createElement("div");
    container.className = "div1 p-4";

    const imagen = document.createElement("img");
    imagen.className = "mx-auto";
    imagen.width = "320";
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
 
    const paper = document.createElement("div");
    paper.className = "bg-gray-300";
    paper.style.maxWidth = "320px";
    paper.style.minHeight = "150px";
    paper.style.display = "inline-block";

    
    paper.appendChild(imagen);
    container.appendChild(paper);
    
    return container;
}

const mountNode = document.getElementById("images");

const addButton = document.querySelector('#agregar');
const limpiarButton = document.querySelector('#limpiar');


addButton.className = "p-4 w-32 bg-indigo-400 rounded-full mx-3 hover:bg-blue-300 active:bg-blue-800";
limpiarButton.className = "p-4 w-32 bg-indigo-400 rounded-full mx-3 hover:bg-blue-300 active:bg-blue-800";
addButton.style.color = "white";
limpiarButton.style.color = "white";
addButton.style.outline = "none";
limpiarButton.style.outline = "none";
addButton.style.display = "block";
addButton.style.width = "150px";
addButton.style.margin = "10px auto";
limpiarButton.style.display = "block";
limpiarButton.style.width = "150px";
limpiarButton.style.margin = "10px auto";


export var count;
count = 0;

const addImage = () => {
    const newImage = createImagenNode();
    mountNode.append(newImage);

    count++;
    registerImage(newImage);
    cleaned = false;
};

addButton.addEventListener('click', addImage);


limpiarButton.addEventListener('click', removeImages);



function removeImages(){
    const allImages = document.getElementsByClassName('div1');
    const arrayImages = Array.from(allImages);
    arrayImages.forEach( item =>{
        const parent = item.parentNode;
        parent.removeChild(item);
    });
    count = 0; 
    cleaned = true;
    showCount(count, 0, cleaned);
}

export var cleaned;
