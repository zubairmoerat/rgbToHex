let convert = document.getElementById('btn');
let inputR = document.querySelector('[data-input1]');
let inputG = document.querySelector('[data-input2]');
let inputB = document.querySelector('[data-input3]');
let output = document.querySelector('[data-output]');

function rgbToHex(input1, input2, input3) {
    let hexidecimalCode = '#' + ((1 << 24) + (input1 << 16) + (input2 << 8) + input3).toString(16).slice(1);
    return hexidecimalCode
}

convert.addEventListener('click', function(){
    let input1 = parseInt(inputR.value);
    let input2 = parseInt(inputG.value);
    let input3 = parseInt(inputB.value);

    let Hex = rgbToHex(input1, input2, input3)

    output.textContent = Hex
});