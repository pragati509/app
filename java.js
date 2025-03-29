
var firstName = "john";
console.log(firstName);
var firstName = "kumar";
console.log(firstName);
firstName = "john";
console.log(firstName);

let num = 20;
console.log(num);
num = 30;
console.log(num);

const pi = 3.14;
console.log(pi);

//Arithmetic operators
let a = 100;
let b = 200;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
console.log(a++);
console.log(a--);

//Assignment operators
let x = 10;
let y = 20;
console.log(x += y);
console.log(x -= y);
console.log(x *= y);
console.log(x /= y);
console.log(x %= y);

//Comparision operators
let m = 55;
let n = 43;
console.log(m==n);
console.log(m===n);
console.log(m!=n);
console.log(m>=n);
console.log(m<=n);
console.log(m>n);
console.log(m<n);

//Logical operators
let s = true;
let r = false;
console.log(s&&r);
console.log(s||r);
console.log(!r);

//Ternary operators
let age = 20;
let message = (age >= 18) ? "You are an adult" : "You are not an adult";
console.log(message);

//String   
let firstname = "Kishore";
let lastname = "Kumar";
console.log(firstname.length);
console.log(firstname.toUpperCase());
console.log(firstname.toLowerCase());
console.log(lastname.slice(0,3));
console.log(firstname+ ""+lastname);
console.log(firstname.indexOf('0'));

//Functions
function hello(){
    console.log("Good Morning");
}hello();

function hello(name){
    console.log("Good Morning"+""+name);
}hello("Kishore");

function add(a,b){
    return a+b;
} console.log(add(10,20));

function mul(x,y){
    return x*y;
} let result = mul(10,20)
console.log(result);

console.log(person);
console.log(person.name);
console.log(person['name']);
person.name = "Kishore";
console.log(person);
person = city = "Hyderabad";
console.log(person);

//Conditional Statements
//if else
if(age>=18){
    console.log("Your an adult");
}else {
    console.log("Your not an adult");
}

//if else if
let mark = 90;
if(mark>=90){
    console.log("Grade is A");
}else if(mark>=80){
    console.log("Grade is B");
}else if(mark>=70){
    console.log("Grade is C");
}else{
    console.log("You are fail");
}

//switch
let day = 1;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
         break;   
        default:
            console.log("Enter proper value");
}

//Ternary operator
let age1 = 30;
let canvote = age1 > 18 ? 'Yes' : 'No';
console.log(canvote);

//Loops
//for loop 
for(let i=0; i<=20; i++){
    console.log(i);
}

//for loop with array
let colors = ['red','green','blue'];
for(let i=0; i<colors.length; i++){
    console.log(colors[i]);
}

//while loop
let i=0;
while(i<5){
    console.log(i);
    i++;
}

//do while loop
let j=0;
do{
    console.log(j);
    j++;
}while(j<5);

//break and continue
for(let i=0; i<5; i++){
    if(i==3){
        continue;
    }
    console.log(i);
}