 function rockPaperScissor(user,computer) {
    if(user === computer) return "Draw"

    if(user === "rock" && computer === "scissor") return "User Wins"
    if(user === "paper" && computer === "rock") return "User Wins"
    if(user === "scissor" && computer === "paper") return "User Qing"
 }