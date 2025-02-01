

// This arrayOfObject Contains all images and every single information(name,price,description) about products!
const products = [
    {name: "Gaming Table", price:"Price: 15000Rs", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDjQEh7msWQwnZF--XgtNZno2T-HQ0RMA0A&s", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed enim, id incidunt possimus consectetur cumque laboriosam quae ducimus esse dolorum pariatur, earum ipsam. Velit nulla atque error sequi ex perspiciatis!"},

    {name:"Iphone 15", price: "Price: 60000Rs", img:"https://istore.co.na/cdn/shop/files/iPhone_15_Black_PDP_Image_Position-1__WWEN_tif_2048x.jpg?v=1696890816", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed enim, id incidunt possimus consectetur cumque laboriosam quae ducimus esse dolorum pariatur, earum ipsam. Velit nulla atque error sequi ex perspiciatis!"},

    {name:"8gb Ram",price:"Price: 1500Rs", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8danp4jA9e4l2U0gHdYcQId8JEOwR7cUSg&s", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed enim, id incidunt possimus consectetur cumque laboriosam quae ducimus esse dolorum pariatur, earum ipsam. Velit nulla atque error sequi ex perspiciatis!"},

    {name:"Graphice Card", price:"Price: 20000Rs", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIQLtcQTFDu4-LM6a-P6BHkeHjj-xGxxcnaw&s", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed enim, id incidunt possimus consectetur cumque laboriosam quae ducimus esse dolorum pariatur, earum ipsam. Velit nulla atque error sequi ex perspiciatis!"},

    {name:"Gaming Monitor", price:"Price: 28000Rs", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaAJpErO8qcpbg41bfowa9KP4FJBJLsWefZw&s", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed enim, id incidunt possimus consectetur cumque laboriosam quae ducimus esse dolorum pariatur, earum ipsam. Velit nulla atque error sequi ex perspiciatis!"},

    {name:"Gaming Keybord", price:"Price: 8000Rs", img:"https://www.cultofmac.com/wp-content/uploads/2024/06/NZXT-Function-mechanical-gaming-keyboard-1536x1536.jpg", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed enim, id incidunt possimus consectetur cumque laboriosam quae ducimus esse dolorum pariatur, earum ipsam. Velit nulla atque error sequi ex perspiciatis!"},

    {name:"Gaming Chair", price:"Price: 15000Rs", img:"https://images-cdn.ubuy.co.in/664b199aa88be552943934a4-gtplayer-gaming-chair-with-footrest-and.jpg", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed enim, id incidunt possimus consectetur cumque laboriosam quae ducimus esse dolorum pariatur, earum ipsam. Velit nulla atque error sequi ex perspiciatis!"},
    
    {name:"Gaming Cpu", price:"Price: 50000Rs", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSVi3zK2PBX2kckevzKGZt_5iIVDC38lyw0g&s", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed enim, id incidunt possimus consectetur cumque laboriosam quae ducimus esse dolorum pariatur, earum ipsam. Velit nulla atque error sequi ex perspiciatis!"},

    {name:"Gaming Mouse", price:"Price: 6000Rs", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR65hYBvFJU0gdXNK7Tos670n31PIqZUuohhoGXJPtMq8YXtBW1E7wUOo03pJSnCzqq_h4&usqp=CAU", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed enim, id incidunt possimus consectetur cumque laboriosam quae ducimus esse dolorum pariatur, earum ipsam. Velit nulla atque error sequi ex perspiciatis!"}
    
]


for(let i = 0; i < products.length; i++) {
    const imgElement = document.getElementById(`img${i + 1}`); //id:"img1"
    const nameElement = document.getElementById(`Product${i + 1}`);
    const priceElement = document.getElementById(`price${i + 1}`);
    const descriptionElement = document.getElementById(`description${i + 1}`);
    if(imgElement && nameElement && priceElement && descriptionElement) {
        imgElement.src = products[i].img;
        nameElement.textContent = products[i].name;
        priceElement.textContent = products[i].price;
        descriptionElement.textContent = products[i].description;
    }
}




















