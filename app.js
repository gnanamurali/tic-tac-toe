let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbutton=document.querySelector("#new");
let msgContainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let playerX=true;
let count=0;

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        count++;
        if(playerX==true)
        {
            box.innerText="X";
            playerX=false;
            console.log("playerx=",playerX);
            if(count>=9)
            {
                displayDraw();

            }
        }
       
        else
        {
            box.innerText="O";
            playerX=true;
            console.log("playerx=",playerX);
            if(count>=9)
            {
                displayDraw();

            }
        }
        box.disabled=true;
        checkWinner();
        
    })   
    
})
const displayDraw=()=>
{
    msg.innerText=`Game Drawn`;
    msgContainer.classList.remove("hide");
    console.log("game drawn");
}


const checkWinner=()=>{
    for(let pattern of winPattern)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!=""&&pos2!=""&&pos3!="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                console.log("Winner",pos1);
                displayWinner(pos1)
                boxDisable();
                
            }
            
        }

    }
}

const displayWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");

}




const boxDisable=()=>{
    for(let box of boxes)
                {
                    box.disabled=true;
                }
}

const boxEnable=()=>
{
    for(let box of boxes)
                {
                    box.disabled=false;
                    box.innerText="";
                }
}




const resetBut=()=>{
    playerX=true;
    boxEnable();
    msgContainer.classList.add("hide");
    count=0;
}

reset.addEventListener("click",resetBut);
newbutton.addEventListener("click",resetBut);

