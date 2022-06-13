import { Glass } from './models/glass.js';

let glass = {};

let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

const renderGlassesList = () => {
    let content = dataGlasses.reduce((total, ele) => {
        total += `
            <div class="col-4">
                <img style="cursor: pointer;" class="img-fluid" src="../${ele.src}" onclick="chooseGlass('${ele.id}')">
            </div>
        `;
        return total;
    }, "");
    document.getElementById('vglassesList').innerHTML = content;
}

renderGlassesList();

window.chooseGlass = (id) => {
    const i = dataGlasses.findIndex((ele) => {
        return ele.id === id;
    })

    const item = dataGlasses[i];

    glass = new Glass(item.id, item.virtualImg, item.brand, item.name, item.color, item.price, item.description);

    renderToModel(glass, true);

}

const renderToModel = (ele, check) => {
    if (check) {
        const content = `<img src="../${ele.img}"></img>`;
        document.getElementById('avatar').innerHTML = content;
        const description = `
        <h3>${ele.name} - ${ele.brand} (${ele.color})</h3>
        <span class="btn btn-danger">$${ele.price}</span> <span class="text-success">Stocking</span>
        <p>${ele.desc}</p>
    `;
        document.getElementById('glassesInfo').style.display = "block";
        document.getElementById('glassesInfo').innerHTML = description;
    } else {
        document.getElementById('avatar').innerHTML = "";
        document.getElementById('glassesInfo').style.display = "none";

    }
}

window.removeGlasses = (check) => {
    if(check){
        renderToModel(glass, check);
    }else{
        renderToModel(glass, false);
    }
}