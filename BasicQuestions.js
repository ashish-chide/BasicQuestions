//1. How to find the maximum occurring character in given String
// let str = "aaashish"
// let maxKey = ''
// let charHash = {}
// for (let i =0 ; i < str.length ; i++){
//   let char = str[i]
//   if(!charHash[char]){
//     charHash[char] = 0;
//   }
//   charHash[char]++;
//   if (maxKey == '' || charHash[char] > charHash[maxKey] ) {
//     maxKey = char
//   }
// }
    
// console.log(maxKey)
// console.log(charHash)

// function getMax(str) {
//  let max = 0,
//   maxChar = '';
//   str.split('').forEach(function(char){
//     if(str.split(char).length > max) {
//         max = str.split(char).length;
//         console.log(str.split(char))
//         maxChar = char;
//      }
//   });
//   return maxChar;
// };
// console.log(getMax('aaaccccac'))


// *******************************************************************


//2. How to remove characters from the first String which are present in the second String
// let first = 'quick brown fox'
// let second = 'bfq'

// let res = first.split('').filter((curr) => {
//    let temp=true;
//     second.split('').forEach((el) => {
//     if(el === curr){
//      temp =false;
//     }
//   })
//   return temp;
    
// })
// console.log(res.join(''))

// *******************************************************************


//3. How to check if two strings are rotations of each other
// not for repeating letter in word 
// let first= "abcabcd"
// let second = "abcdabc"

// if (first.length === second.length){
//   if(first !== second){
//     let rotateBy = second.indexOf(first.charAt(0));
//     let firstArr = first.split('')
//     firstArr = firstArr.concat(firstArr.splice(0,second.length - rotateBy))
//     if (firstArr.join('') === second)
//       console.log("In rotation by " + rotateBy)
//     else
//       console.log("not in roatation")
//   }
// }
// for repeating words

// let first= "ate"
// let second = "eat"

// if (first.length === second.length){
//   if(first !== second){
//     let con = first + second;
//     console.log(con)
//     if (con.includes(first)){
//       console.log("In rotation")
//     }
//      else
//       console.log("Not in roatation")
//   }
// }

// *******************************************************************

//4. How to check if two given String is the anagram of each other

// Test anagram -
// the Morse code – Here come dots
// statue of liberty – built to stay free
// I think therefore I am – I fear to think I’m here
// monasteries – Amen stories
// meal for one – for me alone
// considerate – care is noted
// astronomers – no more stars
// signature – a true sign
// school student – tends to slouch
// saintliness – least in sins
// asteroid threats – disaster to earth
// a gentleman – elegant man


// let first = "asteroid threats"
// firstArr = first.split("").sort().join('').trim().toLowerCase()
// let second = "disaster to earth"
// secondArr = second.split("").sort().join('').trim().toLowerCase()
// if(firstArr === secondArr){
// 	console.log("Anagram")
// }
// else console.log("Not An Anagram ")

// const words = ['map', 'pam', 'art', 'how', 'rat', 'tar', 'who', 'shoop'];
// let anagram = {}
// words.forEach(tag => {
// 	let sorted = tag.split("").sort().join('').trim().toLowerCase()
// 	if(anagram[sorted]){
// 		return anagram[sorted].push(tag) 
// 	}
// 	anagram[sorted] = [tag]
// })
// console.log(anagram)

// *******************************************************************


//5. How do you convert a Roman numeral String to Integer
// int to roman 
// let roman = "";
// let num = 3999
// let rules = {M:1000,CM:900,D:500,CD:400,
// 						 C:100,XC:90,L:50,XL:40,X:10,
// 						 IX:9,V:5,IV:4,I:1}
// for (i in rules){
// 	while (num >= rules[i]){
// 		roman += i;
// 		num -= rules[i]
// 	}
// }
// console.log(roman); // should be MMMCMXCIX

// roman to int

