function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
	let str = ''

	while(num>=1000){
		str = str+"M"
		num = num - 1000;
	}

	if(num>=900){
		str = str+"CM"
		num = num - 900
	}

	if(num>=500){
		str = str + "D";
		num = num - 500
	}

	if(num>=400){
		str = str + "CD";
		num = num - 400
	}

	if(num>=100){
		str = str + "C";
		num = num - 100
	}
	if(num>=90){
		str = str + "XC";
		num = num - 90
	}
	if(num>=50){
		str = str + "L";
		num = num - 50
	}

	if(num>=40){
		str = str + "XL";
		num = num - 40
	}

	if(num>=10){
		str = str + "X";
		num = num - 10
	}
	if(num>=9){
		str = str+"IX"
		num = num - 9
	}

	while(num>=1){
			str = str + "I"
			num = num -1
	}
	
	return str;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
