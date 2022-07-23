//   ----------------sliding image-------------

let slideShow=()=>
{
    let arr=[
        "<img src='https://www.bigbasket.com/media/uploads/banner_images/YXNP2826_1200x300_040722.jpeg'></img>",
      "<img src='https://www.bigbasket.com/media/uploads/banner_images/YXPL7853_YXPL7856_YXPL7857_300.jpg'></img>",
      "<img src='https://www.bigbasket.com/media/uploads/banner_images/YXPL7852_YXPL7854_YXPL7855_YXPL7862_YXPL7876_300.jpg'></img>",
      "<img src = 'https://www.bigbasket.com/media/uploads/banner_images/YXPL7990_1200x300_25thjune.jpg'>",
      "<img src='https://www.bigbasket.com/media/uploads/banner_images/YXNP350_1200x300_290322.jpg'>",
      "<img src='https://www.bigbasket.com/media/uploads/banner_images/YXNP316_1200x300_290322.jpg'>",
      "<img src='https://www.bigbasket.com/media/uploads/banner_images/YXNP2834_1200x300_040722.png'>",
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






let foodGrainsDB = [
    {
      name: "Fortune Premium Kachi Ghani Pure Mustard Oil",
      price: "212",
      mrp: "0",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/276756_8-fortune-fortune-premium-kachi-ghani-pure-mustard-oil.jpg",
      kg: "litre",
      prod_piece_unit: "",
      brand: "Fortune",
      prod_rating: "4.1",
      prod_type: "veg"
    },
    {
      name: "Shudh Chakki Atta - Whole Wheat Flour, No Maida, For Fit & Healthy Lifestyle",
      price: "189",
      mrp: "199",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/40127506_6-aashirvaad-shudh-chakki-atta.jpg",
      kg: "kg",
      prod_piece_unit: "",
      brand: "Aashirvaad",
      prod_rating: "4.1",
      prod_type: "veg"
    },
    {
      name: "Sugar",
      price: "47",
       mrp: "55",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/40019396_10-bb-popular-sugar.jpg",
     kg: "kg",
      prod_piece_unit: "",
      brand: "BB Popular",
      prod_rating: "3.8",
      prod_type: "veg"
    },
    {
      name: "Cumin/Jeera - Whole",
      price: "290",
      mrp: "500",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/40030808_10-bb-royal-cuminjeera-whole.jpg",
      kg: "kg",
      prod_piece_unit: "",
      brand: "BB Royal",
      prod_rating: "4",
      prod_type: "veg"
    },
    {
      name: "Unpolished Toor Dal/Arhar Dal",
      price: "144",
      mrp: "174",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/40000291_8-tata-sampann-unpolished-toor-dalarhar-dal.jpg",
      kg: "kg",
      prod_piece_unit: "",
      brand: "Tata Sampann",
      prod_rating: "4.1",
      prod_type: "veg"
    },
    {
    name: "Tata Salt Iodized",
    price: "22",
      mrp: "24",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/241600_5-tata-salt-iodized.jpg",
      kg: "kg",
      prod_piece_unit: "",
      brand: "Tata Salt",
      prod_rating: "4.6",
      prod_type: "veg"
    },
    {
      name: "Atta Sharbati 100% MP Whole Wheat Rotis Stay Softer For Longer",
      price: "53",
    mrp: "68",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/40151625_7-bb-royal-superior-mp-sharbati-atta-fortified.jpg",
      kg: "kg",
      prod_piece_unit: "",
      brand: "BB Royal",
      prod_rating: "4",
      prod_type: "veg"
    },
    {
      name: "Select Sharbati Atta - 100% MP Whole Wheat, Rotis Stay Softer For Longer",
      price: "50",
      mrp: "60",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/40236231_1-aashirvaad-select-sharbati-atta-100-mp-whole-wheat-rotis-stay-softer-for-longer.jpg",
     kg: "kg",
      prod_piece_unit: "",
      brand: "Aashirvaad",
      prod_rating: "4.2",
      prod_type: "veg"
    },
    {
      name: "Sun Lite - Sunflower Refined Oil",
      price: "230",
      mrp: "300",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/274145_14-fortune-sun-lite-sunflower-refined-oil.jpg",
      kg: "litre",
      prod_piece_unit: "",
      brand: "Fortune",
      prod_rating: "4.1",
      prod_type: "veg"
    },
    {
     name: "Cashew/Kaju - Whole",
      price: "958",
      mrp: "1500",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/40021402_7-bb-popular-cashewkaju-whole.jpg",
      kg: "kg",
      prod_piece_unit: "",
      brand: "BB Popular",
      prod_rating: "3.9",
      prod_type: "veg"
    },
    {
      name: "Sun Lite - Sunflower Refined Oil",
      price: "230",
      mrp: "300",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/274145_14-fortune-sun-lite-sunflower-refined-oil.jpg",
      kg: "litre",
      prod_piece_unit: "",
      brand: "Fortune",
      prod_rating: "4.1",
      prod_type: "veg"
    },
    {
      name: "Cow Ghee",
      price: "1070",
       mrp: "1100",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/1214159_1-amul-cow-ghee.jpg",
      kg: "kg",
      prod_piece_unit: "",
      brand: "Amul",
      prod_rating: "4",
      prod_type: "veg"
    },
    {
      name: "Refined Sugar (Sulphurless)",
      price: "48",
      mrp: "60",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/10000447_15-bb-royal-refined-sugar-sulphurless.jpg",
      kg: "kg",
      prod_piece_unit: "",
      brand: "BB Royal",
      prod_rating: "3.9",
      prod_type: "veg"
    },
    {
      name: "Gold - Pro Healthy Lifestyle Edible Oil",
      price: "680",
      mrp: "750",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/1203529_5-saffola-gold-pro-healthy-lifestyle-edible-oil.jpg",
      kg: "litre",
      prod_piece_unit: "",
      brand: "Saffola",
      prod_rating: "3.7",
      prod_type: "veg"
    },
    {
      name: "Moong Dal",
      price: "150",
     mrp: "200",
     imageUrl: "https://www.bigbasket.com/media/uploads/p/s/10000434_15-bb-royal-moong-dal.jpg",
      kg: "kg",
      prod_piece_unit: "",
      brand: "BB Royal",
      prod_rating: "4",
      prod_type: "veg"
    },
    {
      name: "Almond/Badam - Californian, Giri",
      price: "670",
   mrp: "1500",
    imageUrl: "https://www.bigbasket.com/media/uploads/p/s/40021405_11-bb-popular-almondbadam-californian-giri.jpg",
     kg: "kg",
      prod_piece_unit: "",
      brand: "BB Popular",
      prod_rating: "4",
      prod_type: "veg"
    },
    {
      name: "Poha/Avalakki/Aval/Chivda - Thick",
      price: "43",
      mrp: "80",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/10000431_18-bb-royal-pohaavalakkiavalchivda-thick.jpg",
      kg: "kg",
      prod_piece_unit: "",
      brand: "BB Royal",
      prod_rating: "3.8",
      prod_type: "veg"
    },
    {
      name: "Toor Dal/Arhar Dal - Desi",
      price: "125",
      mrp: "170",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/10000425_15-bb-royal-toor-dalarhar-dal-desi.jpg",
      kg: "kg",
      prod_piece_unit: "",
      brand: "BB Royal",
      prod_rating: "4",
      prod_type: "veg"
    },
    {
      name: "Peanuts/Mungaphali/Shengdana - Raw",
      price: "169",
      mrp: "230",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/10000446_17-bb-royal-peanutsmungaphalishengdana-raw.jpg",
      kg: "kg",
      prod_piece_unit: "",
      brand: "BB Royal",
      prod_rating: "4",
      prod_type: "veg"
    },
    {
      name: "Pure Ghee",
    price: "1040",
      mrp: "1500",
     imageUrl: "https://www.bigbasket.com/media/uploads/p/s/1214145_1-amul-pure-ghee.jpg",
      kg: "kg",
      prod_piece_unit: "",
      brand: "Amul",
      prod_rating: "4.1",
      prod_type: "veg"
    }
  ];

  displayproduct(foodGrainsDB)
  let cartArr=JSON.parse(localStorage.getItem("cartItems"))||[];
  console.log(cartArr);
  function displayproduct( foodGrainsDB){
    document.querySelector("#container").innerHTML="";
    foodGrainsDB.forEach(function(el){
      
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
  
      cartArr.push(el);
      localStorage.setItem("cartItems",JSON.stringify(cartArr));
      swal({
        title: "Successfully!",
        text: "Added To Cart",
        icon: "success",
        button: "Continue",
    })
  
    }
  
   
  }


//   -----------FILTER--------------
function fortune(){
    let filter =foodGrainsDB.filter(function(el){
      return el.brand == "Fortune"
    })
    displayproduct(filter)
  };

  function Aashirvaad(){
    let filter =foodGrainsDB.filter(function(el){
      return el.brand == "Aashirvaad"
    })
    displayproduct(filter)
  };
  function BB_Popular(){
    let filter =foodGrainsDB.filter(function(el){
      return el.brand == "BB Popular"
    })
    displayproduct(filter)
  };
  function BB_Royal(){
    let filter =foodGrainsDB.filter(function(el){
      return el.brand == "BB Royal"
    })
    displayproduct(filter)
  };
  function Tata_Sampann(){
    let filter =foodGrainsDB.filter(function(el){
      return el.brand == "Tata Sampann"
    })
    displayproduct(filter)
  };

  // ----------sorting Part----

function sortprice(){
    let pricesort = document.querySelector("#sorting").value
    if(pricesort == "l2h"){
        foodGrainsDB.sort(function(a,b){
      return a.mrp-b.mrp;
    })
    displayproduct(foodGrainsDB)
    }
    if(pricesort == "h2l"){
        foodGrainsDB.sort(function(a,b){
        return b.mrp-a.mrp;
      })
      displayproduct(foodGrainsDB);
    }
    }
  