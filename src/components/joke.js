const { useState, useEffect } = require("react");

function Joke() {
    const [joke, setJoke] = useState("");

    useEffect(() => {
        if (!navigator.onLine) {
            if (localStorage.getItem("joke") === null) {
                setJoke("Loading...")
            } else {
                setJoke(localStorage.getItem("joke"));

            }
        } else {
            fetch("https://api.chucknorris.io/jokes/random").then(res => res.json()).then(res => {
                setJoke(res.value);
                localStorage.setItem("joke", res.value);
            })
        }
    }, [])

    return (
        <h1>{joke}</h1>
    )
}

export default Joke;