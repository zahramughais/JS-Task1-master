      //Get element by id
    const box = document.getElementById("box-1");
    box.addEventListener("click", function(event){
        event.target.style.backgroundColor ="pink";
    });
      //Get element by className
    const boxes = document.getElementsByClassName("box-to-select");
      //Iterate boxes through a For of loop to add functionallity
    for (const groupOne of boxes) {
        groupOne.addEventListener("click", function(event){
            event.target.style.backgroundColor = "violet";
        });
    }
      //Get Element with qeurySelector
    const queryBox = document.querySelector("#box-5");
    queryBox.addEventListener("click", function(event){
        event.target.style.backgroundColor ="lightBlue";
    });
      //Get element by querySelectorAll
    const queryBoxes = document.querySelectorAll(".box-to-select-2");
      //Iterate boxes through a For of loop to add functionallity
    for (const groupTwo of queryBoxes) {
        groupTwo.addEventListener("click", function(event){
            event.target.style.backgroundColor = "lightGreen";
        });
    }