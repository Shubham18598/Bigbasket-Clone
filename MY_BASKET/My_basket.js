let cartArr=JSON.parse(localStorage.getItem("cartItems"))||[];
    
let totalPrice=0;

     
    display(cartArr)
    function display(data){
      let div = document.querySelector("tbody")
      div.innerHTML=null;
      
        data.forEach(function(el,index){
            let pr=+el.price, mrp=+el.mrp;
            totalPrice+=pr;


            let tr = document.createElement("tr")
            tr.setAttribute("class","tr")

            let name = document.createElement("td")
            name.innerText=el.name+" "+el.kg
            name.style="text-align:justify-content"
           

            let price = document.createElement("td")
            price.innerText=pr
         
            let brand = document.createElement("td")
            brand.innerText=el.brand
          
            let quantity = document.createElement("td")
            quantity.innerText="?"

            let subtotal = document.createElement("td")
            subtotal.innerText="Rs"+" "+mrp
            
           
            let btn = document.createElement("button");
            btn.innerText = "x";
            btn.style="border:none; background-color:white; margin-top:7px; color:grey; font-weight:bold;font-size:14px;cursor:pointer"
            btn.setAttribute("class","close")
            btn.addEventListener("click",function(){
                removeItem(el,index)
            })

          


            let saving = document.createElement("td")
            let save=mrp-pr;
            saving.innerText=save.toFixed(2);
            

            tr.append(name,price,quantity,subtotal,btn,saving)
            document.querySelector("tbody").append(tr)
            
            
        })
        
      
        
        
    }
   
    // localStorage.setItem("cartItmes",JSON.stringify(cartArr))
    // window.location.reload()
    
    
    function removeItem(el,index,event){
      
      cartArr.splice(index,1);
      display(cartArr)
      localStorage.setItem("cartItems",JSON.stringify(cartArr));
      
  
    }

console.log(totalPrice);
document.querySelector("#total").innerText="Rs."+" "+totalPrice;
document.querySelector("#subp").innerText="Rs."+" "+totalPrice;
document.querySelector("#coupon").innerText="*For this order: Accepted food coupon is"+"Rs."+" "+totalPrice;





let recoArr = [
  {
    imageUrl:
      "https://www.bigbasket.com/media/uploads/p/s/266160_19-maggi-masala-instant-noodles-vegetarian.jpg",
       name: "Maggie",
       price: "Rs.10",
       brand:"Maggie"
  },
  {
    imageUrl:
      "https://www.bigbasket.com/media/uploads/p/s/40207909_3-nutralite-doodhshakti-probiotic-butter-spread-salted-supports-gut-health.jpg",
       name: "Biscuit",
       price: "Rs.10",
       brand:"Nutralite"
  },
  {
    imageUrl:
      "https://www.bigbasket.com/media/uploads/p/s/40145969_5-the-laughing-cow-creamy-cheese-triangles.jpg",
       name: "Cream",
       price: "Rs.110",
       brand:"The Cow"
  },


]
 function displayRec(recoArr){
  document.querySelector("#reco-pro").innerHTML="";
  recoArr.forEach(function(el){
    let box = document.createElement("div")
    box.setAttribute("id","box");

    let img = document.createElement("img")
    img.src=el.imageUrl

    let title = document.createElement("p")
    title.innerText=el.name;

    let price = document.createElement("p")
    price.innerText=el.price;

    let brand = document.createElement("p")
    brand.innerText=el.brand;

    box.append(img,title,price,brand);
    document.getElementById("reco-pro").append(box)
  })

 }
 displayRec(recoArr)