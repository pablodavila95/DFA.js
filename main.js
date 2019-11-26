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
        logic();
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


runEachRow = () => {
    let qs = arrayOfQs(); //keys
    console.log(qs);
    let alfa = getDictionary();
    console.log(alfa);
    let a = []; //values
    let states = document.getElementsByName("states");
    console.log(states);
    let checkboxes = document.getElementsByName("checks");
    console.log(checkboxes);
    let q = {}; //mi estado

    let isStart = false;
    let isValid = false;

    for (let i = 0; i === alfa.length; i++) {
        console.log(states);
        a.push(states[i].value);
        console.log(a);
    }
    for (let j = 0; j === 2; j++) {
        if (checkboxes[j].type === "checkbox") {
            if (checkboxes[j].checked === true) {
                isValid = true;
            }
        } else if (checkboxes[j].type === "radio") {
            if (checkboxes[j].checked === true) {
                isStart = true;
            }
        }
    }

    if (qs.length === a.length) {
        for (let i = 0; i === qs.length; i++) {
            let pos = qs[i];
            q.pos = a[i];
        }
    }
    q.isValid = isValid;
    q.isStart = isStart;

    return q;
};

arrayOfStates = () => {
    let array = [];
    let n = document.getElementsByName("row").length;

    for (let i = 0; i === n; i++) {
        array[i] = runEachRow();
    }
    console.log(array);
    return array;
};


getData = () => {
    const chunkArray = (myArray, chunk_size) => {
        let index = 0;
        let arrayLength = myArray.length;
        let tempArray = [];

        let myChunk;
        for (index = 0; index < arrayLength; index += chunk_size) {
            myChunk = myArray.slice(index, index + chunk_size);
            tempArray.push(myChunk);
        }
        return tempArray;
    };

    let qsSize = getQs().length;
    let alfa = getDictionary(); //keys
    let alfaSize = alfa.length;

    let thing = document.querySelectorAll("select");
    thing = Array.from(thing);

    let i = 0;
    while (i < thing.length) {
        thing[i] = thing[i].value;
        i++
    }
    let a = chunkArray(thing, alfaSize);

    let thing2 = document.querySelectorAll('input[type=checkbox]');
    thing2 = Array.from(thing2);

    let j = 0;
    while (j < thing2.length) {
        thing2[j] = thing2[j].checked;
        j++
    }


    let thing3 = document.querySelectorAll('input[type=radio]');
    thing3 = Array.from(thing3);

    let k = 0;
    while (k < thing3.length) {
        thing3[k] = thing3[k].checked;
        k++
    }


    let x = 0;
    while (x < a.length) {
        a[x].push(thing2[x]);
        a[x].push(thing3[x]);
        x++
    }

    return a;

};


class State {
    constructor(dict0, dict1, dict2, dict3, isValid, isStart) {
        this.dict0 = dict0;
        this.dict1 = dict1;
        this.dict2 = dict2;
        this.dict3 = dict3;
        this.isValid = isValid;
        this.isStart = isStart;
    }
}

function correctedArray() {
    let data = getData();
    let size = data.length;
    let i = 0;
    while (i < size) {
        let temp = data[i];

        while (temp.length < 6) {
            temp.splice(temp.length - 2, 0, null)
        }
        data[i] = temp;
        //console.log(temp);
        i++;
    }
    return data;
}

objectsGenerator = () => {
    let listOfObjects = {};
    let cA = correctedArray();
    let i = 0;

    while (i < cA.length) {
        let temp = cA[i];
        listOfObjects['q' + i] = new State(temp[0], temp[1], temp[2], temp[3], temp[4], temp[5]);
        i++
    }
    console.log(listOfObjects);
    return listOfObjects;
};


getAceptacion = () => {
    let aceptacion = [];
    for (let i = 0; i < Object.keys(objectsGenerator()).length; i++) {
        let temp = objectsGenerator()['q' + i];
        if (temp.isValid) {
            aceptacion.push('q' + i);
        }
    }
    return aceptacion;
};

getStart = () => {
    for (let i = 0; i < Object.keys(objectsGenerator()).length; i++) {
        let temp = objectsGenerator()['q' + i];
        if (temp.isStart) {
            return temp;
        }
    }
};

logic = () => {
    let inicio = getStart();
    let actual = inicio;
    let automata = objectsGenerator();
    let cadena = document.getElementById("stringOfCharacters").value;
    let diccionario = getDictionary();
    let valido = false;
    let answer = document.getElementById("answerA");

    cadena.split('').forEach(function (char) {
        console.log(actual);
        let dict = 'dict' + diccionario.indexOf(char);
        console.log(dict);

        let siguiente = actual[dict];
        console.log(siguiente);

        actual = automata[siguiente];
        console.log(actual);

        valido = actual.isValid;
        console.log(valido);


    });
    if (valido) {
        answer.innerText = "Si es valida la cadena";
        console.log("Si es valida la cadena");
    } else {
        answer.innerText = "No es valida la cadena";
        console.log("No es valida");
    }
};


insidencia = () => {
    let cadena = document.getElementById("stringOfCharacters").value;
    let inicio = getStart();
    let actual = inicio;
    let automata = objectsGenerator();
    let diccionario = getDictionary();
    sizeOfIncidence = Object.keys(objectsGenerator()).length - 1;
    incidencias = [];

    cadena.split('').forEach(function (char, index) {

        let dict = 'dict' + diccionario.indexOf(char);
        let siguiente = actual[dict];
        actual = automata[siguiente];
        valido = actual.isValid;

        if (valido) {
            x = [];
            x.push(cadena.substring(0, index + 1 - sizeOfIncidence));
            x.push(cadena.substring(index - sizeOfIncidence + 1, index + 1));
            x.push(cadena.substring(index + 1, cadena.length));
            incidencias.push(x);
        }
        console.log(incidencias);
    });
    Imprimir_Incidencias();
}


function Imprimir_Incidencias() {

    div = document.getElementById('answerB');
    incidencias.forEach(function (incidencia) {
        before = document.createElement('span');
        text = document.createTextNode(incidencia[0]);
        before.appendChild(text);
        div.appendChild(before);

        highlight = document.createElement('span');
        highlight.setAttribute('class', 'incidencia');
        highlight.setAttribute('style', 'background-color: #FFFF00');
        text = document.createTextNode(incidencia[1]);
        highlight.appendChild(text);
        div.appendChild(highlight);

        after = document.createElement('span');
        text = document.createTextNode(incidencia[2]);
        after.appendChild(text);
        div.appendChild(after);

        div.appendChild(document.createElement('br'));
    })
}
