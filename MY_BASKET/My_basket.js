let cartArr=JSON.parse(localStorage.getItem("homedata"))||[];
    
let totalPrice=0;
let count = 1;
let totalS=0;

// let savingPrice = 0;

let length=cartArr.length;
document.getElementById("item_length").innerText=length+" "+"items";
     
    display(cartArr)
    function display(data){
      let div = document.querySelector("tbody")
      div.innerHTML=null;
  
        data.forEach(function(el,index){
            let pr=+el.price;
            let mrp=+el.mrp;
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
            // quantity.innerText="?"
            quantity.setAttribute("class","quantity")

            let subtotal = document.createElement("td")
            subtotal.innerText="Rs"+" "+mrp
            
           
            let btn = document.createElement("button");
            btn.innerText = "x";
            btn.style="border:none; background-color:white; margin-top:7px; color:grey; font-weight:bold;font-size:14px;cursor:pointer"
            btn.setAttribute("class","close")
            btn.addEventListener("click",function(){
                removeItem(el,index)
            })

            // Quantiy button
            let countDiv=document.createElement("div");
            let p3 = document.createElement("td");
            p3.innerText = count;
            countDiv.setAttribute("id","count-price");
            countDiv.append(p3)

            //savings
            let saving = document.createElement("td")
            let save1=mrp-pr;
              let save=Math.abs(count*save1);
              totalS+=save;
              saving.innerText=save.toFixed(2);
            saving.style="color:rgba(260, 0, 0, 0.900)"

            let button1 = document.createElement("button");
            button1.innerText = "+";
            button1.setAttribute("class","btn-q")

            button1.addEventListener("click", function () {
              // let c=plus(count);
              count=count+1;
              p3.innerText = count;
              let subT=(count * pr).toFixed(2)
              subtotal.innerText = subT;
              let save1=mrp-pr;
              let save=Math.abs(count*save1);
              saving.innerText=save.toFixed(2);
              totalS+=Number(saving.innerText);
              price.innerText=(count*pr).toFixed(2);
              // incFun(subT,index)

            });

            let button2 = document.createElement("button");
            button2.innerText = "-";
            button2.setAttribute("class","btn-q")
            button2.addEventListener("click", function () {
              count=count-1;
              if (count <= 0) {
                count = 1;
              } else {
                p3.innerText = count;
                c=count;
                subtotal.innerText = (count * pr).toFixed(2);
                let save1=mrp-pr;
                let save=Math.abs(count*save1);
                // totalS+=save;
                saving.innerText=save.toFixed(2);
                totalS+=Number(saving.innerText);
              price.innerText=(count*pr).toFixed(2);

              }
            });

            // console.log("saving",totalS+=Number(saving.innerText),saving.innerText)

            quantity.append(button1,countDiv,button2)
            tr.append(name,price,quantity,subtotal,btn,saving)
            document.querySelector("tbody").append(tr)
            
            
        })
  
    }

    // incFun=(subT,i)=>{
    //   console.log(i)
    //   cartArr.forEach((element,index) => {
    //     if(index==i){
    //       element.price=subT;
    //     }
    //   });

    //   localStorage.setItem("cartArr",JSON.stringify(cartArr));
    //   display(cartArr)
    // }

    // localStorage.setItem("cartItmes",JSON.stringify(cartArr))
    // window.location.reload()
    
    function removeItem(el,index,event){
      
      cartArr.splice(index,1);
      display(cartArr)
      localStorage.setItem("cartItems",JSON.stringify(cartArr));
      
  
    }

// console.log(totalPrice);
document.querySelector("#total").innerText="Rs."+" "+totalPrice;
document.querySelector("#subp").innerText="Rs."+" "+totalPrice;
document.querySelector("#coupon").innerText="*For this order: Accepted food coupon is"+"Rs."+" "+totalPrice;
document.querySelector("#a").innerText=totalS;

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

//  document.getElementById("Empty-button").addEventListener("click",emptyBasket);

 emptyBasket= () =>{
  localStorage.setItem("homedata",JSON.stringify([]));
  swal({
    title: "Your Basket Become Empty!!",
    text: "Removed All Your Products From Basket!!",
    icon: "success",
    button: "Continue",
  }).then(function (){
    location.href = "../index.html";
  })
 }
