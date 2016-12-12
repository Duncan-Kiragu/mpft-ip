//business logic
//.....................................
//players constructor
function Player() {
    this.playerScore = 0;
    this.playerName = 0;
}
var turnScore = 0;
var player1 = new Player();
var player2 = new Player();
//function to randomize  numbers
var randomNum = function (array) {
    var result = 1 + Math.floor(Math.random() * 6);
    return result;
};
//function to change players
function changeFromTo(a, b) {
    $("#roll" + a.toString()).addClass("disabled");
    $("#hold" + a.toString()).addClass("disabled");
    $("#roll" + b.toString()).removeClass("disabled");
    $("#hold" + b.toString()).removeClass("disabled");
};
//function to roll dice
function rollDie(user1, user2) {
    var roll = randomNum();
    if (roll !== 1) {
        turnScore += roll;
    }
    else if (roll === 1) {
        turnScore = 0;
        if (user2 === player2) {
            changeFromTo(1, 2);
        }
        else if (user2 === player1) {
            changeFromTo(2, 1);
        }
    };
};
//function to hold the dice
function holdDie(user1, user2) {
    user1.playerScore += turnScore;
    user1.turnScore = 0;
};
//user interface logic
//.....................................
$(document).ready(function () {
    $(".player1score").text("0");
    $(".player2score").text("0");
    $(".turn-score").text(turnScore);
    $("#player1").submit(function () {
        event.preventDefault();
        player1.playerName = $(".player1").val().toUpperCase();
        $(".player1name").text(player1.playerName);
        $("#player1").hide();
    });
    $("#player2").submit(function () {
        event.preventDefault();
        player2.playerName = $(".player2").val().toUpperCase();
        $(".player2name").text(player2.playerName);
        $("#player2").hide();
    });
    //disable player 2 buttons
    $("#roll2").addClass("disabled");
    $("#hold2").addClass("disabled");
    //roll and hold clicks
    $("#roll1").click(function () {
        rollDie(player1, player2);
        $(".turn-score").text(turnScore);
    });
    $("#hold1").click(function () {
        holdDie(player1, player2);
        $(".player1score").text(player1.playerScore);
        turnScore = 0;
        $(".turn-score").text(turnScore);
        changeFromTo(1, 2);
    });
    //player 2 roll and hold
    $("#roll2").click(function () {
        rollDie(player2, player1);
        $(".turn-score").text(turnScore);
    });
    $("#hold2").click(function () {
        holdDie(player2, player1);
        $(".player2score").text(player2.playerScore);
        turnScore = 0;
        $(".turn-score").text(turnScore);
        changeFromTo(2, 1);
    });
});