// let roman = "MMMCMXCIX"
// let arr = roman.split('')
// let num = 0;
// let rules = {M:1000,CM:900,D:500,CD:400,
// 						 C:100,XC:90,L:50,XL:40,X:10,
// 						 IX:9,V:5,IV:4,I:1}

// for (let i =0 ; i < arr.length; i++){
// 	if(rules[arr[i]] < rules[arr[i+1]]){
// 		num -= rules[arr[i]];
// 	}
// 	else {
// 		num += rules[arr[i]]
// 	}
// }
// console.log(num)


// *******************************************************************


//6. How do you check if a given String contains valid parentheses

// let str = "}[]{"

// let arr = str.split('')
// let temp = 0; 
// arr.forEach(p => {
// 		switch(p){
// 			case '(' : 
// 			case '[' :
// 			case '{' : 
// 				temp++;
// 				break;	
// 			case '}' :
// 			case ')' :
// 			case ']' :
// 				temp--;
// 				break;	
// 			default : console.log("default")
// 		}
// })
// if(temp === 0){
//  console.log("balanced")
// }
// else if(temp > 0){
// 	console.log(temp + " Parenthesis is not closed")
// }
// else if(temp < 0){
// 	console.log(Math.abs(temp) + " Parenthesis is not open")
// }

// *******************************************************************


//7. How do you find the longest palindromic substring of a given substring


// let str = 11211
// let tag = {}
// function palindrome(str) {
// 		let arr = str.split('');
// 		let rev = []
// 		arr.forEach(el => {
// 				rev.unshift(el)
// 		})
// 		return rev.join('') === str
// }
// function generateSubString(str) {
// 	let strArr = str.split('')
// 	for(let i =0 ; i < str.length;i++) { 
// 		for(let j =2 ; j < str.length + 1 ;j++) {
// 			if( i < j && (j-i > 2)){
// 				let a = strArr.slice(i,j).join('')
// 				if (palindrome(a) && !tag[a]){
// 						tag[a] = a.length;
// 				}
// 			}
// 		}
// 	}
// }
// generateSubString(str)
// console.log(tag)


// *******************************************************************


//8. In an array 1-100 numbers are stored, one number is missing how do you find it
// function range(size, startAt = 0) {
//     return [...Array(size).keys()].map(i => i + startAt);
// }
// let a = range(100,1)
// let processedArr = a.filter(el =>  el != 65)
// console.log(processedArr)
// let temp = 0
// let sum = ((100)*(100 + 1))/2
// processedArr.forEach(el => {
// 	temp = temp + el
// })
// console.log(sum - temp)

// *******************************************************************


//9. How to remove all duplicates from a given string

// let str = "quick brown fox jumps over the dog"
// let temp = str.split('').filter((el,index) => str.indexOf(el) === index)
// console.log(temp.join(''))


// *******************************************************************


//10. How to find all pairs in an array of integers whose sum is equal to the given number

// let a = [1,9,2,8,5,4,6,5]
// let num = 10
// a.forEach((el,index) => {
// 	for(let i = a.indexOf(el) + 1; i < a.length; i++){
// 		let sum = el + a[i]
		
// 		if(sum === num) {
// 			if(index !== i && el === a[i]){
// 			}
// 			else{
// 				console.log(el + " " + a[i])
// 			}
// 		}
// 	}
// })







// *******************************************************************



//11. How to find the largest and smallest number in an array? 
// let  numbers = [2, 43, 9, 12, 1, 16, 24]
// let largest = numbers[0];
// let smallest = numbers[0];
// for (var i = 0; i < numbers.length; i++){
//     var temp = numbers[i];
//     if (temp > largest)
//     {
//         largest = numbers[i];
//     }
//     if (temp < smallest)
//     {
//         smallest = numbers[i];
//     }
// }
// console.log(largest);
// console.log(smallest);

//using sorting


// let  numbers = [2, 43, 9, 12, 1, 16, 24]
// let temp = numbers.sort((a,b) => a-b)
// console.log(temp[0])
// console.log(temp[1])
// console.log(temp[temp.length - 1])
// console.log(temp[temp.length - 2])


