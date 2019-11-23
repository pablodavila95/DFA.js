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


function createTable() {
    let myQs = arrayOfQs();

    let title = document.getElementById("tableTitle");
    title.innerText = getDictionary().toString();

    let rn = getQs();
    let cn = getASize();

    for (let r = 0; r < rn; r++) {
        let x = document.getElementById('table').insertRow(r);

        let rad = document.createElement("INPUT");
        rad.setAttribute("type", "radio");
        rad.setAttribute("id", "radio" + r);
        let chk = document.createElement("INPUT");
        chk.setAttribute("id", "check" + r);
        chk.setAttribute("type", "checkbox");

        x.insertCell(0).appendChild(rad);
        x.insertCell(0).appendChild(chk);


        for (let c = 0; c < cn; c++) {
            let element = document.createElement("select");

            element.setAttribute("id", "s" + c);

            for (let i = 0; i < myQs.length; i++) {
                let opt = myQs[i];
                let z = document.createElement("option");
                z.textContent = opt;
                z.id = opt;

                element.appendChild(z);
            }
            x.insertCell(c).appendChild(element)
        }
    }
}



