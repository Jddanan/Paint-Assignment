var canvas = document.getElementById("canvas")
var newDiv;
function draw() {
    newDiv = document.createElement("div");
    canvas.appendChild(newDiv);
    newDiv.style.backgroundColor = "black";
    newDiv.style.width = "4px";
    newDiv.style.height = "4px";
    newDiv.style.borderRadius = "50%";
    newDiv.style.position = "absolute";
    newDiv.style.left = event.pageX + "px";
    newDiv.style.top = event.pageY + "px";

}
canvas.addEventListener("mousedown", function () {
    canvas.addEventListener("mousemove", draw)
});

canvas.addEventListener("click",function(){
    canvas.removeEventListener("mousemove",draw)
})