// *******************************************************************


//12. Write a program to sort numbers in place using quick sort/bubble/mergesort

// *******************************************************************
//quick sort

// function quickSort(arr) {
// 	if(arr.length <= 1){
// 		return arr
// 	}
// 	else{
// 		let leftArr =[]
// 		let rightArr = []
// 		let newArr = []
// 		let len = arr.length;
// 		let pivot = arr.pop()
// 		arr.forEach(el => {
// 			if(el <= pivot){
// 				leftArr.push(el)
// 			}
// 			else{
// 				rightArr.push(el)
// 			}
// 	 })
// 	return newArr.concat(quickSort(leftArr),pivot,quickSort(rightArr))
// 	}
// }
// let originalArr = [3,0,2,5,-1,4,1]
// let sortedArr = quickSort(originalArr)

// console.log(originalArr)
// console.log(sortedArr)

// merge sort 

// function mergeSort(arr){
// 	if(arr.length < 2){
// 		return arr
// 	}
// 	else {
// 		let midpoint = Math.round(arr.length/2);
// 		let leftArr = arr.slice(0,midpoint) 
// 		let rightArr = arr.slice(midpoint, arr.length);
// 		console.log("original = " + arr)
// 		console.log("[mergesort]: left = "+leftArr+ " rigth= "+ rightArr)
				
// 		return merge(mergeSort(leftArr),mergeSort(rightArr))
// 	}
// }
// function merge(leftArr,rightArr) {
// 	let sortedArr = [];
// 	while(leftArr.length && rightArr.length) {
// 		if(leftArr[0] <= rightArr[0]){
// 			sortedArr.push(leftArr[0])
// 			leftArr = leftArr.slice(1)
// 			console.log("sorted = " + sortedArr)
// 			console.log("[merge]:left = "+leftArr+ " rigth= "+ rightArr)
// 		}		
// 		else{
// 			sortedArr.push(rightArr[0])
// 			rightArr = rightArr.slice(1)
// 			console.log("sorted = " + sortedArr)
// 			console.log("[merge]: left = "+leftArr+ " rigth= "+ rightArr)
// 		}
// 	}
// 	while(leftArr.length) {
// 		sortedArr.push(leftArr.shift())
// 		console.log("sorted = " + sortedArr)
// 	}
// 	while(rightArr.length) {
// 		sortedArr.push(rightArr.shift())
// 		console.log("sorted = " + sortedArr)
// 	}
// 	return sortedArr;
// }
// console.log(mergeSort([3,0,2,5,-1,4,1]))

// bubble Sort

// let a = [32,0,2,555,11,4,0,34,32]
// console.log("Original = "+a)
// let flag = false;
// do {
// 	for(let i = 0 ; i < a.length -1; i++) {
// 		if(a[i] > a[i+1]){
// 			let temp = a[i]
// 			a[i] = a[i+1]
// 			a[i+1] = temp;
// 			flag = true
// 		}
// 	}
// }while(flag)
// console.log("Sorted = "+a)



//13. Write code for Generate Random No in a range from /min to max?
// let min = 10
// let max = 100
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// *******************************************************************



// *******************************************************************

//14. find first non repeated char

// let a = "abcabcfd"
// let s = []
// for (let i = 0 ; i < a.length ; i++) {
//   let char = a[i]; 
//   if (a.indexOf(char) == i && a.indexOf(char, i + 1) == -1){
//     s.push(char)
//     }
// }
// console.log(s)


//15.  permutation in string

// function permut(string) {
//     if (string.length < 2) return string; // This is our break condition

//     var permutations = []; // This array will hold our permutations

//     for (var i=0; i<string.length; i++) {
//         var char = string[i];

// //      if (string.indexOf(char) != i)
// //         continue;         

