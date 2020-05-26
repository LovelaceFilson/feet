    var button, foot, inches, calcResult, calcCentiMeter, calcConvertToFeet;

    button = document.querySelector('.btn-default')

    button.onclick = function conversionFxn(){
        foot = document.querySelector('.feetInputBox')
        inches = document.querySelector('.inchesInputBox')
        calcResult = document.querySelector('.calcInputValues')

        
        foot = +foot.value; 

        inches = +inches.value; 
        calcConvertToFeet = foot * 30.48 + inches * 2.54;
        calcResult.textContent = calcConvertToFeet + ' cm';

    };