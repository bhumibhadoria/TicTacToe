console.log("Welcome to tic tac toe")
let music = new Audio("music.mp3")
let audioturn = new Audio("turn.wav")
let gameover = new Audio("gameover.wav")
let turn = "X"

// function to change the turn
const changeTurn = () => {
    return turn === "X"?"0" : "X"
}
 
// function to check for a Win
const checkWin = () => {

}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((Element)=>{
    let boxtext = document.querySelector(".boxtext")
    Element.addEventListener("click",()=>{
        if (boxtext.innerText === ""){
            boxtext.innerText === turn;
            changeTurn();
            audioturn.play();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
        }

    })
})
