window.onload=()=>{
    
   let randomSuit = Math.floor(Math.random()*4);
   let randomNumber = Math.floor(Math.random()*13);
   
   let numbers = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
   let suits = ['&spades;', '&hearts;', '&diams;', '&clubs;'];
   
   let chosenSuit = suits[randomSuit];
   let chosenNumber= numbers[randomNumber];
   
   let newNumber= document.querySelector("h1");
   newNumber.innerHTML=chosenNumber;
  
   let newSuit= document.querySelector(".heart-top");
   newSuit.innerHTML=chosenSuit;
  
   let newBottomSuit= document.querySelector(".heart-bottom");
   newBottomSuit.innerHTML=chosenSuit;
}