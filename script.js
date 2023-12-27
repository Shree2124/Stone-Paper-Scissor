let user = document.querySelectorAll(".user ul li")
let computer = document.querySelectorAll(".computer ul li button");
// for (let i of user) {
//     console.log(i.getAttribute("value"));
// }
// for (let i of computer) {
//     console.log(i.getAttribute("value"));
// }

function result(str) {
    document.querySelector(".result").style.visibility = "visible";
    document.querySelector(".result p").innerText = `${str}`;
    document.querySelector(".game-icons").classList.add("hide")
    document.querySelector(".game h1").innerText = "Result!"
}

user.forEach((v, e) => {
    v.addEventListener("click", () => {

        let a = Math.floor(Math.random() * 3);
        let btn = document.querySelector(".result button");
        btn.addEventListener('click', () => {
            document.querySelector(".result").style.visibility = "hidden";
            document.querySelector(".game-icons").classList.remove("hide")
            document.querySelector(".game h1").innerText = "Stone, Paper, Scissor"
        })
        if (a === !0) {
            a -= 1;
        }
        console.log(v.getAttribute("value"), computer[a].getAttribute("value"));

        if (v.getAttribute("value") === computer[a].getAttribute("value")) {
            console.log("inside if");
            result('Game is Draw')

        } else if ((v.getAttribute("value") === "stone") && (computer[a].getAttribute("value") === "scissor")
            || (v.getAttribute("value") === "paper") && (computer[a].getAttribute("value") === "stone")
            || (v.getAttribute("value") === "scissor") && (computer[a].getAttribute("value") === "paper")
        ) {
            result('Winner is Computer')
        } else {
            result('Winner is User')
        }
    })
});

