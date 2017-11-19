var digits = "";
// i, j,k 
	for(var i = 1; i < 6; i++){
		digits += i + " ";
	}
console.log(digits);

digits = "";

	for( i = 5; i > 0; i--){
		digits += i + " ";
	}
console.log(digits);

var nums = [5, -6, 9, 1, -2, 4, 8, -3]
	,result = "";
	;

	for(i = 0; i < nums.length; i++){
		result += nums[i]+ " ";
	}
console.log(result);
result = "";

	for(i = 0; i < nums.length; i++){
		if(nums[i]<0){
		result += nums[i]+ " ";
		}

	}
	console.log("Отрицательние значения массива", result);