import navbar from "../component/navbar.js"

document.getElementById("navigation").innerHTML=navbar();

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

let select=document.querySelector("#city");
cities.forEach((el)=>{
    let option=document.createElement("option");
    option.innerHTML=el.city;
    option.setAttribute("value",el.city);
    select.append(option);
})

let userName=sessionStorage.getItem("username") || "";

if(userName=="" || userName==null || userName==undefined){
  document.getElementById("beforeLogin").style.display="block";
  document.getElementById("afterLogin").style.display="none";
}else{
  document.getElementById("beforeLogin").style.display="none";
  document.getElementById("afterLogin").style.display="block";
  document.getElementById("userName").innerText=userName;
}

let itemsCount=JSON.parse(localStorage.getItem("homedata"))|| [];

document.getElementById("itemsCount").innerText=`${itemsCount.length} items`;

document.getElementById("itemsCountForBasket").innerText=`${itemsCount.length} items`;