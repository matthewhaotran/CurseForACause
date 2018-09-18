let balance = 0.00;

$.get('/getbalance', function( data ) {
    balance = parseFloat(data);
    $("#currentBalance").text("$" + balance.toFixed(2));
  });

$("#addToJar").click(function(){
    var text= "hi";
    $.post("/addbalance", {suggest: text}, function(result){
        alert(result);
    });
});

$("#donate").click(function(){
    const data = 10;
    $.get('/getbalance', data, function( data ) {
        alert(data);
      });
});

