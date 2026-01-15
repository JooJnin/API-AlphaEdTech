let products = [
    { id: 1, name: "Teclado", value: 250.00 },
    { id: 2, name: "Mouse", value: 120.50 }
];
// let nextProductId = products.length + 1;

const controller = require('./controller')

class Product extends controller{
    resourceName = "Produto"

    createResource(req,res){
        const {name,value} = req.body;
        const newProduct = {id: this.nextId++, name, value};
        this.arr.push(newProduct);

        return this.createSucess(res,newProduct);
    }
    updateResource(req,res){
        const id = parseInt(req.params.id);
        const index = this.getIndex(id);
        const {name, value} = req.body;

        if(index === -1){
            return res.status(404).json({error: `${this.resourceName} ${id} não encontrado`})
        }
        this.arr[index] = {...this.arr[index], name, value};

        return res.status(200).json({message: `${this.resourceName} ${id} atualizado`});
    }
}

const productController = new Product(products);


module.exports = productController;

// const getAllProducts = (req,res) => {
//     res.json(products);
// }

// const getProduct = (req,res) => {
//     const productId = parseInt(req.params.id);
//     const productIndex = products.findIndex((product) => product.id === productId);

//     if(productIndex === -1){
//         return res.status(404).json({error: 'Produto não encontrado'})
//     }

//     res.status(200).json(products[productIndex])
// }

// const createProduct = (req,res) => {
//     const {name, value} = req.body;

//     if (!name || !value){
//         return res.status(400).json({error: "Nome e valor do produto obrigatórios"})
//     }

//     const newProduct = {id: nextProductId++, name, value};
//     products.push(newProduct);
//     res.status(201).json({message:"Produto criado"});
//     res.json(newProduct);
// }

// const updateProduct = (req,res) => {}
// const deleteProduct = (req,res) => {}

// module.exports = {
//     getAllProducts,
//     getProduct,
//     createProduct,
//     updateProduct,
//     deleteProduct
// };