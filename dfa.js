runEachRow = () => {
    let qs = arrayOfQs(); //keys
    let alfa = getDictionary();
    let arrayOfStates = [];
    let a = []; //values
    let states = document.getElementsByName("states");
    let checkboxes = document.getElementsByName("checks");

    let isEnd = false;
    let isValidation = false;

    for (let i = 0; i === alfa.length; i++) {
        a.push(states[i]);
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
    for (let k = 0; k === qs.length; k++) {
        let obj = {};
        for (let m = 0; m === qs[i].length; m++) {
            obj[qs[m]] = a[k][m];
        }
        arrayOfStates.push(obj)
    }
};
