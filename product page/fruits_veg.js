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
      price: "60",
      mrp: 38.38,
      brand:"Fresho",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000144_13-fresho-ladies-finger.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Ladies Finger",
      kg: "500g",
      price: "23.19",
      mrp: 19,
      brand:"Fresho",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000074_19-fresho-cauliflower.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "CauliFlower",
      kg: "1 pc (approx. 400 to 600 g)",
      price: "23.19",
      mrp: 19,
      brand:"Fresho",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000283_11-fresho-green-peas.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Green Peas",
      kg: "500g",
      price: "42.50",
      mrp: 34,
      brand:"Fresho",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40057966_2-fresho-tender-coconut-medium.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Tender Coconut - Medium",
      kg: "1pc",
      price: "38.75",
      mrp: 31,
      brand:"Fresho",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000103_16-fresho-cucumber.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Cucumber",
      kg: "500g",
      price: "17.15",
      mrp: 14,
      brand:"Fresho",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40048457_7-fresho-potato-new-crop.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Potato - New Crop",
      kg: "1kg",
      price: "33.75",
      mrp: 27,
      brand:"Fresho",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Capsicum - Green",
      kg: "500g",
      price: "52.50",
      mrp: 42,
      brand:"Fresho",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000263_11-fresho-strawberry.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Strawberry",
      kg: "200g",
      price: "60",
      mrp: 48,
      brand:"Fresho",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40134281_11-fresho-baby-apple-shimla.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Baby Apple Shimla",
      kg: "1 kg (Approx. 11-12 pcs)",
      price: "215",
      mrp: 172,
      brand:"Fresho",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000066_25-fresho-cabbage.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Cabbage",
      kg: "1 pc (approx. 500 g to 800 g)",
      price: "17.50",
      mrp: 12.12,
      brand:"Fresho",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000127_17-fresho-lemon.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Lemon",
      kg: "250g",
      price: "22.50",
      mrp: 18,
      brand:"Fresho",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000269_30-fresho-pomegranate.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Pomegranate",
      kg: "4 pcs (approx. 800 - 880 g)",
      price: "281.25",
      mrp: 161,
      brand:"Fresho",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000054_17-fresho-brinjal-bottle-shape.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Brinjal - Bottle Shape",
      kg: "500g",
      price: "21.25",
      mrp: 17,
      brand:"Fresho",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/mm/40023474_7-fresho-banana-yelakki-organically-grown.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Banana - Yelakki, Organically Grown",
      kg: "500g",
      price: "50",
      mrp: 40,
      brand:"Fresho",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/mm/40004992_14-fresho-sweet-corn.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Sweet Corn",
      kg: "2 pc",
      price: "46",
      mrp: 36,
      brand:"Fresho",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/mm/1203204_2-bb-combo-gajar-halwa.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Gajar Halwa",
      kg: "Combo 2 Items",
      price: "154",
      mrp: 128.55,
      brand:"bb Combo",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/mm/1202745_1-bb-combo-pineapple-and-pomegranate-cut.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Pineapple and Pomegranate Cut",
      kg: "Combo 2 Items",
      price: "237.50",
      mrp: 182,
      brand:"bb Combo",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/mm/1203204_2-bb-combo-gajar-halwa.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Gajar Halwa",
      kg: "Combo 2 Items",
      price: "154",
      mrp: 128.55,
      brand:"bb Combo",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/mm/1202745_1-bb-combo-pineapple-and-pomegranate-cut.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Pineapple and Pomegranate Cut",
      kg: "Combo 2 Items",
      price: "237.50",
      mrp: 182,
      brand:"bb Combo",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/mm/40141974_1-brotos-lobia-sprouts-dehydrated.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Lobia Sprouts",
      kg: "Combo 2 Items",
      price: "230.50",
      mrp: 182,
      brand:"Brotos",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/mm/10000813_2-gopalan-organic-snake-gourd.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Snake Groud",
      kg: "Combo 2 Items",
      price: "230.50",
      mrp: 182,
      brand:"Gopalan Organic",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/mm/40196772_1-hoovu-fresh-lotus.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Lotus",
      kg: "2 steams",
      price: "80",
      mrp: 100,
      brand:"Hoovu Fresh",
      count:1
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/mm/40202206_1-hoovu-fresh-tulsi-mola.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Tulsi Masala",
      kg: "2kg",
      price: "80",
      mrp: 100,
      brand:"Hoovu Fresh",
      count:1
    },



];


displayproduct(fruits_vegArr)
let cartArr=JSON.parse(localStorage.getItem("cartItems"))||[];
console.log(cartArr);
function displayproduct( fruits_vegArr){
  document.querySelector("#container").innerHTML="";
  fruits_vegArr.forEach(function(el){
    
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

    let btn=document.createElement("button");
    btn.innerText="ADD"
    btn.setAttribute("id","addcart")
    btn.addEventListener("click",function(){
      addtocart(el);
    })

    quantitydiv.append(qty,input,btn);




    midbox.append(mrpprice,delinfo,quantitydiv)

    box.append(disprice,img,brand,name,kg,midbox)

    document.getElementById("container").append(box);


  })
  
 
  function addtocart(el){
    console.log(el)
    // cartArr.push(el);
    // localStorage.setItem("cartItems",JSON.stringify(cartArr));
   

  }

 
}

// ----------sorting Part----

function sortprice(){
  let pricesort = document.querySelector("#sorting").value
  if(pricesort == "l2h"){
  fruits_vegArr.sort(function(a,b){
    return a.mrp-b.mrp;
  })
  displayproduct(fruits_vegArr)
  }
  if(pricesort == "h2l"){
    fruits_vegArr.sort(function(a,b){
      return b.mrp-a.mrp;
    })
    displayproduct(fruits_vegArr);
  }
  }


// -----------filter----------


function fresh(){
  let filterfresho =fruits_vegArr.filter(function(el){
    return el.brand == "Fresho"
  })
  displayproduct(filterfresho)
};

function bbcombo(){
  let filtercombo=fruits_vegArr.filter(function(el){
    return el.brand=="bb Combo"
  })
  displayproduct(filtercombo);
  
};

function brotos(){
  let filterbrotos=fruits_vegArr.filter(function(el){
    return el.brand=="Brotos"
  })
  displayproduct(filterbrotos)
};

function gopalan(){
  let filtergopalan=fruits_vegArr.filter(function(el){
    return el.brand=="Gopalan Organic"
  })
  displayproduct(filtergopalan);
};

function hooveu(){
  let filterhoveu=fruits_vegArr.filter(function(el){
    return el.brand=="Hoovu Fresh"
  })
  displayproduct(filterhoveu);
};

function search(){
  let search = document.querySelector("#search").value
  if(search!=""){
  var filterfresho = fruits_vegArr.filter(function(el){
    return el.brand == search
  })
  displayproduct(filterfresho)
  }
  }
  displayproduct(fruits_vegArr)
  