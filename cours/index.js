// ---------------- XMLHttpRequest



// function reqListener() {
//     console.log(this.responseText);
// }

// let req = new XMLHttpRequest();

// req.open("get", "./data.json", true);
// // req.open("get", "./data.txt", true);
// req.open("get", "https://api.blablagues.net/?rub=blagues", true);

// req.send();
// req.onload = reqListener;

// ------------------- fetch

// fetch("data.txt")
//     .then((response) => response.text())
//     .then((data) => console.log(data));

// fetch("data.json")
//     .then((response) => response.json())
//     .then((data) => console.log(data));
myHeaders = new Headers;

const init1 = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",

}


const init2 = {
    method: "POST",
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify({
        pseudo: "From Scratch",
        message: "salut les gens!",
    }),
    // mode: "cors",
    // credentials: "same-origin",


};

document.querySelector("form").addEventListener('submit', () => {
    fetch("http://localhost:3000/posts", init2)
        .then(() => console.log("data send! "))
        .catch((e) => console.log(e))
});

// fetch("http://localhost:3000/posts", init2)
//     .then(() => console.log("data send! "))