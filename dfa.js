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
    constructor(dict1, dict2, dict3, dict4, isValid, isStart) {
        this.dict1 = dict1;
        this.dict2 = dict2;
        this.dict3 = dict3;
        this.dict4 = dict4;
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


//Not working
/*
In console if you do ->
var a = objectsGenerator();
a.q0.hasOwnProperty('isValid');
-> you get the bool value of that q. I just need to find a way to iterate through that since it is an object inside an object.
 */
getStart = () => {
    let automata = objectsGenerator();
    console.log(automata.q0.hasOwnProperty('isValid'));
    console.log(automata.q1.hasOwnProperty('isValid'));
    console.log(automata.q2.hasOwnProperty('isValid'));
    console.log(automata.q3.hasOwnProperty('isValid'));
    console.log(automata.q4.hasOwnProperty('isValid'));
    // ^^^
    // that works, too......

    //Ya teniendo este metodo, podemos accesar a cualquier propiedad de cada estado
    //Incluso podriamos cambiarlo a que tome como parametro la propiedad que vamos a leer..

};
