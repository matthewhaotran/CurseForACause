let balance = 0.00;

$.get('/getbalance', function( data ) {
    balance = parseFloat(data);
    $("#currentBalance").text("$" + balance.toFixed(2));
  });

$("#addToJar").click(function(){
    balance += 0.25;
    $("#currentBalance").text("$" + balance.toFixed(2));
});

$("#donate").click(function(){
    $.get('/getbalance', function( data ) {
        $("#currentBalance").text("$" + data);
      });
});

