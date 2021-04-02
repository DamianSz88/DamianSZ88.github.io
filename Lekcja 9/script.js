const views=[

{
    "src":"1.jpg",
    "name":"Pierwszy"
},
{
    "src":"2.jpg",
    "name":"Drugi"
    
},
{
    "src":"3.jpg",
    "name":"Trzeci"

}

];

let currentSlide=0;

function displayView(index){
    const titleField=document.querySelector("h2");
    titleField.innerHTML=views[index].name;
    const imgField=document.querySelector(".content");
    imgField.innerHTML="";
    const img =document.createElement("img");
    img.src="img/"+views[index].src;
    imgField.append(img);
}

displayView(currentSlide);

//  Ustawiamy Klikanie Przyciski
const leftArr=document.querySelector(".left");
leftArr.onclick = () => {changeSlide("left")};
const rightArr = document.querySelector(".right");
  rightArr.onclick = () => {changeSlide(".right")};

  //Przełączanie Slajdów 
 
    function changeSlide(direction){

        if(direction=="left"){
            currentSlide--;
            if(currentSlide<0){
                currentSlide=views.length-1;

            }
        }else{
            currentSlide++;
            if(currentSlide>views.length-1){
                currentSlide=0
            }
        }
        displayView(currentSlide);
    }


