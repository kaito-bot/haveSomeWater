const cupsmall = document.querySelectorAll(".cups .cupsmall")

//this function will fill the cups
function highlightCup(index){
    cupsmall.forEach((cup,currentCupIndex)=>{
    //this function checks if cup is clicked after being filled
        cupClickedAgain();
        
        if(currentCupIndex<=index){
            cup.classList.add("full");
        }

        else {
            cup.classList.remove("full");
        }
    })

    function cupClickedAgain() {
        if (cupsmall[index].classList.contains("full") &&
            !cupsmall[index].nextElementSibling.classList.contains("full")) {
            index--;
        }
    }
    };

cupsmall.forEach((cup,index)=>{
    cup.addEventListener("click",()=>{
      highlightCup(index);
    })
});


