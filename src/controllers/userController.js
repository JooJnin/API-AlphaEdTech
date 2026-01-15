let users = [
    {id:1, user:'user1', email: 'user1@email.com'},
    {id:2, user:'user2', email: 'user2@email.com'}
]
let nextUserId = users.length + 1;

const getAllUsers = (req,res) =>{
    res.json(users);
}

const getUser = (req,res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex((user) => user.id === userId);

    if (userIndex === -1){
        return res.status(404).json({error: 'Usuário não encontrado'})
    }
    
    res.status(200)
    res.json(users[userIndex]);
}

const createUser = (req,res) =>{
    const {user,email} = req.body;

    if (!user || !email){
        return res.status(400).json({error: 'User e email são brigatorios'})
    }

    const newUser = {id: nextUserId++, user, email};
    users.push(newUser);
    res.status(201).json({message:"Usuário criado"});
    res.json(newUser);
}


const updateUser = (req,res) =>{
    const userId = parseInt(req.params.id);
    const {username , email} = req.body;
    
    const userIndex = users.findIndex((user) => user.id === userId);
    
    if (userIndex === -1){
        return res.status(404).json({error: 'Usuário não encontrado'})
    }

    users[userIndex] = {...users[userIndex], username, email};
    
    res.status(200);
    res.json({message: `Usuario com ID ${userId} atualizado`});
}

const deleteUser = (req,res) =>{
    const userId = parseInt(req.params.id);
    users = users.filter((user) => user.id !== userId);
    res.status(204);
    res.json({message: `Usuario com ID ${userId} excluído`});
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};