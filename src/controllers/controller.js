const { request } = require("express");

class controller {
    constructor(arr) {
        this.arr = arr;
        this.nextId = arr.length + 1;
        this.resourceName = "Recurso";
    }
    
    getIndex(id){
        return this.arr.findIndex((keys) => keys.id === id);
    }
    createSucess(res, resource){
        return res.status(201).json(resource)
    }

    getAllResources(req, res) {
        res.json(this.arr);
    }
    
    getResource(req, res) {
        const id = parseInt(req.params.id);
        const index = this.getIndex(id);
        
        if (index === -1){
            return res.status(404).json({error: `${this.resourceName} não encontrado`})
        }
        console.log(this)
        
        res.status(200)
        res.json(this.arr[index]);
    }

    createResource(req, res) {
        // implementação e atribuição do req.body nos filho
        
        
        // const lstkeys = Object.keys(req.body);
        // const newOrder = {id: this.nextId++, items};
        // this.arr.push(newOrder);
        // return this.createSucess(res, newOrder);

        //res.status(201).json(newOrder)
    }
    
    updateResource(req, res) {
        // implementação e atribuição do req.body nos filho
    }

    deleteResource(req, res) {
        const id = parseInt(req.params.id);
        this.arr = this.arr.filter((ele) => ele.id !== id);
        res.status(204).json({message: `com o ID ${id} excluído`})
    }
    toString(){
        return "teste de ovveride toString"
    }
}


module.exports = controller;