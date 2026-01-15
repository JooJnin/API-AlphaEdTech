class controller{
    constructor(arr) {
        this.arr = arr;
        let nextId = arr.length + 1;

        function getAllResources(req,res){
            res.json(arr);
        }
        
        function getResource(req,res){}

        function createResource(req,res){}
        function updateResource(req,res){}
        function delResource(req,res){}
    }
}

module.exports = controller;