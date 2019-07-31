var elemReg = document.querySelector(".reg");
 var textinputElem = document.querySelector(".regDigits");
var ListElem = document.querySelector('.list')
var reDigitsElem = document.querySelector('.regNumbers')
var addtoListlElem = document.querySelector('.getList')
var FilterElem = document.querySelector('.filter')
var regFinalElem = document.querySelector('.regFinal')
var textBtnElem = document.querySelector('.textBtnClicked')
var addbtnElem = document.querySelector('.addbtn')
var showbtnElem = document.querySelector('.showbtn')

var rd1 = document.getElementById('text'); // displaying message
var rb = document.getElementById('reg');
var rb2 = document.getElementById('Showbtn');
function textBtnClicked (){
    // alert("me")
    console.log(textinputElem.value)

    // var regTag = document.querySelector("input[name = 'myRadio']:checked");
//  console.log(regTag.value)
 console.log(showbtnElem.value)
//     rd1.innerHTML = reDigits.value;
//    rb.innerHTML = regi.value;
// rb2.innerHTML = getlist.value;
}

// function addbtn(){
//     alert('me')
// }
addbtnElem.addEventListener('click', textBtnClicked);