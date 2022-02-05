/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import { registerImage } from "./lazy";

const minimum = 1; 
const maximun = 123;
const random = () => Math.floor(Math.random()*(maximun - minimum)) + minimum;

const createImagenNode = () => {
    const container = document.createElement("div");
    container.className = "p-4";

    const imagen = document.createElement("img");
    imagen.className = "mx-auto";
    imagen.width = "320";
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(imagen);
    return container;
}

const mountNode = document.getElementById("images");

const addButton = document.querySelector('button');
const addImage = () => {
    const newImage = createImagenNode();
    mountNode.append(newImage);
    registerImage(newImage);
};

addButton.addEventListener('click', addImage);
