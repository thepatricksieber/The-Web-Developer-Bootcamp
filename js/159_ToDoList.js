window.setTimeout(function() {
    // put all of your JS code from the lecture here

    var array = []
    var answer = ""

    while(true) {
        answer = prompt("What do you want to do?")

        if(answer === "new") {
            var value = prompt("enter new to do");
            array.push(value);
            console.log(value + " added to the list!");
        } else if (answer === "list") {
            console.log("********");
            array.forEach(function(el, i){
                console.log(i + ": " + el);                
            });
            console.log("********");
        } else if (answer === "delete") {
            var index = prompt("Please enter index");
            array.splice(index, 1);            
            console.log("Todo from the list")
        } else if (answer === "quit") {
            return 
        }
    }

    console.log("You quit the App")

  }, 500);