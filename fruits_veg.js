      // -------------sliding Part code------------

let slideShow=()=>
{
    let arr=[
        "<img src='https://www.bigbasket.com/media/uploads/banner_images/fresho_days_fnv_Bangalore-1200x300_19thJULY22.jpeg'></img>",
      "<img src='https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP3469-1200X300-16thJun22.jpg'></img>",
      "<img src='https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP3463-1200X300-16thJun22.jpg'></img>",
      "<img src = 'https://www.bigbasket.com/media/uploads/banner_images/CXNP7014_1200x300_251221.jpg'>",
      "<img src='https://www.bigbasket.com/media/uploads/banner_images/YXNP1592_1200x300_270522.jpg'>",
    ];

    let slidingImg=document.getElementById("slidingimg");
    slidingImg.innerHTML=null;
    let i=0;
    setInterval(function(){
        if(i==arr.length)
        
        {
          i=0;
        }
        slidingImg.innerHTML=arr[i];
        i++
    },3000)
}
slideShow();


//    -------------- Array of Product---------
let fruits_vegArr = [
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000150_19-fresho-onion.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Onion",
      kg: "1kg",
      price: "Rs60",
      mrp: 38.38,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000144_13-fresho-ladies-finger.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Ladies Finger",
      kg: "500g",
      price: "Rs23.19",
      mrp: 19,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000074_19-fresho-cauliflower.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "CauliFlower",
      kg: "1 pc (approx. 400 to 600 g)",
      price: "Rs23.19",
      mrp: 19,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000283_11-fresho-green-peas.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Green Peas",
      kg: "500g",
      price: "Rs42.50",
      mrp: 34,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40057966_2-fresho-tender-coconut-medium.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Tender Coconut - Medium",
      kg: "1pc",
      price: "Rs38.75",
      mrp: 31,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000103_16-fresho-cucumber.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Cucumber",
      kg: "500g",
      price: "Rs17.15",
      mrp: 14,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40048457_7-fresho-potato-new-crop.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Potato - New Crop",
      kg: "1kg",
      price: "Rs33.75",
      mrp: 27,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Capsicum - Green",
      kg: "500g",
      price: "Rs52.50",
      mrp: 42,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000263_11-fresho-strawberry.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Strawberry",
      kg: "200g",
      price: "Rs60",
      mrp: 48,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40134281_11-fresho-baby-apple-shimla.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Baby Apple Shimla",
      kg: "1 kg (Approx. 11-12 pcs)",
      price: "Rs215",
      mrp: 172,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000066_25-fresho-cabbage.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Cabbage",
      kg: "1 pc (approx. 500 g to 800 g)",
      price: "Rs17.50",
      mrp: 12.12,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000127_17-fresho-lemon.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Lemon",
      kg: "250g",
      price: "Rs22.50",
      mrp: 18,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000269_30-fresho-pomegranate.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Pomegranate",
      kg: "4 pcs (approx. 800 - 880 g)",
      price: "Rs281.25",
      mrp: 161,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000054_17-fresho-brinjal-bottle-shape.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Brinjal - Bottle Shape",
      kg: "500g",
      price: "Rs21.25",
      mrp: 17,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/mm/40023474_7-fresho-banana-yelakki-organically-grown.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Banana - Yelakki, Organically Grown",
      kg: "500g",
      price: "Rs50",
      mrp: 40,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/mm/40004992_14-fresho-sweet-corn.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Sweet Corn",
      kg: "2 pc",
      price: "Rs46",
      mrp: 36,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/mm/1203204_2-bb-combo-gajar-halwa.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Gajar Halwa",
      kg: "Combo 2 Items",
      price: "Rs154",
      mrp: 128.55,
      brand:"bb Combo"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/mm/1202745_1-bb-combo-pineapple-and-pomegranate-cut.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Pineapple and Pomegranate Cut",
      kg: "Combo 2 Items",
      price: "Rs237.50",
      mrp: 182,
      brand:"bb Combo"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/mm/1203204_2-bb-combo-gajar-halwa.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Gajar Halwa",
      kg: "Combo 2 Items",
      price: "Rs154",
      mrp: 128.55,
      brand:"bb Combo"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/mm/1202745_1-bb-combo-pineapple-and-pomegranate-cut.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Pineapple and Pomegranate Cut",
      kg: "Combo 2 Items",
      price: "Rs237.50",
      mrp: 182,
      brand:"bb Combo"
    }

];


displayproduct(fruits_vegArr)

function displayproduct(data){
 
  data.forEach(function(el){
    
    let box=document.createElement("div");
    box.setAttribute("id","box");

    let disprice=document.createElement("div");
    disprice.innerText="GET 25% OFF  "
    disprice.setAttribute("class","disprice");

    let img=document.createElement("img");
    img.src=el.imageUrl;
    img.setAttribute("class","imge")

   let brand=document.createElement("p")
   brand.innerText=el.brand;
  
   brand.setAttribute("class","brand")

    let name=document.createElement("p");
    name.innerText=el.name;
    name.setAttribute("class","name")

    let kg=document.createElement("p");
    kg.innerText=el.kg;
    kg.setAttribute("class","kg")

    let midbox=document.createElement("div");
    midbox.setAttribute("id","midbox")

    let mrpprice=document.createElement("div");
    mrpprice.setAttribute("class","mrpprice");

    let mrp=document.createElement("p");
    mrp.innerText= "MRP Rs"
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
    delinfo.innerText=" Standard Delivery: Today 9:00AM  11:00AM"

    let quantitydiv=document.createElement("div");
    quantitydiv.setAttribute("class","qtydiv")


    let qty=document.createElement("p")
    qty.innerText="Qty";
    qty.style.color="grey"
    

    let input=document.createElement("input");
    input.value=1;
    input.setAttribute("class","input")

    quantitydiv.append(qty,input);




    midbox.append(mrpprice,delinfo,quantitydiv)

    box.append(disprice,img,brand,name,kg,midbox)

    document.getElementById("container").append(box);



  })
}
