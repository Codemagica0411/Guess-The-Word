playerunouser = localStorage.getItem("playerunouser");
playerdosuser = localStorage.getItem("playerdosuser");
question_turn = "player1";
answer_turn = "player2";
console.log(playerunouser);
player_unoscore = 0;
player_dosscore = 0;

document.getElementById("playerunoname").innerHTML =  playerunouser + ":";
document.getElementById("playerdosname").innerHTML = playerdosuser + ":";

document.getElementById("player1score").innerHTML = player_unoscore;
document.getElementById("player2score").innerHTML = player_dosscore;

document.getElementById("playerQ").innerHTML = "Question Turn - " + playerunouser;
document.getElementById("playerAns").innerHTML = "Answer Turn - " + playerdosuser;

function Send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in LowerCase" + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);
length_divide_2 = Math.floor(word.length/2);
charAt2 = word.charAt(length_divide_2);
console.log(charAt2);

length_minus_1 = word.length - 1;
charAt3 = word.charAt(length_minus_1);
console.log(charAt3);

remove_one = word.replace(charAt1,"_");
remove_two = remove_one.replace(charAt2,"_");
remove_three = remove_two.replace(charAt3,"_");
console.log(remove_three);

question_word = "<h4 id ='word_display'> Q."+remove_three + "</h4>";
input_box = "<br> Answer: <input type='text' id = 'input_check_box'> ";
check_button = "<br> <br> <button class= 'btn btn-info' onclick='Check()'>Check</button>";
row = question_word + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}
function Check() {
get_answer = document.getElementById("input_check_box").value;
answer = get_answer.toLowerCase();
console.log("answer in lower case -" + answer);
if(answer == word) {
    if(answer_turn == "player1") {
       player_unoscore = player_unoscore +1;
       document.getElementById("player1score").innerHTML = player_unoscore;
    }
    else {
     player_dosscore = player_dosscore +1;
     document.getElementById("player2score").innerHTML = player_dosscore;  
    }
}
if(question_turn == "player1") {
    question_turn = "player2"
    document.getElementById("playerQ").innerHTML = "Question_turn - " + playerdosuser;
}
else {
    question_turn = "player1"
    document.getElementById("playerQ").innerHTML = "Question_turn - " + playerunouser;
}
if(answer_turn == "player1") {
    answer_turn = "player2"
    document.getElementById("playerAns").innerHTML = "Answer_turn - " + playerdosuser;
}
else {
    answer_turn = "player1"
    document.getElementById("playerAns").innerHTML = "Answer_turn - " + playerunouser;
}

} 