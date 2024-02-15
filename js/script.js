/*Block Celcius*/
celciusfahrenheit = () =>{
    let input = document.getElementById('input').value;
    let hasil =input * (9/5) +32;
    document.getElementById('hasil').value =hasil;
}

/*Block Fahrenheit */
fahrenheitcelcius = () =>{
    let input = document.getElementById('input2').value;
    let hasil =(input-32) / (9/5);
    document.getElementById('hasil2').value =hasil;
}

/*Block celcius2 */
celciuskelvin = () =>{
    let input = document.getElementById('input3').value;
    let hasil =(input-273) + (546.15);
    document.getElementById('hasil3').value =hasil;
}

/*Block Kelvin */
kelvincelcius = () =>{
    let input = document.getElementById('input4').value;
    let hasil =(input-273.15) * 1;
    document.getElementById('hasil4').value =hasil;
}