//         var remainingString = string.slice(0,i) + string.slice(i+1,string.length); //Note: you can concat Strings via '+' in JS

//         for (var subPermutation of permut(remainingString))
//             permutations.push(char + subPermutation)

//     }
//     return permutations;
// }

// permutation = permut("xxa")
// console.log(permutation)

//18. prime number ,fibonacci

// const isPrime = num => {
//     for(let i = 2, s = Math.sqrt(num); i <= s; i++)
//         if(num % i === 0) return false; 
//     return num > 1;
// }
// console.log(isPrime(47))
// function fibo(n) {
// 	let a = 0, b = 1 ,f = 1;
// 	console.log(a)
// 	console.log(b)
// 	for(let i = 2 ; i <= n ; i++){
// 		f = a + b;
// 		a = b
// 		b = f
// 		console.log(f)
// 	}
// 	return f
// }
// fibo(10)


// ll leap year

// function isLeap(year) {
// 	return  ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
// }

// feb has 29 date or not

// let isLeap = (year) => new Date(year, 1, 29).getDate() === 29;
// console.log(isLeap(1600))

// string numerical  to int
// let str = "203674556"
// let rules = {
// 	"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"0":0
// }
// let arr = str.split("")
// let sum = 0
// arr.forEach((el,index) => {
// 		sum += rules[el] *(Math.pow(10,arr.length - index - 1))
// })
// console.log(sum)

// cool dude program
// let max =500
// let min = 100
// for( let i =min ; i <= max ; i++){
// 	if(i % 55 === 0  ){
// 		console.log("cool dude")
// 	}
// 	else if(i % 5 ===0){
// 		console.log('cool')

// 	}
// 	else if(i % 11 ===0){
// 		console.log('dude')
// 	}
// 	else {
// 		console.log(i)
// 	}
// }

// print patter 50,51,52,53,54,55,40,41,42,43.....10,11,12,13,14,15
// for( let j =5 ; j >= 1 ; j--){
// 	let temp = []
// 	for( let i =0 ; i <= 5 ; i++){
// 		temp.push(j*10 + i)
// 	}
// 		console.log(temp)
// }


// pie display

// let a =[1,4,1,5,9,2,6,5,3,5,8,9,7,9,3,2,3,8,4,6,2,6,4,3,3,8,3,2,7,9,5,0,2,8,8,4,
//         1,9,7,1,6,9,3,9,9,3,7,5,1,0,5,8,2,0,9,7,4,9,4,4,5,9,2,3,0,7,8,1,6,4,0,6,
//         2,8,6,2,0,8,9,9,8,6,2,8,0,3,4,8,2,5,3,4,2,1,1,7,0,6,7,9,8,2,1,4,8,0,8,6,
//         5,1,3,2,8,2,3,0,6,6,4,7,0,9,3,8,4,4,6,0,9,5,5,0,5,8,2,2,3,1,7,2,5,3,5,9,
//         4,0,8,1,2,8,4,8,1, ,1,1,7,4,5,0,2,8,4,1,0,2,7,0]
// let main = document.getElementById('ball');

// a.forEach((el) => {
//   let b = document.createElement("div");
//   b.classList.add("ball");
//   b.style.width = el*12 +"px";
//   b.style.height = el*12 + "px";
//   b.style.margin = el;
//   let randomColor =  Math.floor(Math.random()*16777215).toString(16);
//   b.style.background = "#" + randomColor;
//   main.append(b);  
// })

// console.log(a.length)

//css
// .ball{
//   height: 40px;
//   border-radius:50%;
//   position: relative;
//   -webkit-animation: mymove 5s infinite; /* Safari 4.0 - 8.0 */
//   animation: mymove 5s infinite;
//   animation-direction: alternate;
// }

// @-webkit-keyframes mymove {
//   from {left: 0px;}
//   to {left: 200px;}
// }

// @keyframes mymove {
//   from {left: 0px;}
//   to {left: 200px;}
// }

// html 
// <main id="ball">
//   </main>






