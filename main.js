var elForm = document.querySelector(".form");
var inp = document.querySelector(".input");
var out = document.querySelector(".output");


var elFormtwoo = document.querySelector(".formtwoo");
var inptwoo = document.querySelector(".inputtwoo");
var elselect = document.querySelector(".select");
 var outtwoo = document.querySelector(".natija");
 

 elForm.addEventListener("submit", function (evt) {
   evt.preventDefault();
   
   
   var  inpV = Number(inp.value);
 
console.log(typeof(inpV));
   if ( inpV % 3 == 0   &&  inpV % 5 == 0 ){
    out.textContent = "fizzbaz";
    
  }
else if (inpV % 5 == 0 ){
  out.textContent = "buzz";
}

else if (inpV % 3 == 0 ){
  out.textContent = "fizz";
}
else{
  out.textContent = "Dang !";
}

inp.value  = ""

});



elFormtwoo.addEventListener("submit", function (evt) {
  // debugger
  evt.preventDefault()
  elsel = Number (elselect.value);
  inptq = Number (inptwoo.value);
console.log(inptq);
console.log(elsel);

var aaa = inptq * elsel ;
outtwoo.textContent = `${aaa}`;
inptwoo.value= ""
} )