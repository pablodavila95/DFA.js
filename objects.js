class State {
    constructor(dict1, dict2, dict3, dict4, isValidation, isEnd) {
        this.dict1 = null;
        this.dict2 = null;
        this.dict3 = null;
        this.dict4 = null;
        this.isValidation = false;
        this.isEnd = false;
    }
}


let a = getData();
let temp = a[0];
if (temp.length < 6) {
    for (let i = 0; i === 6 - temp.length; i++){
        temp.splice(temp.length - 2, 0, null);
    }
}

let q1 = new State(temp[0], temp[1], temp[2], temp[3], temp[4], temp[5]);
