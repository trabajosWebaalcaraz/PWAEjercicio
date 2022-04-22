const { useState, useEffect } = require("react");

function Characters() {
    const [characters, setCharacters] = useState("");
    const [descriptions, setDescriptions] = useState("");



    useEffect(() => {
        if (!navigator.onLine) {
            if (localStorage.getItem("characters") === null) {
                setCharacters("Loading...");
                setDescriptions("...");
            } else {
                setCharacters(localStorage.getItem("characters"));
                setDescriptions(localStorage.getItem("descriptions"));

            }
        } else {
            fetch("https://gateway.marvel.com/v1/public/characters?ts=254297594758&apikey=d12f7abbde09788352b3c1ee3f29a7fd&hash=d5d886c945900d9a0cbb5afb2e7842bd").then(res => res.json()).then(res => {

                // console.log(res.data.results[0].name);

                // for (let i = 0; i < datos.length; i++) {
                //     setCharacters[i](datos[i].name);
                //     console.log(characters[i]);
                //     localStorage.setItem("characters" + i, datos[i].name);
                // }
                setCharacters(res.data.results[2].name);
                setDescriptions(res.data.results[2].description);
                localStorage.setItem("characters", res.data.results[2].name);
                localStorage.setItem("descriptions", res.data.results[2].description);
                // No logré usar hooks como contenedor y añadirlos en forma de ciclo, por lo tanto envio con ejemplo de un personaje.
            })
        }
    }, [])

    return (
        <><h1>Personajes</h1><h2>{characters}</h2><h2>{descriptions}</h2></>
    )
}

export default Characters;

