var elemReg = document.querySelector(".reg");
 var textinputElem = document.querySelector(".regDigits");
var ListElem = document.querySelector('.list');
var reDigitsElem = document.querySelector('.regNumbers');
var addtoListlElem = document.querySelector('.getList');
var FilterElem = document.querySelector('.filter');
var regFinalElem = document.querySelector('.regFinal');
var textBtnElem = document.querySelector('.textBtnClicked');
var addbtnElem = document.querySelector('.addbtn');
var showbtnElem = document.querySelector('.showbtn');
var display = document.querySelector(".display");
 var era = document.querySelector('errorText');


 var myfactory = FactoryReg()

function textBtnClicked() {
   var number = document.createElement("li");
   myfactory.addReg(textinputElem.value)
   number.textContent = textinputElem.value;
   display.appendChild(number);
}


function showbtnClicked() {
var townTag = document.querySelector("input[name = 'myRadio']:checked");
   var list = myfactory.filter(townTag.value)
   for (let i = 0; i < list.length; i++) {
      const element = list[i];
      var number = document.createElement("li");
      number.textContent = element;
      display.appendChild(number);
   }

  
}




addbtnElem.addEventListener('click', textBtnClicked);
showbtnElem.addEventListener('click', showbtnClicked);