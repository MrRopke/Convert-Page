let weightField: HTMLInputElement = <HTMLInputElement> document.getElementById("weight");
let resultField: HTMLInputElement = <HTMLInputElement> document.getElementById("result");

document.getElementById('otg').onclick = 
function ouncesToGram(){
    let ounces = parseFloat(weightField.value.replace(",", "."));

    //m(g) = m(oz) × 28.3495231    
    let gram = ounces * 28.3495231;
    resultField.value = gram + " Gram";
};

document.getElementById('gto').onclick = 
function gramToOunces(){
    
    let gram = parseFloat(weightField.value.replace(",", "."));

    //m(oz) = m(g) / 28.3495231
    let ounces = gram / 28.3495231;
    resultField.value = ounces + " Ounces";
};