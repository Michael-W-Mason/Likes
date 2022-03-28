function addLike(likeNum){
    let numToInc = document.querySelector("#likenum" + likeNum).innerHTML;
    numToInc++;
    document.querySelector("#likenum" + likeNum).innerHTML = numToInc;
}