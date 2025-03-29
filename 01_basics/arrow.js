const user = {
    name: "Ayush",
    price: 999;

    welcomeMessage: function(){
    //    console.log(`${name}, welcome to the website`)   
    // //aise bhi dikkat nhi aa rha h lekin jab bhi object k under ka access krenge toh this use krenge
    console.log(`${this.name}, welcome to the website`)
    }
}