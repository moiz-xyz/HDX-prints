function onePlus(){
    let discount = 20 +"%";
    let salestax = 13 +"%";
    let del = 20+"$";
    
 const button = document.getElementById("add");
 let add = Number(button.innerHTML) +1;
 button.innerHTML= add
 button.style.display ="block";
let sumadd = document.getElementById("price") ;
let priceAdd = add *30;
sumadd.innerHTML = priceAdd.toFixed(2) + ("$");
let bill_paid = add * 30 - 0.20 + 0.13 +20;
let billpaid = bill_paid.toFixed(2);
document.getElementById("totlabill").innerHTML =  "Total bill "+priceAdd.toFixed(2) + ("$");
document.getElementById("tshirts").innerHTML = "Total shirts "+add;
// document.getElementById("Discount").innerHTML = "Discount " +discount;
document.getElementById("tax").innerHTML = "Sales Tax " + salestax;
document.getElementById("del").innerHTML = "Delivery charges " +del ;
document.getElementById("paid").innerHTML = "Bill to paid " +billpaid + ("$");
}
function displayBill(){
    let bill = document.getElementById("bill");
    bill.style.display ="block";
}
function hide (){
    bill.style.display = "none"
}


function toggleSlider() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('open');  // This will toggle the 'open' class, which controls the slide-in/out effect
}
