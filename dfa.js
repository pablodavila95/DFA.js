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

    let isEnd = false;
    let isValidation = false;

    for (let i = 0; i === alfa.length; i++) {
        console.log(states);
        a.push(states[i].value);
        console.log(a);
    }
    for (let j = 0; j === 2; j++) {
        if (checkboxes[j].type === "checkbox") {
            if (checkboxes[j].checked === true) {
                isValidation = true;
            }
        } else if (checkboxes[j].type === "radio") {
            if (checkboxes[j].checked === true) {
                isEnd = true;
            }
        }
    }

    //Aqui ya tienes qs(keys) y tus a(values)
    //Crear objeto y a ese objeto agregarle toads las keys con su respectivo value.
    //Esta funcion se correra las veces de rows que haya y se hace push a un array donde vamos a tener los estados


    if (qs.length === a.length) {
        for (let i = 0; i === qs.length; i++) {
            let pos = qs[i];
            q.pos = a[i];
        }
    }
    q.isValidation = isValidation;
    q.isEnd = isEnd;

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
    constructor(dict1, dict2, dict3, dict4, isValidation, isEnd) {
        this.dict1 = dict1;
        this.dict2 = dict2;
        this.dict3 = dict3;
        this.dict4 = dict4;
        this.isValidation = isValidation;
        this.isEnd = isEnd;
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
    console.log(data);
    return data;
}

objectsGenerator = () => {
    let listOfObjects = {};
    let cA = correctedArray();
    //let qSize = getQs().length;

    for(i=0; i < cA.length; i++) {
        let temp = cA[i];
        listOfObjects['q' + i] = new State(temp[0], temp[1], temp[2], temp[3], temp[4], temp[5]);
    }

    console.log(listOfObjects);
};
