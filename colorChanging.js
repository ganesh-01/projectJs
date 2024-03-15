
//TYPE-1 -> USING ARRAY AND DESIRED COLORS
let clrs = [
    "red",
    "blue",
    "greenyellow",
    "green",
    "yellow",
    "mediumspringgreen",
    "tomato",
    "olive",
    "maroon",
    "teal"
  ];
  const changingDiv = document.getElementById("mainFields");
  const btn = document.getElementById("btn");
  const dispText = document.getElementById("displayColor");
  
  const changingFunc = () => {
    const ranNum=Math.floor(Math.random()*clrs.length);
  
    dispText.textContent=clrs[ranNum];
    changingDiv.style.backgroundColor=clrs[ranNum];
    dispText.style.color=clrs[ranNum];
    console.log(clrs[ranNum]);
  };
  
  btn.addEventListener("click", changingFunc); 



// TYPE-2 -> CHANGING LAST 2 DIGITS RANDOMLY
let clrs1 = "#FF0000";
const changingDiv1 = document.getElementById("mainFields1");
const btn1 = document.getElementById("btn1");
const dispText1 = document.getElementById("displayColor1");

const changingFunc1 = () => {
  const ranClrNum1 = Math.floor(Math.random() * 9);
  const ranClrNum2 = Math.floor(Math.random() * 9);
  clrs1 = clrs1.replace(clrs1[clrs1.length - 1], ranClrNum1);
  clrs1 = clrs1.replace(clrs1[clrs1.length - 2], ranClrNum2);
  console.log(clrs1);

  dispText1.textContent = clrs1;
  changingDiv1.style.backgroundColor = clrs1;
  dispText1.style.color = clrs1;
};

btn1.addEventListener("click", changingFunc1);

//DICE GAME
const diceBtn=document.getElementById("diceBtn");
const diceDisp=document.getElementById("diceDisp");
const diceFunc=()=>{
    let ranNum=Math.floor(Math.random()*6)+1;
    console.log(ranNum);
    diceDisp.textContent=ranNum;
};
diceBtn.addEventListener("click",diceFunc);
