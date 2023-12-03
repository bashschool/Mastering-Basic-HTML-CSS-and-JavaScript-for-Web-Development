console.log("hello from script.js")


const counter =
    document.querySelector("p")

let count = 0;


function random() {
    count = Math.floor(Math.random() * 100)
    if (count === 50) {
        alert("Hurray 🥳")
    }
    console.log(count)
    counter.innerHTML = count
}

function increment() {
    count = count + 1

    console.log("count ka value hain ", count)
    counter.innerHTML = count
    if (count === 50) {
        alert("Hurray 🥳")
    }
    console.log("innter html ka value hain ", counter.innerHTML)
    localStorage.setItem("count", count)
}
function decrement() {
    if (count > 0) {

        count = count - 1
        console.log("count ka value hain ", count)
        counter.innerHTML = count
        if (count === 50) {
            alert("Hurray 🥳")
        }
        console.log("innter html ka value hain ", counter.innerHTML)
        localStorage.setItem("count", count)
    }
}




console.log(typeof (counter.innerHTML))


const incrementbtn = document.getElementById("increment").addEventListener("click", increment)
const decrementbtn = document.getElementById("decrement").addEventListener("click", decrement)
document.getElementById("random").addEventListener("click", random)


// counter.innerHTML = "-1"


