
function P_generate(leng, low, up, integer, symm, displa, Error ){
    const Lower = "abcdefghijklmnopqrstuvwxyz"
    const Upper = "ABCDEFHIJKLMNOPQRSTUVWXYZ"
    const Number = "0123456789"
    const sym = "!@#$%&-_"

    let password = "";
    let total="";

    
    if(low == false && up==false && integer == false && symm == false){
        displa.textContent = ``
        Error.textContent = `Please Select any one options`
    }
    else{
        Error.textContent = ``
        total += low == true ? Lower : "";
        total += up == true ? Upper : "";
        total += integer == true ? Number : "";
        total += symm == true ? sym : "";
    
         for(let i =0; i<leng; i++){
            let Ran= Math.trunc((Math.random()*total.length + 1));
            password += total.charAt(Ran);
         }
         displa.textContent = `Password generated is: ${password}`
    }



}



function Submit(){
    let length = document.getElementById("length").value;
    let L_case = document.getElementById("lowercase");
    let U_case = document.getElementById("uppercase");
    let num = document.getElementById("numbers");
    let symbol = document.getElementById("symbols");
    let display = document.getElementById("display");
    let displayError = document.getElementById("displayError");
    
    passout = P_generate(length, L_case.checked, U_case.checked, num.checked, symbol.checked, display, displayError)
    
    

}