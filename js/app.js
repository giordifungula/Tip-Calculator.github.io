//hide the tip words and amount on load;
// double check document.getElementById("totalTip").style.display == "none";
//----- check this on click as used the same div id document.getElementById("each").style.display == "none";
//hide("totalTip");
//functions


//clicking on the button calls the custom function
document.getElementById("calculate").onclick = function(){calculateTip();  };

//calculateTip function being called 
function calculateTip(){
      //this will store the data of the input ||  the values of input 
    var billAmt = document.getElementById("billAmount").value;
    var service = document.getElementById("serviceQuality").value;
    var totalPeople = document.getElementById("totalPeople").value;
    
//--This is a validation 
    if (billAmt == "" || billAmt < 1 || service == 0) {
      return alert("Please Enter some values to perform the calculation");
    }
    //check to see if the input is  empty or less or equal to 1
    if (totalPeople <= 1 || totalPeople === ""){
        totalPeople = 1; // make the value equal to 1 * also becuase we are diving this down below
       
       document.getElementById("each").style.display = "none";
    } else {
    document.getElementById("each").style.display = "block";
}
    
    // Calculating now
    var total = (billAmt * service) / totalPeople;
      total = Math.round(total * 100) / 100;
      total = total.toFixed(2);
  
    
    //display the tip
    var displayTip = document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    
    if (displayTip) {
        var afterEat = document.getElementById("afterEat").style.display = "block";
        document.getElementById("afterTip").onclick = function(){
            var randomNum = Math.round(Math.random() * 5);
                if (randomNum == 0 || randomNum == 1){
                    randomNum = 1;
                    alert(randomNum + " is your number" + ", you get a sweet.");return
                } else if (randomNum === 2) {
                    alert(randomNum + " is your number ,you get a book of chocolates.");return
                }else if (randomNum === 3) {
                    alert(randomNum + " is your number ,you get a free movie ticket.");return
                } else if (randomNum === 4) {
                    alert(randomNum + " is your number ,you get a R200 voucher.");return
                } else if (randomNum === 5) {
                    alert(randomNum + " is your number, you get Coupon code.");return
                }
            //alert(randomNum);
        };
    }
}