const getBtn = document.getElementById("get");
const postBtn = document.getElementById("post");
const putBtn = document.getElementById("put");
const deleteBtn = document.getElementById("delete");

const userInput = document.getElementById("user");
const emailInput = document.getElementById("email");
const userId = document.getElementById("userId");
const productName = document.getElementById("product");
const productValue = document.getElementById("value");
const productId = document.getElementById("productId");
const orderName = document.getElementById("order");
const orderValue = document.getElementById("orderValue");
const orderId = document.getElementById("orderId");

let url = "http://localhost:3000/api/costumer/";

getBtn.addEventListener("click",() => {
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))}
)

postBtn.addEventListener("click", () => {
    fetch(url,{
        "method": "POST",
        "headers": {"Content-Type":"application/json"},
        "body" : JSON.stringify({"user": "user3", "email": "email@email"})
    })
    .then(response => response.json())
    .then(data => console.log(data))
})

// // getBtn.addEventListener(fetchData('GET'));
// // postBtn.addEventListener(fetchData('POST'));
// // putBtn.addEventListener(fetchData('PUT'));
// // deleteBtn.addEventListener(fetchData('DELETE'));

const obj = {id:3,name:"", value:123};



