const users = [
    {id:1, user:'user1', email: 'user1@email.com'},
    {id:2, user:'user2', email: 'user2@email.com'}
]
// let nextUserId = users.length + 1;
const controller = require('./controller');

class Customer extends controller{
    resourceName = "Cliente"
    createResource(req,res){
        const {name, email} = req.body;
        const newCustomer = {id: this.nextId++, name, email};
        this.arr.push(newCustomer);

        //res.status(201).json(newOrder)
        return this.createSucess(res, newCustomer);
    }
    updateResource(req,res){
        const id = parseInt(req.params.id);
        const index = this.getIndex(id);
        const {name, email} = req.body;
        
        if(index === -1){
            return res.status(404).json({error: `${this.resourceName} ${id} não encontrado`})
        }
        this.arr[index] = {...this.arr[index], name, email};

        return res.status(200).json({message: `${this.resourceName} ${id} atualizado`}, this.arr[index]);
    }
}

const userController = new Customer(users);

module.exports = userController;

// const getAllUsers = (req,res) =>{
//     res.json(users);
// }

// const getUser = (req,res) => {
//     const userId = parseInt(req.params.id);
//     const userIndex = users.findIndex((user) => user.id === userId);

//     if (userIndex === -1){
//         return res.status(404).json({error: 'Usuário não encontrado'})
//     }
    
//     res.status(200)
//     res.json(users[userIndex]);
// }

// const createUser = (req,res) =>{
//     const {user,email} = req.body;

//     if (!user || !email){
//         return res.status(400).json({error: 'User e email são brigatorios'})
//     }

//     const newUser = {id: nextUserId++, user, email};
//     users.push(newUser);
//     res.status(201).json({message:"Usuário criado"});
//     res.json(newUser);
// }


// const updateUser = (req,res) =>{
//     const userId = parseInt(req.params.id);
//     const userIndex = users.findIndex((user) => user.id === userId);
//     const {username , email} = req.body;
        
//     if (userIndex === -1){
//         return res.status(404).json({error: 'Usuário não encontrado'})
//     }

//     users[userIndex] = {...users[userIndex], username, email};
    
//     res.status(200);
//     res.json({message: `Usuario com ID ${userId} atualizado`});
// }

// const deleteUser = (req,res) =>{
//     const userId = parseInt(req.params.id);
//     users = users.filter((user) => user.id !== userId);
//     res.status(204);
//     res.json({message: `Usuario com ID ${userId} excluído`});
// }

// module.exports = {
//     getAllUsers,
//     getUser,
//     createUser,
//     updateUser,
//     deleteUser
// };