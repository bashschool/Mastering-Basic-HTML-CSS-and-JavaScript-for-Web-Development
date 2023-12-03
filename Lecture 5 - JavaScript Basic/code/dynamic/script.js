document.getElementById("h1").addEventListener("click", addh1tag)
document.getElementById("p").addEventListener("click", addPtag)

document.getElementById("li").addEventListener("click", addlitag)

function addh1tag() {
    var h1 = document.createElement("h1");

    let text = prompt("what you want to pass in your h1 tag")
    let textnode = document.createTextNode(text);
    h1.appendChild(textnode);
    document.getElementById("canvas").appendChild(h1)
}


function addPtag() {
    var p = document.createElement("p");

    let text = prompt("what you want to pass in your p tag")
    let textnode = document.createTextNode(text);
    p.appendChild(textnode);
    document.getElementById("canvas").appendChild(p)
}



function addlitag() {
    var li = document.createElement("li");

    let text = prompt("what you want to pass in your li tag")
    let textnode = document.createTextNode(text);
    li.appendChild(textnode);
    document.getElementById("canvas").appendChild(li)
}