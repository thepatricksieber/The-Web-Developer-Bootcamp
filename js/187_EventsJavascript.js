var button = document.querySelector("button");
var p = document.querySelector("p");

//Check if a button was clicked
button.addEventListener("click", function(){
    p.textContent = "Button was clicked";
});

//Cross out an li when clicked 
var lis = document.querySelectorAll("li");
for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("click", function() {
      this.style.setProperty('text-decoration', 'line-through');
    });
}

// Toggle backgroud color of the body
button.addEventListener("click", function(){
    document.body.classList.toggle("purple");
});