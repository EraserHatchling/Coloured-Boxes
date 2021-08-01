var square = document.querySelectorAll(".square");
var btnshowAll = document.querySelector("#showAll");
var btnhideAll = document.querySelector("#hideAll");
var search = document.querySelector("#filter")


btnshowAll.addEventListener("click", function() {
    square.forEach(function(element){
        element.style.display = "block"
    });
});

btnhideAll.addEventListener("click", function(){
    square.forEach(function(element){
        element.style.display= "none"
    });
});

search.addEventListener("keyup", function(){
    var colorName = search.value;
    square.forEach(function(color){
        if (color.classList.contains(colorName) ) {
            color.style.display="block";
        }
        else {
            color.style.display="none";
        }
    })
})

square.forEach(function(element){
    element.addEventListener("mouseover", function(){
        element.style.width = "250px"
        element.style.height = "200px"
    })

    element.addEventListener("mouseout", function(){
        element.style.width = "230px"
        element.style.height = "180px"
    })
})