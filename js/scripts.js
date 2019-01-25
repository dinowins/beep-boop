//Business Logic

function returnRange(num) {
  var range = [];
  for (var i = 0; i < num+1; i++) {
    range.push(i);
  }
  return range;
}

function beepBoop(array) {
  var beepArray = [];
  var sorryDave = " I\'m sorry, Dave. I\'m afraid I can\'t do that. ";
  for (var i = 0; i < array.length; i++) {
    var stringOfI = array[i].toString();
    var splitString = stringOfI.split('');
    if (splitString.includes('3')) {
      beepArray.push(sorryDave);
    } else if (splitString.includes('2')) {
      beepArray.push(" Boop ");
    } else if (splitString.includes('1')) {
      beepArray.push(" Beep ");
    } else {
      beepArray.push(" " + array[i] + " ");
    }
  }
  // console.log(beepArray);
  return beepArray;
}

//UI Logic

$(function(){
  $("button").click(function() {
    var result = beepBoop(returnRange((parseInt($("#userNumber").val()))));
    $(".well").show();
    $("#result").text(result);
  });
});
