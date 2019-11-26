sisi = () => {
    let automata = Object.entries(objectsGenerator());
    for (i=0; i < 4; i++) {
        if (automata[i][1].isStart) {
            console.log(automata[i]);
        }
    }
};

var radios = document.getElementsByName("cheks");
                    radios.forEach(element => {
                        if (element.checked) {
                           var initial = element.value;
                        }
                        console.log(initial);
                    });


yes = () => {
    let automata = Object.entries(objectsGenerator());
    Object.entries(automata).forEach(function(elements){
      
        var columns = {};
        
        
    })
};
