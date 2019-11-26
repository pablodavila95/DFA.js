getQs = () => {
    let size = document.getElementById("Q").value;
    parseInt(size);
    return size;
};

getASize = () => {
    let dictionary = getDictionary();
    return dictionary.length;
};

getDictionary = () => {
    const remDup = e => [...new Set(e)].sort().join("");

    let dictionaryValue = remDup(document.getElementById('dictionary').value);
    //let chars = dictionaryValue.split();
    return Array.from(dictionaryValue);
};

clear_table = () => {
    let table = document.getElementById("table");
    table.innerHTML = "";
};

arrayOfQs = () => {
    let data = [];
    let length = getQs(); // user defined length

    for (let i = 0; i < length; i++) {
        data.push("q" + i);
    }
    return data;
};

dynamic_regex = () => {
    const remDup = e => [...new Set(e)].sort().join("");

    let textInput = document.getElementById("stringOfCharacters");
    let dictionaryString = remDup(document.getElementById('dictionary').value);
    dictionaryString = dictionaryString.split("").join("|");

    textInput.pattern = "(" + dictionaryString.toString() + ")*";
};

submit = () => {
    let alphabet = document.getElementById("dictionary");
    if (!alphabet.checkValidity()) {
        alert("El alfabeto tiene un caracter invalido");
    } else {
        createTable();
    }
};

submitString = () => {
    dynamic_regex();
    let theString = document.getElementById("stringOfCharacters");
    if (!theString.checkValidity()) {
        alert("La cadena debe contener solo valores del alfabeto")
    } else {
        objectsGenerator();
        console.log("HERE!");
    }
};

function createTable() {


    clear_table();

    let myQs = arrayOfQs();

    let title = document.getElementById("tableTitle");
    title.innerText = getDictionary().toString();

    let rn = getQs();
    let cn = getASize();

    for (let r = 0; r < rn; r++) {
        let x = document.getElementById('table').insertRow(r);

        let rad = document.createElement("INPUT");
        rad.setAttribute("type", "radio");
        rad.setAttribute("name", "checks");
        rad.setAttribute("id", "radio" + r);
        let chk = document.createElement("INPUT");
        chk.setAttribute("id", "check" + r);
        chk.setAttribute("type", "checkbox");
        chk.setAttribute("name", "checks");
        let elemento = document.createElement("p");
        let texto = document.createTextNode("q" + r);
        elemento.appendChild(texto);
        elemento.setAttribute("id", "q" + r);

        x.insertCell(0).appendChild(elemento);
        x.insertCell(0).appendChild(rad);
        x.insertCell(0).appendChild(chk);


        for (let c = 0; c < cn; c++) {
            let element = document.createElement("select");
            element.setAttribute("name", "states");

            element.setAttribute("id", "s" + c);

            for (let i = 0; i < myQs.length; i++) {
                let opt = myQs[i];
                let z = document.createElement("option");
                z.textContent = opt;
                z.value = opt;

                element.appendChild(z);
            }
            x.insertCell(c).appendChild(element)
        }
    }
}


