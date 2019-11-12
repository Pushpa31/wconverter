var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

// now add listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

// taking initial value
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function myResult(){

	inputTypeValue = inputType.value;
	resultTypeValue = resultType.value;


// now compare the input and resultType value and add formula

	if(inputTypeValue === "Kg" && resultTypeValue==="Pound"){

		result.value = Number(input.value) * 2.205;
	}else if(inputTypeValue === "Kg" && resultTypeValue==="Gram"){

		result.value = Number(input.value) * 1000;

	}else if(inputTypeValue === "Kg" && resultTypeValue==="Kg"){
		result.value = input.value
	}



	if(inputTypeValue === "Pound" && resultTypeValue==="Kg"){
		result.value = Number(input.value) * (1/2.205);
	}else if(inputTypeValue === "Pound" && resultTypeValue==="Gram"){ 
		result.value = Number(input.value) * 453.5 ;
	}else if(inputTypeValue === "Pound" && resultTypeValue==="Pound"){
		result.value = input.value
	}

	if(inputTypeValue === "Gram" && resultTypeValue==="Kg"){
		result.value = Number(input.value) * 0.001;
	}else if(inputTypeValue === "Gram" && resultTypeValue==="Pound"){
		result.value = Number(input.value) * 0.0022;
	}else if(inputTypeValue === "Gram" && resultTypeValue==="Gram"){
		result.value = input.value
	}
	





}
