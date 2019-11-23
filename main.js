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

    let dictionary = [];
    let dictionaryValue = remDup(document.getElementById('dictionary').value);
    let chars = dictionaryValue.split('');

    dictionary.push(chars);
    return dictionary;
};

clear_table = () => {
    let table = document.getElementById("table");
    table.innerHTML = "";
};

arrayOfQs = () => {
    let data = [];
    let length = getQs(); // user defined length

    for(let i = 0; i < length; i++) {
        data.push("q" + i);
    }
    console.log(data);
    return data;
};


generate_table = () => {
    clear_table();

    let title = document.getElementById("tableTitle");
    title.innerText = getDictionary().toString();

    let rn = getQs();
    let cn = getASize();
    for (let r = 0; r < rn; r++) {
        let x = document.getElementById('table').insertRow(r);
        for (let c = 0; c < cn; c++) {
            let y = x.insertCell(c);
            y.innerHTML = "Row - " + r + " Column-" + c;
        }
    }
};
