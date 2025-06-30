let userscore=0;
let compscore=0;
 compchoice=()=>{
    arr=["rock","paper","scissors"];
   idx= Math.floor(Math.random()*3);
   return arr[idx];
}
playgame=(userchoice)=>{
      console.log("you=",userchoice);
      computerchoice=compchoice();
      msg=document.querySelector("#msg");
      console.log("comp=",computerchoice);

    user=document.querySelector("#userscore");
    comp=document.querySelector("#compscore");
      
      if(userchoice==computerchoice)
      {
        console.log("DRAW");
        msg.innerText="Draw Game! Try again";
        msg.style.backgroundColor="rgb(4, 4, 68)";
      }
      if(userchoice=="rock")
      {
        if(computerchoice=="paper")
        {
             compscore++;
            console.log("compscore=",compscore);
             comp.innerText=compscore;
            msg.innerText="You Loose!Try again";
            msg.style.backgroundColor="Red";
        }
        if(computerchoice=="scissors")
        {
            userscore++;
            console.log("userscore=",userscore);
             user.innerText=userscore;
            msg.innerText="You win!keep it up";
            msg.style.backgroundColor="Green";
        }
     }
     if(userchoice=="paper")
      {
        if(computerchoice=="scissors")
        {
            compscore++;
            console.log("compscore=",compscore);
             comp.innerText=compscore;
            msg.innerText="You Loose!Try again";
            msg.style.backgroundColor="Red";
        }
        if(computerchoice=="rock")
        {
            userscore++;
            console.log("userscore=",userscore);
             user.innerText=userscore;
               msg.innerText="You win!keep it up";
            msg.style.backgroundColor="Green";
        }
     }
      if(userchoice=="scissors")
      {
        if(computerchoice=="rock")
        {
            compscore++;
            console.log("compscore=",compscore);
             comp.innerText=compscore;
            msg.innerText="You Loose!Try again";
            msg.style.backgroundColor="Red";
        }
        if(computerchoice=="paper")
        {
            userscore++;
            console.log("userscore=",userscore);
             user.innerText=userscore;
               msg.innerText="You win!keep it up";
            msg.style.backgroundColor="Green";
        }
     }


}
 choices=document.querySelectorAll(".choice");
choices.forEach((choice) => {
console.log(choice);
choice.addEventListener("click",()=>{
const userchoice=choice.getAttribute("id");
playgame(userchoice);
})
});



