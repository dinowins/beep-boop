//Business Logic

//Spec 1

// function returnRange(num) {
//   var range = [];
//   for (var i = 0; i < num+1; i++) {
//     range.push(" " + i + " ");
//     // console.log(i);
//   }
//   return range;
// }

//Business Logic

function returnRange(num) {
  var range = [];
  for (var i = 0; i < num+1; i++) {
    range.push(i);
    console.log(range[i]);
  }
  return range;
}

function beepBoop(array) {
  var beepArray = [];
  for (var i = 0; i < array.length; i++) {
    var stringOfI = array[i].toString();
    var splitString = stringOfI.split('');
    if (splitString.includes('2')) {
      beepArray.push("Boop");
      // console.log("Boop");
    } else if (splitString.includes('1')) {
      beepArray.push("Beep");
      // console.log("Beep");
    } else {
      beepArray.push(array[i]);
    }
    // console.log(stringOfI);
    // console.log(splitString);
  }
  console.log(beepArray);
  return beepArray;
}


//UI Logic

$(function(){
  $("button").click(function() {
    var result = beepBoop(returnRange((parseInt($("#userNumber").val()))));
    console.log(result);
    $("#result").text(result);
  });
});
