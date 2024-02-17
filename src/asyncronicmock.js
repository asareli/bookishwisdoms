const products = [
    {id: "1", name: "'Anna Karenina' by Lev Tolstoi", price: 40, img: "../public/img/products/annaKarenina.jpg", idCat: "1", stock: 100},
    {id: "2", name: "'The Alchemist' by Paulo Coelho", price: 20, img: "../public/img/products/elAlquimista.jpg", idCat: "2", stock: 100},
    {id: "3", name: "'Harry Potter and The Prisoner of Azkaban' by J.K. Rowling", price: 35, img: "../public/img/products/elPrisioneroDeAzkaban.jpg", idCat: "2", stock: 100},
    {id: "4", name: "'The Tunnel' by Ernesto Sábato", price: 15, img: "../public/img/products/elTunel.jpg", idCat: "3", stock: 100},
    {id: "5", name: "'Foundation' by Isaac Asimov", price: 40, img: "../public/img/products/foundation.jpg", idCat: "2", stock: 100},
    {id: "6", name: "'Coffee Dregs' by Mario Benedetti", price: 20, img: "../public/img/products/laBorraDelCafe.jpg", idCat: "1", stock: 100},
    {id: "7", name: "'Harry Potter and The Chamber of Secrets' by J.K. Rowling", price: 20, img: "../public/img/products/laCamaraDeLosSecretos.jpg", idCat: "2", stock: 100},
    {id: "8", name: "'Harry Potter and the Philosopher Stone' by J.K. Rowling", price: 25, img: "../public/img/products/laPiedraFilosofal.jpg", idCat: "2", stock: 100},
    {id: "9", name: "'Little Women' by Louisa May Alcott", price: 45, img: "../public/img/products/mujercitas.jpg", idCat: "1", stock: 100},
    {id: "10", name: "'Neko Coffee' by Anna Sólyom", price: 10, img: "../public/img/products/nekoCafe.jpg", idCat: "1", stock: 100},
]

export const getProducts = () => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000)
    })
}

export const getOneProduct = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const product = products.find(prod => prod.id === id);
            resolve(product);
        }, 2000)
    })
}

export const getProductsByCategory = (idCategory) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const productsCategory = products.filter(prod => prod.idCat === idCategory);
            resolve(productsCategory);
        }, 2000)
    })
}