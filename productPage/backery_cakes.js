
//   ----------------sliding image-------------

let slideShow=()=>
{
    let arr=[
        "<img src='https://www.bigbasket.com/media/uploads/banner_images/YXPL7789-1200x300-25thjune.jpg'></img>",
      "<img src='https://www.bigbasket.com/media/uploads/banner_images/YXPL7649-1200x300-25thjune.jpg'></img>",
      "<img src='https://www.bigbasket.com/media/uploads/banner_images/YXPL7613-1200x300-25thjune.jpg'></img>",
      "<img src = 'https://www.bigbasket.com/media/uploads/banner_images/YXPL7642-1200x300-25thjune.jpg'>",
      "<img src='https://www.bigbasket.com/media/uploads/banner_images/YXPL7273-1200x300-25thjune.jpg'>",
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



  let Backery_cakes = [
    {
      name: "Toned Milk - Special",
      price: "90",
      mrp: "120",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/1206543_2-heritage-toned-milk-special.jpg",
      kg: "litre",
      prod_piece_unit: "",
      brand: "Heritage",
      prod_rating: "4",
      prod_type: "veg",
      count:1
    },
    {
      name: "Homogenised Toned Milk",
      price: "63",
      mrp: "68",
     imageUrl: "https://www.bigbasket.com/media/uploads/p/s/306926_4-amul-homogenised-toned-milk.jpg",
      kg: "litre",
      prod_piece_unit: "",
      brand: "Amul",
      prod_rating: "4.2",
      prod_type: "veg",
      count:1
      
    },
    {
      name: "Butter - Pasteurized",
      price: "95",
      mrp: "100",
     imageUrl: "https://www.bigbasket.com/media/uploads/p/s/1200163_4-amul-butter-pasteurized.jpg",
      kg: "pcs",
      prod_piece_unit: "1",
      brand: "Amul",
      prod_rating: "4.2",
      prod_type: "veg",
      count:1
    },
    {
      name: "White Sandwich Bread - Safe, Preservative Free",
      price: "36",
     mrp: "40",
     imageUrl: "https://www.bigbasket.com/media/uploads/p/s/40009472_4-fresho-white-sandwich-bread-safe-preservative-free.jpg",
      kg: "pcs",
      prod_piece_unit: "1",
      brand: "Fresho",
      prod_rating: "4",
      prod_type: "veg",
      count:1
    },
    {
      name: "Britannia Cheese Slices 100 g + Fresho Multigrain Bread 400 g",
      price: "113",
      mrp: "120",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/1215999_1-bb-combo-britannia-cheese-slices-100-g-fresho-multigrain-bread-400-g.jpg",
     kg: "pcs",
      prod_piece_unit: "1",
      brand: "BB Combo",
      prod_rating: "3.8",
      prod_type: "veg",
      count:1
    },
    {
      name: "Choco Muffills - Centre Filled, Soft, Spongy & Fluffy, Dessert/Snack",
      price: "9.50",
      mrp: "10",
     imageUrl: "https://www.bigbasket.com/media/uploads/p/s/40075053_6-britannia-choco-muffills.jpg",
      kg: "pcs",
      prod_piece_unit: "1",
      brand: "Britannia",
      prod_rating: "4",
      prod_type: "nonveg",
      count:1

    },
    {
      name: "Black Forest Cake",
      price: "720",
      mrp: "1100",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/40201820_4-fresho-signature-black-forest-cake.jpg",
      kg: "kg",
      prod_piece_unit: "",
      brand: "Fresho Signature",
      prod_rating: "4.2",
      prod_type: "veg",
      count:1
    },
    {
      name: "Curd",
      price: "96",
      mrp: "105",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/40165199_3-heritage-curd.jpg",
      kg: "kg",
      prod_piece_unit: "",
      brand: "Heritage",
      prod_rating: "4",
      prod_type: "veg",
      count:1
    },
    {
      name: "Sandwich Bread - White, Chemical Free 400G + Eggs - Regular 6pcs",
      price: "78",
      mrp: "95",
     imageUrl: "https://www.bigbasket.com/media/uploads/p/s/1204352_1-fresho-sandwich-bread-white-chemical-free-400g-eggs-regular-6pcs.jpg",
     kg: "pcs",
      prod_piece_unit: "1",
      brand: "Fresho",
      prod_rating: "3.8",
      prod_type: "nonveg",
      count:1
    },
    {
        name: "Butter",
        price: "78",
        mrp: "95",
       imageUrl: "https://www.bigbasket.com/media/uploads/p/s/40045943_1-amul-butter-pasteurised.jpg",
       kg: "pcs",
        prod_piece_unit: "1",
        brand: "Amul",
        prod_rating: "3.8",
        prod_type: "nonveg",
        count:1
      },
      {
        name: "Lactose Free Milk",
        price: "78",
        mrp: "95",
       imageUrl: "https://www.bigbasket.com/media/uploads/p/s/1202753_1-amul-lactose-free-milk.jpg",
       kg: "pcs",
        prod_piece_unit: "1",
        brand: "Amul",
        prod_rating: "3.8",
        prod_type: "nonveg",
        count:1
      },
      {
        name: "Treat Croissant - Vanilla Creme Filling, 100% Veg,",
        price: "78",
        mrp: "95",
       imageUrl: "https://www.bigbasket.com/media/uploads/p/s/1214335_3-britannia-treat-croissant-vanilla-creme-roll-100-veg.jpg",
       kg: "pcs",
        prod_piece_unit: "1",
        brand: "Britannia",
        prod_rating: "3.8",
        prod_type: "nonveg",
        count:1
      }
  ];




  displayproduct(Backery_cakes)
  let cartArr=JSON.parse(localStorage.getItem("cartItems"))||[];
  console.log(cartArr);
  function displayproduct( Backery_cakes){
    document.querySelector("#container").innerHTML="";
    Backery_cakes.forEach(function(el){
      
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
function fresh(){
    let filterfresho =Backery_cakes.filter(function(el){
      return el.brand == "Fresho"
    })
    displayproduct(filterfresho)
  };

  function Heritage(){
    let filterheri=Backery_cakes.filter(function(el){
      return el.brand=="Heritage"
    })
    displayproduct(filterheri);
    
  };

  function Amul(){
    let filterAmul=Backery_cakes.filter(function(el){
      return el.brand=="Amul"
    })
    displayproduct(filterAmul)
  };

  function britania(){
    let filterbritania=Backery_cakes.filter(function(el){
      return el.brand=="Britannia"
    })
    displayproduct(filterbritania)
  };
  function Signature(){
    let filtersig=Backery_cakes.filter(function(el){
      return el.brand=="Fresho Signature"
    })
    displayproduct(filtersig)
  };
  function bbcombo(){
    let filtercombo=Backery_cakes.filter(function(el){
      return el.brand=="BB Combo"
    })
    displayproduct(filtercombo);
    
  };

  // ----------sorting Part----

function sortprice(){
    let pricesort = document.querySelector("#sorting").value
    if(pricesort == "l2h"){
   Backery_cakes.sort(function(a,b){
      return a.mrp-b.mrp;
    })
    displayproduct(Backery_cakes)
    }
    if(pricesort == "h2l"){
      Backery_cakes.sort(function(a,b){
        return b.mrp-a.mrp;
      })
      displayproduct(Backery_cakes);
    }
    }
  