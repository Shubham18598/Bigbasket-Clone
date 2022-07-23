let homearr=JSON.parse(localStorage.getItem("homedata")) || [];

let fruits_vegArr = [
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000150_19-fresho-onion.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Onion",
      kg: "1kg - 60",
      price: "60",
      mrp: 70,
      brand:"Fresho",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000144_13-fresho-ladies-finger.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Ladies Finger",
      kg: "500g-23",
      price: "23",
      mrp: 25,
      brand:"Fresho",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000074_19-fresho-cauliflower.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "CauliFlower",
      kg: "500g -23",
      price: "23",
      mrp: 30,
      brand:"Fresho",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000283_11-fresho-green-peas.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Green Peas",
      kg: "500g-42",
      price: "42",
      mrp: 50,
      brand:"Fresho",
      count:1
    },
]


function displayfun(data){

    data.forEach(function(el){
        let box=document.createElement("div");
        box.setAttribute("id","vegi-box");

        let disprice=document.createElement("div");
        disprice.innerText="GET 25% OFF  "
        disprice.setAttribute("class","disprice")

        let box1=document.createElement("div");
        box1.setAttribute("id","img-box");

        let img=document.createElement("img");
        img.src=el.imageUrl;
        img.setAttribute("class","imge")

        box1.append(img)

        let box2=document.createElement("div");
        box2.setAttribute("id","name-box");

        let brand=document.createElement("p")
        brand.innerText=el.brand;
        brand.setAttribute("class","brand")

        let name=document.createElement("p");
        name.innerText=el.name;
        name.setAttribute("class","name")


        let kg=document.createElement("p");
        kg.innerText=el.kg;
        kg.setAttribute("class","kg")

        box2.append(brand,name,kg)

        let midbox=document.createElement("div");
        midbox.setAttribute("id","midbox")

        let mrpprice=document.createElement("div");
        mrpprice.setAttribute("class","mrpprice");

        let mrp=document.createElement("p");
        mrp.innerText= "MRP "
        mrp.setAttribute("class","mrp")

        let pr=document.createElement("p")
        pr.innerText=el.mrp
        pr.setAttribute("class","pr")

        let price=document.createElement("p")
        price.innerText=el.price;
        price.setAttribute("class","price")

        mrpprice.append(mrp,pr,price)


        let delinfo=document.createElement("p")
        delinfo.setAttribute("class","delinfo")
        delinfo.innerText="Delivery:Today 9-11AM"

        let quantitydiv=document.createElement("div");
        quantitydiv.setAttribute("class","qtydiv")


        let qty=document.createElement("p")
        qty.innerText="Qty";
        qty.style.color="grey"

        let input=document.createElement("input");
        input.value=1;
        input.setAttribute("class","input")

        let but=document.createElement("button")
        but.innerText="ADD"
        but.setAttribute("class","addbut")
        but.addEventListener("click",function(){
            addfun(el)
        })

        quantitydiv.append(qty,input,but);

         midbox.append(mrpprice,delinfo,quantitydiv)

        // box.append(disprice,img,brand,name,kg,midbox)

        box.append(disprice,box1,box2,midbox)
        document.getElementById("basket-main").append(box)
    })

}
displayfun(fruits_vegArr);


let abc_vegArr = [
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000442_18-bb-royal-peanuts-mungaphalishengdana-raw.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Peanuts/Kadalekayi",
      kg: "1kg - 160",
      price: "160",
      mrp: 200,
      brand:"BB Royal",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40135858_8-bb-royal-organic-turtoor-dal.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Organic - Toor Dal/Togari Bele",
      kg: "5kg-  649",
      price: "649",
      mrp: 900,
      brand:"BB Royal",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40120011_7-disano-olive-oil-extra-virgin.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Extra Virgin Olive Oil",
      kg: "5L -3669",
      price: "3669",
      mrp: 7000,
      brand:"BB Royal",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/30005420_11-bb-popular-moong-dal.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Moong Dal/Hesaru Bele",
      kg: "1kg-135",
      price: "135",
      mrp:199,
      brand:"BB Royal",
      count:1
    },
]

function disfun(data){
    data.forEach(function(el){
        let box=document.createElement("div");
        box.setAttribute("id","vegi-box");

        let disprice=document.createElement("div");
        disprice.innerText="GET 25% OFF  "
        disprice.setAttribute("class","disprice")

        let box1=document.createElement("div");
        box1.setAttribute("id","img-box");

        let img=document.createElement("img");
        img.src=el.imageUrl;
        img.setAttribute("class","imge")

        box1.append(img)
        
        let box2=document.createElement("div");
        box2.setAttribute("id","name-box");

        let brand=document.createElement("p")
        brand.innerText=el.brand;
        brand.setAttribute("class","brand")

        let name=document.createElement("p");
        name.innerText=el.name;
        name.setAttribute("class","name")


        let kg=document.createElement("p");
        kg.innerText=el.kg;
        kg.setAttribute("class","kg")

        box2.append(brand,name,kg)

        let midbox=document.createElement("div");
        midbox.setAttribute("id","midbox")

        let mrpprice=document.createElement("div");
        mrpprice.setAttribute("class","mrpprice");

        let mrp=document.createElement("p");
        mrp.innerText= "MRP"
        mrp.setAttribute("class","mrp")

        let pr=document.createElement("p")
        pr.innerText=el.mrp
        pr.setAttribute("class","pr")

        let price=document.createElement("p")
        price.innerText=el.price;
        price.setAttribute("class","price")

        mrpprice.append(mrp,pr,price)


        let delinfo=document.createElement("p")
        delinfo.setAttribute("class","delinfo")
        delinfo.innerText="Delivery: Today 9-11AM"

        let quantitydiv=document.createElement("div");
        quantitydiv.setAttribute("class","qtydiv")


        let qty=document.createElement("p")
        qty.innerText="Qty";
        qty.style.color="grey"

        let input=document.createElement("input");
        input.value=1;
        input.setAttribute("class","input")

        let but=document.createElement("button")
        but.innerText="ADD"
        but.setAttribute("class","addbut")
        but.addEventListener("click",function(){
            addfunVeg(el)
        })

        quantitydiv.append(qty,input,but);

         midbox.append(mrpprice,delinfo,quantitydiv)        

        // box.append(disprice,img,brand,name,kg,midbox)

        box.append(disprice,box1,box2,midbox)
        document.getElementById("sellers-main").append(box)
    })

}

disfun(abc_vegArr);

console.log(homearr)

function addfun(el){
     console.log(el);
     homearr.push(el);
     localStorage.setItem("homedata",JSON.stringify(homearr));
     swal({
      title: "Successfull!",
      text: "Successfully Product Added to Basket..",
      icon: "success",
      button: "Continue",
    }).then(function (){
      window.location.reload();
    }) 

}
addfunVeg=(el)=>{
  console.log(el);
  homearr.push(el);
  localStorage.setItem("homedata",JSON.stringify(homearr));
  swal({
    title: "Successfull!",
    text: "Successfully Product Added to Basket..",
    icon: "success",
    button: "Continue",
  }).then(function (){
    window.location.reload();
  }) 

}





