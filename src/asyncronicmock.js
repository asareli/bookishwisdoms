const products = [
    {id: 1, name: "Anna Karenina by Lev Tolstoi", price: 40, img: "../public/img/products/annaKarenina.jpg"},
    {id: 2, name: "The Alchemist by Paulo Coelho", price: 20, img: "../public/img/products/elAlquimista.jpg"},
    {id: 3, name: "Harry Potter and The Prisoner of Azkaban by J.K. Rowling", price: 35, img: "../public/img/products/elPrisioneroDeAzkaban.jpg"},
    {id: 4, name: "The Tunnel by Ernesto Sábato", price: 15, img: "../public/img/products/elTunel.jpg"},
    {id: 5, name: "Foundation by Isaac Asimov", price: 40, img: "../public/img/products/foundation.jpg"},
    {id: 6, name: "Coffee Dregs by Mario Benedetti", price: 20, img: "../public/img/products/laBorraDelCafe.jpg"},
    {id: 7, name: "Harry Potter and The Chamber of Secrets by J.K. Rowling", price: 20, img: "../public/img/products/laCamaraDeLosSecretos.jpg"},
    {id: 8, name: "Harry Potter and the Philosopher Stone by J.K. Rowling", price: 25, img: "../public/img/products/laPiedraFilosofal.jpg"},
    {id: 9, name: "Little Women by Louisa May Alcott", price: 45, img: "../public/img/products/mujercitas.jpg"},
    {id: 10, name: "Neko Coffee by Anna Sólyom", price: 10, img: "../public/img/products/nekoCafe.jpg"},
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