
function imprimeHola() {
    console.log("Hola");
};



function main() {
    console.log("Starting...");
    const titulo = document.querySelector("h1");
    /*pointerenter: cuando se pasa el ratón por encima*/
    titulo.addEventListener("pointerenter", imprimeHola);
    const elements = Array.from(document.body.querySelectorAll("*"));

    console.log(elements);

    const counters = elements.map(
        (item) => {
            const obj = {
                element: item,
                counter: 0,
            };
            item.addEventListener("pointerenter", () => {
                obj.counter++;
                console.log(obj);
            })
        });
}


/*load: Cuando la página esté cargada*/
window.addEventListener("load", main);


