
// 
var food =[{
        cuisine:"japanese",
        name:"Onigiri Sushi",
        rating: 4.9,
        price: 2,
        address: "123 45th street NYC",
        images:[{img:1,
                name:"sushi",
                src:"/images/0.jpg"
            },{
                img:2,
                name:"melt",
                src:"/images/white-shadow.jpg"
            },{
                img:3,
                name:"drizzle",
                src:"/images/Best-Fried-Sushi-Recipes.jpg"
            },{
                img:4,
                name:"onigiri",
                src:"/images/woman-shaping-onigiri-ball-with-sushi-rice-25f8bbc5ae18c91ec1169fd2908e8a61-1920-q60.jpg"
            }]
            },{
        cuisine:"japanese",
        name:"Great Wave",
        rating:4.2,
        price:3,
        address:"322 141st ave",
        images:[{img:1,
                name:"Front door",
                src:"/images/frontdorr.jpg"}
            ,{
                img:2,
                name:"Dynomite Roll",
                src:"/images/AburiyaSushi-MapleRidge-BC.jpeg"
            },{
                img:3,
                name:"Deepfried",
                src:"/images/9861e00c-fb69-4859-a6e1-2b221c531ff5.jpg"
            }]
            },{
        cuisine:"Exotic",
        name:"Andiconda",
        rating:"5",
        price:"5",
        address:"Amozon Rainforest",
        images:[{img:1,
                name:"Newt",
                src:"/images/green-anaconda-eyes-nose-two-column.jpg.thumb.768.768.jpg"}]
            },{
        cuisine:"Mexican",
        name:"Muchoburrito",
        rating:"5",
        price:"2",
        address:"222 122 ave NYC",
        images:[{img:1,
                name:"Meal",
                src:"/images/download.jpg"
            },{
                img:2,
                name:"staff",
                src:"/images/crew-photo.jpg"
            },{
                img:3,
                name:"Unwrapped Burrito",
                src:"/images/hcmp39257_1059257.jpeg"
            },{
                img:4,
                name:"stuffing",
                src:"/images/D5LZ_3WVUAAJFn_.jpg"
            }]
            },{
        cuisine:"Mexican",
        name:"Cholos Homestyle Mexican Restaurant",
        rating:"4.9",
        price:"2",
        address:"124 242ave NYC",
        images:[{img:1,
                name:"Restaurant",
                src:"/images/photo2jpg.jpg"
            },{
                img:2,
                name:"meal",
                src:"/images/2019_01_19_10a9da7b-f969-4ea8-9046-3ec2f1627318.jpg"
            },{
                img:3,
                name:"menu",
                src:"/images/Menu.jpg"
            },{
                img:4,
                name:"Drinks",
                src:"/images/p347_zoom_54d9ccc07adda8.15428896.jpg"
            },{
                img:5,
                name:"Owner",
                src:"/images/web1_reus-cholos.jpg"
            },{
                img:6,
                name:"Pretty Girl",
                src:"/images/Frn7RULXoAI2osN.jpg"
            }]
            },{
        cuisine:"Fastfood",
        name:"Mcdonalds",
        rating:"4.1",
        price:"1",
        address:"334 34 street NYC",
        images:[{img:1,
                name:"BigMac Meal",
                src:"/images/BigMac.jpg"
            },{
                img:2,
                name:"Storefront",
                src:"/images/shutterstock-579877510.jpg"
            },{
                img:3,
                name:"QP",
                src:"/images/im-592678.jpg"
            },{
                img:4,
                name:"Big Eats",
                src:"/images/we-bought-it-even-more.jpg"
            }]
            },{
        cuisine:"Fastfood",
        name:"Wendys",
        rating:"3.1",
        price:"2",
        address:"124 45 street NYC",
        images:[{img:1,
                name:"Meal",
                src:"/images/l-intro-1660865752.jpg"
            },{
                img:2,
                name:"Set",
                src:"/images/1-27.png"
            },{
                img:3,
                name:"Cheessee",
                src:"/images/300s.jpg"
            },{
                img:4,
                name:"Death",
                src:"/images/images.jpg"
            }]
            },
]
//function for first page button to hide first page content and make second page content appear.
btnJStyle.onclick = () => {
let scrn1 = document.getElementById("firstPage");
let scrn2 = document.getElementById("secondPage");
    btnJStyle.style.display = "none";
    scrn1.classList.toggle("disabled");
    scrn2.classList.remove("disabled");
    reRoll.classList.toggle("enabled");
    bBtn.classList.toggle("enabled");
}


bBtn.onclick = () => {
    document.location.reload();
}

reRoll.onclick = () => {
    //add results
}


// when I have an img showing if I slide left or right I move ++ or -- in img gallery.

