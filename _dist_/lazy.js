import { cleaned, count } from "./index.js";
const isIntersecting = (entry) => {
    return entry.isIntersecting;    
}

export var loadingCount;
loadingCount = 0;

const loadImage = (entry) => {
    const container = entry.target;
    const imagen = container.firstChild.firstChild;
    const url = imagen.dataset.src;

    imagen.src = url;
    loadingCount++;
    
    observer.unobserve(container);
}

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage);
    showCount(count, loadingCount, cleaned)
});




export const registerImage = (image) => {
    //IntersectionObserver -> observer(image);
    observer.observe(image);
}

const lightCircle = document.createElement('div');
lightCircle.style.width = '10px';
lightCircle.style.height = '10px';
lightCircle.style.borderRadius = '50%';
lightCircle.style.backgroundColor = 'blue';


export function showCount(totales, cargadas, limpiado){
    if(limpiado){
        loadingCount = 0;
    }
    console.log("\u26aa",`Total imagenes: ${totales}`);
    console.log('\u26ab',`Imgs cargadas:  ${cargadas}`);
    console.log('----------------------------');
}

