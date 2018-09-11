let balance = 0.00;

$("h3").append("$" + balance.toFixed(2));

$("#addToJar").click(function(){
    balance += 0.25;
    $("h3").text("$" + balance.toFixed(2));
});