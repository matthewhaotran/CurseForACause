let balance = 0.00;

$("#currentBalance").append("$" + balance.toFixed(2));

$("#addToJar").click(function(){
    balance += 0.25;
    $("#currentBalance").text("$" + balance.toFixed(2));
});

$("#donate").click(function(){
    alert('Account is set up to donate!')
});