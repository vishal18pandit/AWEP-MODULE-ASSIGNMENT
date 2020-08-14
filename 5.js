
var likecounter = 1;
var commentcounter = 1;
function commenthere() {
    const newele = document.createElement("div");
    newele.textContent = "user comment..." + commentcounter;
    newele.style.background = "yellow";
    newele.style.color = "red";
    newele.style.margin = "7px";

    const commentbox = document.querySelector("#commentbox");
    commentbox.appendChild(newele);
    commentcounter++;

}
function likehere() {
    likecounter++;
    let btnele = document.querySelector("#btid");
    btnele.innerHTML = "like" + likecounter;
}