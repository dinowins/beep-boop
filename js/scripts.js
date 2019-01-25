//Business Logic

function returnRange(num) {
  var range = [];
  for (var i = 0; i < num+1; i++) {
    range.push(i);
    // console.log(i);
  }
  return range;
}

//UI Logic

$(function(){
  $("button").click(function() {
    var result = returnRange(parseInt($("#userNumber").val()));
    console.log(result);
    $("#result").text(result);
  });
});
