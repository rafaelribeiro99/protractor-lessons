/**
 * Author: Rafael Luna Ribeiro - Protractor Studies
 */



function add(a,b){
	//code
	return a+b;
}


console.log(add(2,3));
console.log(add(5,5));
console.log(add(10,15));

var a=4;
var b=["hello", "world", "4", "goodbye"];

console.log(b.length+" is the size of the array B");

for(var i=0;i<b.length;i++){
	console.log(b[i]);
}

var c= new Array();
var newstring = new String();
var newnumber = new int();

c[0] = "goodbye";
c[1] = "4";
c[2] = "world";
c[3] = "hello";
c[4] = "bad";

console.log(c.length+" is the size of the array C");
	
for(var i=0;i<c.length;i++){
	console.log(c[i]);
}

//PRINT IN REVERSE
console.log("PRINT IN REVERSE");
for(var j = c.length ; j < 0 ; j--){
	console.log(c[j]);
}


var name = "Rafael";

console.log(name.charAt(3));

var newname = name.concat("Luna");
console.log(newname);

console.log(name.indexOf("f"));

//starting slice(startIndex, endIndex)
//BUT, start index starts from 0 --> R.a.f.a index is 0.1.2.3
//END index start from 1 --> R.a.f.a index is 1.2.3.4
//this will print: Rafa, from the String Rafael
console.log(name.slice(0, 4));


//set to uppercase text
console.log(name.toUpperCase());





