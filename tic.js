let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer =document.querySelector(".msg-container")
let mssg=document.querySelector("#msg");
let msgContainer2 =document.querySelector(".msg-container2")
let drwamsg=document.querySelector("#drawmsg");

let turnO= true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
boxes.forEach((box) => {
      box.addEventListener("click",()=>{
            console.log("box was clicked");
            if(turnO){
            box.innerText="O";
            turnO=false;
            }
            else{
                box.innerText="X";
                box.style.color="green";
                turnO=true;
            }
            box.disabled=true;
            checkWinner();
      })   
});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
      mssg.innerText=`Congratulation, Winner is ${winner}`;
      msgContainer.classList.remove("hide");
      disableboxes();
}
let count=0;
const checkWinner=() =>{
    count=count+1;
    for(let pattern of winPatterns){
       let pos1val= boxes[pattern[0]].innerText;
       let pos2val= boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
       
        if(pos1val!= "" && pos2val!="" && pos3val!=""){
            if(pos1val=== pos2val && pos2val=== pos3val){
                console.log("winner");
                showWinner(pos1val);
            }
            else{
                draws(count);
            }
        }
    }
}
const resetGame= () => {
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
}
newGamebtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
let draws=(count)=>{
    if(count==9){
        showdraw();
    }
}
const showdraw=()=>{
    drwamsg.innerText="Game is Draw ! Play a new game";
    msgContainer2.classList.remove("hidden");
    disableboxes();
}