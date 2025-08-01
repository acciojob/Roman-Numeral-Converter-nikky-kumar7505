function convertToRoman(num) {
  	const obj = [
       ['M', 1000],
        ['D', 500],
        ['C', 100],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1]
    ]
	let result = ''

	for(let i =0; i<obj.length; i++ ){
		while(num>obj[i][1]){
			result = result + obj[i][0];
			num = num - obj[i][1]
	}
	}

	return result;
	

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
