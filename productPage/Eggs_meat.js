let slideShow=()=>
{
    let arr=[
        "<img src='https://www.bigbasket.com/media/uploads/banner_images/CXNP344_Fresh_Meat_1200x300_6thApr.jpg'></img>",
      "<img src='https://www.bigbasket.com/media/uploads/banner_images/Bengali_Fish_1200X300_160522.jpg'></img>",
      "<img src='https://www.bigbasket.com/media/uploads/banner_images/YXPL7852_YXPL7854_YXPL7855_YXPL7862_YXPL7876_300.jpg'></img>",
      "<img src = 'https://www.bigbasket.com/media/uploads/banner_images/l1-certificate-top-300621.jpg'>",
      "<img src='https://www.bigbasket.com/media/uploads/banner_images/L1_CXNP445_1200X300_16THAPR21.jpg'>",
      "<img src='https://www.bigbasket.com/media/uploads/banner_images/CXNP342_Fresh_Meat_1200x300_7thApr.jpg'>",
      "<img src='https://www.bigbasket.com/media/uploads/banner_images/CXNP340_Egg_1200x300_7thApr.jpg'>",
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






let eggMeatFishDB = [
    {
      name: "Farm Eggs - Table Tray, Medium, Antibiotic Residue-Free",
     price: "179",
     mrp: "250",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/150502_6-fresho-farm-eggs-table-tray-medium-antibiotic-residue-free.jpg",
    kg: "pcs",
      prod_piece_unit: "30",
     brand: "Fresho",
      prod_rating: "3.5",
      prod_type: "nonveg"
    },
    {
       name: "Chicken - Curry Cut Without Skin, Antibiotic Residue-Free",
     price: "290",
     mrp: "400",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/40048898_5-fresho-chicken-curry-cut-without-skin-antibiotic-residue-free.jpg",
    kg: "kg",
      prod_piece_unit: "",
     brand: "Fresho",
      prod_rating: "3.3",
      prod_type: "nonveg"
    },
    {
    name: "Eggs - Regular",
     price: "84",
     mrp: "110",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/1203477_2-fresho-eggs-regular.jpg",
    kg: "pcs",
      prod_piece_unit: "12",
     brand: "Fresho",
      prod_rating: "3.7",
      prod_type: "nonveg"
    },
    {
    name: "Fresho Farm Eggs Medium 30 pcs + Kara Coconut Milk UHT Classic, Imported 200 ml",
     price: "245",
     mrp: "320",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/1213737_1-bb-combo-fresho-farm-eggs-medium-30-pcs-kara-coconut-milk-uht-classic-imported-200-ml.jpg",
    kg: "pcs",
      prod_piece_unit: "1",
     brand: "BB Combo",
      prod_rating: "3.8",
      prod_type: "nonveg"
    },
    {
    name: "Rohu Fish - Large, Curry Cut/Bengali Cut, Preservative Free, 12-16 pcs",
     price: "250",
     mrp: "410",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/10000756_34-fresho-rohu-fish-large-curry-cutbengali-cut-preservative-free-12-15-pcs.jpg",
    kg: "kg",
      prod_piece_unit: "",
     brand: "Fresho",
      prod_rating: "3.5",
      prod_type: "nonveg"
    },
    {
    name: "Fresho Chicken Breast Boneless 4-5 pcs 500g +Kara Coconut Milk UHT Classic 200ml",
     price: "295",
     mrp: "340",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/mm/1204282_1-bb-combo-itc-master-chef-prawns-large-200-gm-itc-aashirvaad-chilly-powder-100gm.jpg",
    kg: "kg",
      prod_piece_unit: "",
     brand: "BB Combo",
      prod_rating: "3.8",
      prod_type: "nonveg"
    },
    {
    name: "River Salmon - Boneless Curry Cut, Preservative Free, 10-15 pcs",
     price: "649",
     mrp: "715",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/20001407_1-fresho-river-salmon-boneless-curry-cut-preservative-free-10-15-pcs.jpg",
    kg: "kg",
      prod_piece_unit: "",
     brand: "Fresho",
      prod_rating: "3.3",
      prod_type: "nonveg"
    },
    {
    name: "Kolkata Tengra Fish Whole Uncleaned",
     price: "259",
     mrp: "350",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/40248644_2-fresho-tengra-fish-whole-uncleaned-fresh-flavourful.jpg",
    kg: "kg",
      prod_piece_unit: "",
     brand: "Fresho",
      prod_rating: "3.4",
      prod_type: "nonveg"
    },
    {
    name: "Chicken Drumstick - Without Skin, Antibiotic Residue-Free",
     price: "329",
     mrp: "420",
      imageUrl: "https://www.bigbasket.com/media/uploads/p/s/102592_8-fresho-chicken-drumstick-without-skin-antibiotic-residue-free.jpg",
    kg: "kg",
      prod_piece_unit: "",
     brand: "Fresho",
      prod_rating: "3.6",
      prod_type: "nonveg"
    },
    {
        name: "Farm Eggs - Table Tray, Medium, Antibiotic Residue-Free",
       price: "179",
       mrp: "250",
        imageUrl: "https://www.bigbasket.com/media/uploads/p/s/150502_6-fresho-farm-eggs-table-tray-medium-antibiotic-residue-free.jpg",
      kg: "pcs",
        prod_piece_unit: "30",
       brand: "Fresho",
        prod_rating: "3.5",
        prod_type: "nonveg"
      },
      {
         name: "Chicken - Curry Cut Without Skin, Antibiotic Residue-Free",
       price: "290",
       mrp: "400",
        imageUrl: "https://www.bigbasket.com/media/uploads/p/s/40048898_5-fresho-chicken-curry-cut-without-skin-antibiotic-residue-free.jpg",
      kg: "kg",
        prod_piece_unit: "",
       brand: "Fresho",
        prod_rating: "3.3",
        prod_type: "nonveg"
      },
      {
      name: "Eggs - Regular",
       price: "84",
       mrp: "110",
        imageUrl: "https://www.bigbasket.com/media/uploads/p/s/1203477_2-fresho-eggs-regular.jpg",
      kg: "pcs",
        prod_piece_unit: "12",
       brand: "Fresho",
        prod_rating: "3.7",
        prod_type: "nonveg"
      },
      {
      name: "Fresho Farm Eggs Medium 30 pcs + Kara Coconut Milk UHT Classic, Imported 200 ml",
       price: "245",
       mrp: "320",
        imageUrl: "https://www.bigbasket.com/media/uploads/p/mm/1205130_2-bb-combo-dabur-hommade-coconut-milk-200ml-itc-master-chef-prawns-super-large-200gm.jpg",
      kg: "pcs",
        prod_piece_unit: "1",
       brand: "BB Combo",
        prod_rating: "3.8",
        prod_type: "nonveg"
      },
      {
      name: "Rohu Fish - Large, Curry Cut/Bengali Cut, Preservative Free, 12-16 pcs",
       price: "250",
       mrp: "410",
        imageUrl: "https://www.bigbasket.com/media/uploads/p/s/10000756_34-fresho-rohu-fish-large-curry-cutbengali-cut-preservative-free-12-15-pcs.jpg",
      kg: "kg",
        prod_piece_unit: "",
       brand: "Fresho",
        prod_rating: "3.5",
        prod_type: "nonveg"
      },
      {
      name: "Fresho Chicken Breast Boneless 4-5 pcs 500g +Kara Coconut Milk UHT Classic 200ml",
       price: "295",
       mrp: "340",
        imageUrl: "https://www.bigbasket.com/media/uploads/p/mm/1202514_1-bb-combo-fresho-meat-chicken-curry-cut-without-skin-1kg-everest-chicken-masala-100g.jpg",
      kg: "kg",
        prod_piece_unit: "",
       brand: "BB Combo",
        prod_rating: "3.8",
        prod_type: "nonveg"
      },
      {
      name: "River Salmon - Boneless Curry Cut, Preservative Free, 10-15 pcs",
       price: "649",
       mrp: "715",
        imageUrl: "https://www.bigbasket.com/media/uploads/p/s/20001407_1-fresho-river-salmon-boneless-curry-cut-preservative-free-10-15-pcs.jpg",
      kg: "kg",
        prod_piece_unit: "",
       brand: "Fresho",
        prod_rating: "3.3",
        prod_type: "nonveg"
      },
      {
      name: "Kolkata Tengra Fish Whole Uncleaned",
       price: "259",
       mrp: "350",
        imageUrl: "https://www.bigbasket.com/media/uploads/p/s/40248644_2-fresho-tengra-fish-whole-uncleaned-fresh-flavourful.jpg",
      kg: "kg",
        prod_piece_unit: "",
       brand: "Fresho",
        prod_rating: "3.4",
        prod_type: "nonveg"
      },
      {
        name: "Rohu Fish - Large, Curry Cut/Bengali Cut, Preservative Free, 12-16 pcs",
         price: "250",
         mrp: "410",
          imageUrl: "https://www.bigbasket.com/media/uploads/p/s/10000756_34-fresho-rohu-fish-large-curry-cutbengali-cut-preservative-free-12-15-pcs.jpg",
        kg: "kg",
          prod_piece_unit: "",
         brand: "Fresho",
          prod_rating: "3.5",
          prod_type: "nonveg"
        },
        {
        name: "Fresho Chicken Breast Boneless 4-5 pcs 500g +Kara Coconut Milk UHT Classic 200ml",
         price: "295",
         mrp: "340",
          imageUrl: "https://www.bigbasket.com/media/uploads/p/mm/1204282_1-bb-combo-itc-master-chef-prawns-large-200-gm-itc-aashirvaad-chilly-powder-100gm.jpg",
        kg: "kg",
          prod_piece_unit: "",
         brand: "BB Combo",
          prod_rating: "3.8",
          prod_type: "nonveg"
        },
        {
        name: "River Salmon - Boneless Curry Cut, Preservative Free, 10-15 pcs",
         price: "649",
         mrp: "715",
          imageUrl: "https://www.bigbasket.com/media/uploads/p/s/20001407_1-fresho-river-salmon-boneless-curry-cut-preservative-free-10-15-pcs.jpg",
        kg: "kg",
          prod_piece_unit: "",
         brand: "Fresho",
          prod_rating: "3.3",
          prod_type: "nonveg"
        },
        {
        name: "Kolkata Tengra Fish Whole Uncleaned",
         price: "259",
         mrp: "350",
          imageUrl: "https://www.bigbasket.com/media/uploads/p/s/40248644_2-fresho-tengra-fish-whole-uncleaned-fresh-flavourful.jpg",
        kg: "kg",
          prod_piece_unit: "",
         brand: "Fresho",
          prod_rating: "3.4",
          prod_type: "nonveg"
        },
        {
        name: "Chicken Drumstick - Without Skin, Antibiotic Residue-Free",
         price: "329",
         mrp: "420",
          imageUrl: "https://www.bigbasket.com/media/uploads/p/s/102592_8-fresho-chicken-drumstick-without-skin-antibiotic-residue-free.jpg",
        kg: "kg",
          prod_piece_unit: "",
         brand: "Fresho",
          prod_rating: "3.6",
          prod_type: "nonveg"
        },
        {
            name: "Farm Eggs - Table Tray, Medium, Antibiotic Residue-Free",
           price: "179",
           mrp: "250",
            imageUrl: "https://www.bigbasket.com/media/uploads/p/s/150502_6-fresho-farm-eggs-table-tray-medium-antibiotic-residue-free.jpg",
          kg: "pcs",
            prod_piece_unit: "30",
           brand: "Fresho",
            prod_rating: "3.5",
            prod_type: "nonveg"
          },
          {
             name: "Chicken - Curry Cut Without Skin, Antibiotic Residue-Free",
           price: "290",
           mrp: "400",
            imageUrl: "https://www.bigbasket.com/media/uploads/p/s/40048898_5-fresho-chicken-curry-cut-without-skin-antibiotic-residue-free.jpg",
          kg: "kg",
            prod_piece_unit: "",
           brand: "Fresho",
            prod_rating: "3.3",
            prod_type: "nonveg"
          },
  ]

  displayproduct(eggMeatFishDB)
  let cartArr=JSON.parse(localStorage.getItem("cartItems"))||[];
  console.log(cartArr);
  function displayproduct( eggMeatFishDB){
    document.querySelector("#container").innerHTML="";
    eggMeatFishDB.forEach(function(el){
      
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
    }).then(function (){
      window.location.reload();
    });
  
    }
  
   
  }


//   -----------FILTER--------------
function fresh(){
    let filterfresho =eggMeatFishDB.filter(function(el){
      return el.brand == "Fresho"
    })
    displayproduct(filterfresho)
  };
  
  function bbcombo(){
    let filtercombo=eggMeatFishDB.filter(function(el){
      return el.brand=="BB Combo"
    })
    displayproduct(filtercombo);
    
  };

  // ----------sorting Part----

function sortprice(){
    let pricesort = document.querySelector("#sorting").value
    if(pricesort == "l2h"){
        eggMeatFishDB.sort(function(a,b){
      return a.mrp-b.mrp;
    })
    displayproduct(eggMeatFishDB)
    }
    if(pricesort == "h2l"){
        eggMeatFishDB.sort(function(a,b){
        return b.mrp-a.mrp;
      })
      displayproduct(eggMeatFishDB);
    }
    }