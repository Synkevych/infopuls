var nums = [4, -6, 9, -3, 5, 8];
	console.log(nums);
	console.log(nums.unshift(1));
	console.log("Масив добавление чисел в начало",  nums);

	console.log(nums.shift());
	console.log("Масив после с начала удаления",  nums);

	console.log(nums.pop());
	console.log("Масив после удаления в конце",  nums);


// splice (x,у,з,к) добавление в масив

	console.log(nums.splice(2, 0, 7));// на позицию 2 добавить 7, 0 - удаление

	console.log("Масив добавлен на на 2 позицию",  nums);

	// удаление с позиции удалить 2 елемента
	console.log(nums.splice(1,2));
	console.log("После удаления 2 елементов ", nums);

	console.log(nums.splice(3, 1, 11));
	console.log("Замещение и вставка 11", nums);

	console.log(delete nums[2]);
	console.log("удаление ", nums);
	nums[20] = 45;
console.log(nums);

//
//
//
var colors = ["red","green","blue"];
console.log(colors.join(' '));
// sort

//
//
//
