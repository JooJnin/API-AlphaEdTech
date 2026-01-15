let orders = [{}]
let nextOrderId = orders.length + 1;


const getAllOrders = (req,res) => {
    res.json(orders)
}
const getOrder = (req,res) => {
    const orderId = parseInt(req.params.id);
    const orderIndex = orders.findIndex((order) => order.id === orderId);

    if (userIndex === -1){
        return res.status(404);
    }
    res.json(order[orderIndex]);
}
const createOrder = (req,res) => {
    const {order,value} = req.body;

    if (!order || !value){
        return res.status(400)
    }
    
    const newOrder = {id: nextUserId++, order, value};
    orders.push(newOrder);
    res.status(201)
}

const updateOrder = (req,res) => {
    const orderId = parseInt(req.params.id);
    const {order,value} = req.body;
    const orderIndex = orders.findIndex((order) => order.id === orderId);
    if (userIndex === -1){
        return res.status(404);
    }

    orders[orderIndex] = {...orders[orderIndex], order, value};    
}
const deleteOrder = (req,res) => {
    const userId = parseInt(req.params.id);
}

module.exports = {
    getAllOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder
};