const cupsmall = document.querySelectorAll(".cups .cupsmall")
const percentage = document.querySelector(".cup .percentage")
const remaining = document.querySelector(".cup .remained")
const number = document.querySelector(".percentage .number")
const litres = document.querySelector(".remained .litres")
let total = 8;

//fillBigCup();
cupsmall.forEach((cup,index)=>{
    cup.addEventListener("click",()=>{
      highlightCup(index);
      
    })
       
});
//this function will fill the cups
function highlightCup(index){
    cupsmall.forEach((cup,currentCupIndex)=>{
    //this function checks if cup is clicked after being filled
    
        if (cupsmall[index].classList.contains("full") &&
            !cupsmall[index].nextElementSibling.classList.contains("full")) {
            index--;
        }

        
        if(currentCupIndex<=index){
            cup.classList.add("full");
        }

        else {
            cup.classList.remove("full");
        }
        fillBigCup(cup);
    })
    };



function fillBigCup(){
    const totalFullCups = document.querySelectorAll(".cup.full").length;
    const total = cupsmall.length;
    if(totalFullCups===0){
        percentage.style.visibility="hidden";
        litres.innerText = `${2-(250/1000)*totalFullCups}L`;
    }
    else{
        percentage.style.visibility="visible"
    percentage.style.height= `${totalFullCups / total*270}px`;
    number.innerText = `${(totalFullCups/total)*100}%`;
    litres.innerText = `${2-(250/1000)*totalFullCups}L`;

    }

    if(totalFullCups===total){
        remaining.style.visibility="hidden";
        remaining.style.height="0px";
    }
    else{
        remaining.style.visibility="visible";
    }
}


