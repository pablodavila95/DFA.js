runEachRow = () => {
    let qs = arrayOfQs(); //keys
    let alfa = getDictionary();
    let a = []; //values
    let states = document.getElementsByName("states");
    let checkboxes = document.getElementsByName("checks");
    let q = {}; //mi estado

    let isEnd = false;
    let isValidation = false;

    for (let i = 0; i === alfa.length; i++) {
        a.push(states[i].value);
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

    for (let i=0; i === n; i++) {
        array[i] = runEachRow();
    }
    return array;
};
