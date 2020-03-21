 display = document.getElementById('add');
 one = document.getElementById('one');
 two = document.getElementById("two");
 three = document.getElementById("three");
 four = document.getElementById("four");
 five = document.getElementById("five");
 six = document.getElementById("six");
 minus = document.getElementById("minus");
 square = document.getElementById("square");
 seven = document.getElementById("seven");
 eight = document.getElementById("eight");
 nine = document.getElementById("nine");
 multiply = document.getElementById("multiply");
 mod = document.getElementById("mod");
 equal = document.getElementById("equal");
 div = document.getElementById("div");
 clear = document.getElementById("clear");
 zero = document.getElementById("zero");
 plus = document.getElementById("plus")
 pie = document.getElementById("pie")


 I = () => display.value += '1';

    one.addEventListener("click", function() {
        I();
    }) 
    
     II = () => display.value += '2';

    two.addEventListener("click", function() {
        II();
    }) 

    III = () => display.value += '3';
    three.addEventListener("click", function() {
        III();
    }) 

    IV = () => display.value += '4';

    four.addEventListener("click", function() {
        IV();
    }) 

    V = () => display.value += '5';

    five.addEventListener("click", function() {
        V();
    }) 

    VI = () => display.value += '6';

    six.addEventListener("click", function() {
        VI();
    }) 

    SUBTRACT = () => display.value += '-';

    minus.addEventListener("click", function() {
        SUBTRACT();
    }) 

    SQUARE = () => display.value += '**2';

    square.addEventListener("click", function() {
        SQUARE();
    }) 

    SEVEN = () => display.value += '7';

    seven.addEventListener("click", function() {
        SEVEN();
    }) 
    
    EIGHT = () => display.value += '8';

    eight.addEventListener("click", function() {
        EIGHT();
    }) 
    
    NINE = () => display.value += '9';

    nine.addEventListener("click", function() {
        NINE();
    }) 
    
    MULTIPLY = () => display.value += '*';

    multiply.addEventListener("click", function() {
        MULTIPLY();
    }) 
    
    MODULUS = () => display.value += '%';

    mod.addEventListener("click", function() {
        MODULUS();
    }) 
    
    EQUAL = () => display.value = eval(Calculator.Input.value);

    equal.addEventListener("click", function() {
        EQUAL();
    }) 
    
    CLEAR = () => display.value = Calculator.Input.value = '';;

    clear.addEventListener("click", function() {
        CLEAR();
    }) 
    
    ZERO = () => display.value += '0';

    zero.addEventListener("click", function() {
        ZERO();
    }) 
    
    DIV = () => display.value += "/";

    div.addEventListener("click", function() {
        DIV();
    }) 
    
    CUBE = () => display.value += '**3';

    cube.addEventListener("click", function() {
        CUBE();
    }) 
    
    PLUS = () => display.value += '+';

    plus.addEventListener("click", function() {
        PLUS();
    }) 

    PIE = () => display.value += '22/7';

    pie.addEventListener("click", function() {
        PIE();
    }) 
    
    