let orders = [{id:1, items:[{item: 'item1', quantity: 1},{item: 'item2', quantity:2}]}]
// let nextOrderId = orders.length + 1;

const controller = require('./controller');

class Order extends controller{
    // constructor(arr){
    //     super(arr);
    // }
    resourceName = "Pedido"
    createResource(req,res){
        const {items} = req.body;
        const newOrder = {id: this.nextId++, items};
        this.arr.push(newOrder);

        //res.status(201).json(newOrder)
        return this.createSucess(res, newOrder);
    }
    updateResource(req,res){
        const id = parseInt(req.params.id);
        const index = this.getIndex(id);
        const {items} = req.body;
        
        if(index === -1){
            return res.status(404).json({error: `${this.resourceName} ${id} não encontrado`})
        }
        this.arr[index] = {...this.arr[index], items};

        return res.status(200).json({message: `${this.resourceName} ${id} atualizado`}, this.arr[index]);
    }
}

const orderController = new Order(orders);

module.exports = orderController;

// const getAllOrders = (req,res) => {
//     res.json(orders)
// }
// const getOrder = (req,res) => {
//     const orderId = parseInt(req.params.id);
//     const orderIndex = orders.findIndex((order) => order.id === orderId);

//     if (userIndex === -1){
//         return res.status(404);
//     }
//     res.json(order[orderIndex]);
// }
// const createOrder = (req,res) => {
//     const {order,value} = req.body;

//     if (!order || !value){
//         return res.status(400)
//     }
    
//     const newOrder = {id: nextUserId++, order, value};
//     orders.push(newOrder);
//     res.status(201)
// }

// const updateOrder = (req,res) => {
//     const orderId = parseInt(req.params.id);
//     const {order,value} = req.body;
//     const orderIndex = orders.findIndex((order) => order.id === orderId);
//     if (userIndex === -1){
//         return res.status(404);
//     }

//     orders[orderIndex] = {...orders[orderIndex], order, value};    
// }
// const deleteOrder = (req,res) => {
//     const userId = parseInt(req.params.id);
// }

// module.exports = {
//     getAllOrders,
//     getOrder,
//     createOrder,
//     updateOrder,
//     deleteOrder
// };