let balance = 0.00;

$.get('/getbalance', function( data ) {
    balance = parseFloat(data);
    $("#currentBalance").text(balance.toFixed(2));
  });

$("#addToJar").click(function(){
    $.get('/addbalance', function( data ) {
        balance = parseFloat(data);
        $("#currentBalance").text(balance.toFixed(2));
      });
});
