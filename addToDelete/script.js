const product = [
    {
        id: 0,
        image: 'image/image1.jpg',
        title:  "watch 1",
        price: 120
    },
    {
        id: 1,
        image: 'image/image2.jpg',
        title:  "watch 2",
        price: 120
    },
    {
        id: 2,
        image: 'image/image3.jpg',
        title:  "watch 3",
        price: 420
    },
    {
        id: 3,
        image: 'image/image4.jpg',
        title:  "watch 4",
        price: 520
    },
    {
        id: 4,
        image: 'image/image5.jpg',
        title:  "watch 5",
        price: 250
    }
]

const categories = [...new Set(product.map((item) => {
    console.log(item);
    // return item;
}))]
document.querySelector('.root').innerHTML = categories.map((item) => {
    let {image, title, price} = item;
    console.log(item);
    return 
        `<div class="box">
            <div class="img-box">
                <img class="image" src=${image}></img>
            </div>       
            <div class="bottom">
                <P>${title}</P>
                <h2>${price}.00</h2>` +  
                "<button onclick='addtocart("")'></button>""
        //     </div> 
        // </div>
})