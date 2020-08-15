let likeMe = function (btnElement) {
    console.log(btnElement);



    let likeCountStr = btnElement.children[0].innerHTML;


    let likeCount = parseInt(likeCountStr);

    likeCount++;

    btnElement.children[0].innerHTML = likeCount;
};




let commentHere = function (btnElementComment) {
    const commentBox =
        btnElementComment.parentElement.parentElement.parentElement
            .children[2];

    let newElement = commentBox.children[0].cloneNode(true);


    const inputElem =
        btnElementComment.parentElement.parentElement.children[1].children[0];

    newElement.children[0].innerHTML = inputElem.value;


    inputElem.value = "";

    commentBox.insertBefore(newElement, commentBox.firstChild);
};




let deleteComment = function (btnElementDel) {
    console.log(btnElementDel.parentElement.parentElement);

    btnElementDel.parentElement.parentElement.remove();
};