getStart = () => {
    let automata = objectsGenerator();
    for(let i in automata) {
        if (automata[i].isStart) {
            return automata[i];
        }
    }
};
