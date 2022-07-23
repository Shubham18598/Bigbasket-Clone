// cities
let cities = [
    {city:"Agra"},
    {city:"Ahemdabad"},
    {city:"Aizwal"},
    {city:"Anuppur"},
    {city:"Araria"},
    {city:"Ariyalur"},
    {city:"Arwal"},
    {city:"AshokNagar"},
    {city:"Badgam"},
    {city:"Bagalkot"},
    {city:"Bangalore"},
    {city:"Bhopal"},
    {city:"Bidar"},
    {city:"Bijapur"},
    {city:"Bundi"},
    {city:"Burhanpur"},
    {city:"Buxar"},
    {city:"Cachar"},
    {city:"CentralDelhi"},
    {city:"Cuddalore"},
    {city:"Cuttack"},
    {city:"DadraAndNagarHaveli"},
    {city:"Dahod"},
    {city:"DakshinDinajpur"},
    {city:"DakshinaKannada"},
    {city:"Daman"},
    {city:"Damoh"},
    {city:"Dantewada"},
    {city:"Diu"},
    {city:"Doda"},
    {city:"Dumka"},
    {city:"Dungapur"},
    {city:"Durg"},
    {city:"EastChamparan"},
    {city:"EastDelhi"},
    {city:"EastGaroHills"},
    {city:"EastKhasiHills"},
    {city:"Fazilka"},
    {city:"Firozabad"},
    {city:"Firozpur"},
    {city:"Gadag"},
    {city:"Gadchiroli"},
    {city:"Gajapati"},
    {city:"Gurgaon"},
    {city:"Gwalior"},
    {city:"Hailakandi"},
    {city:"Hamirpur"},
    {city:"Hamirpur"},
    {city:"Hanumangarh"},
    {city:"Hyderabad"},
    {city:"Hyderabad"},
    {city:"Idukki"},
    {city:"ImphalEast"},
    {city:"ImphalWest"},
    {city:"Indore"},
    {city:"Jabalpur"},
    {city:"Jagatsinghpur"},
    {city:"JaintiaHills"},
    {city:"Kadapa"},
    {city:"Kaimur"},
    {city:"Kaithal"},
    {city:"Kakinada"},
    {city:"Lakhisarai"},
    {city:"Lalitpur"},
    {city:"Latehar"},
    {city:"Latur"},
    {city:"Mon"},
    {city:"Moradabad"},
    {city:"Morena"},
    {city:"Mumbai"},
    {city:"Nadia"},
    {city:"Nagaon"},
    {city:"Nagapattinam"},
    {city:"Nagaur"},
    {city:"Ongole"},
    {city:"Osmanabad"},
    {city:"Pakur"},
    {city:"Wokha"},
    {city:"Yadgir"},
    {city:"YamunaNagar"},
    {city:"Yanam"},
    {city:"Yavatmal"},
    {city:"Zunheboto"}
]

cities.forEach((el)=>{
    let option=document.createElement("option");
    option.innerHTML=el.city;
    option.setAttribute("value",el.city);
    document.getElementById("city").append(option);
})


/* sticky header */
myID = document.getElementById("navbar");

let myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 50) {
        myID.className = "show"
    } else {
        myID.className = "hide"
    }
};

window.addEventListener("scroll", myScrollFunc);

// search
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

let search=()=>{
    let q=document.getElementById("query").value;
    // console.log(q);
    let filteredData=fruits_vegArr.filter(function(el){
        return el.name==q;
    });
    console.log(filteredData)
    append(filteredData);
}

let append=(filteredData)=>{
    filteredData.forEach((el)=>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",el.imageUrl);
        let 
    })
}



