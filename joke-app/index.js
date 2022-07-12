const header = document.getElementById("header");
const content = document.getElementById("content");

// console.log();


getJoke = () => {
    fetch("https://api.blablagues.net/?rub=blagues")
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data.data.content);
            const joke = data.data.content;
            header.textContent = joke.text_head;
            content.textContent = joke.text !== "" ? joke.text : jke.text_hidden;

        })
}


document.body.addEventListener('click', getJoke);