
let fruits_Arr = [
    {
      name: "Onion",
      kg: "1kg",
      price: "Rs60",
      mrp: 38.38,
      brand:"Fresho"
    },
    {
      name: "Ladies Finger",
      kg: "500g",
      price: "Rs23.19",
      mrp: 19,
      brand:"Fresho"
    }]
    
     
    display(fruits_Arr)
     
    function display(data){
        data.forEach(function(el){
            let tr = document.createElement("tr")
            tr.setAttribute("class","tr")

            let name = document.createElement("td")
            name.innerText=el.name+" "+el.kg
            
            // var brand = document.createElement("pre")
            // brand.innerText=el.brand
            // brand.style="white-space:pre"
           

            let price = document.createElement("td")
            price.innerText=el.price+" "+el.mrp
         
            let brand = document.createElement("td")
            brand.innerText=el.brand
          
            let quantity = document.createElement("td")
            quantity.innerText="?"

            let subtotal = document.createElement("td")
            subtotal.innerText="Rs"+" "+el.mrp
           

            let saving = document.createElement("td")
            saving.innerText="calc"
            

            tr.append(name,price,quantity,subtotal,saving)
            document.querySelector("tbody").append(tr)
           
        })
    }