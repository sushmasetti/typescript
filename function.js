//function with different types of parameters
function UsingParams(pRequired, pDefault, pOptional) {
    if (pDefault === void 0) { pDefault = "DBS-ID"; }
    var pRest = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        pRest[_i - 3] = arguments[_i];
    }
    console.log(pDefault);
    console.log(pOptional);
    console.log(pRequired);
    console.log(pRest);
}
UsingParams(true);
UsingParams(false, "DBS-492341", 100, "a", "b", "c");
function arrayParams(pArr) { console.log(pArr); }
function restParams() {
    var pRest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        pRest[_i] = arguments[_i];
    }
    console.log(pRest);
}
var array = ['1', '2', '3'];
arrayParams(array);
restParams('1', '2');
restParams('5', '7');
//function that returns a funcion
function complicated() {
    console.log("inside complicated");
    return function () {
        console.log("I will display if invoked only");
        return function (pname) {
            return " hello " + pname;
        };
    };
}
//var result = complicated();
//result();
console.log(complicated()()("sushma")); //currying of functions
//console.log(result);
// self invokable function
(function () {
    console.log("self function for console.log");
})();
var out = (function () {
    console.log("self function for return");
    return "self fun";
})();
console.log(out); //for return "" type out variable is created / for console.log creation of out is not required
console.log((function () {
    console.log("inside complicated");
    return function () {
        console.log("I will display if invoked only");
        return function (pname) {
            return " hello " + pname;
        };
    };
})()()("abc"));
//lamda funtions
var j = function () {
    console.log("lamda1");
    return "lamda2";
};
console.log(j());
var p = function () { return "lamda function"; };
console.log(p());
var out1 = function (a) { return function (x, y) { return x + y + a; }; };
console.log(out1(10)(20, 30));
//Reverse Engineering
var lambaclearexplanation = function (a) {
    return function (x, y) {
        return x + y + a;
    };
};
console.log(out1(1)(2, 3)); // rather than writing the whole code using multiple functions use single line 72 using lamda
//let myAdd = function(x: number, y: number): number { return  x + y; };
//console.log(myAdd(2,3));
// let myAdd: (baseValue: number, increment: number) => number =
//     function(x: number, y: number): number { return x + y; };
//     console.log(myAdd(0,3));
var out2 = function (x, y) { return x + y; };
console.log(out2(2, 3));
var exp = "2+3*5";
var str = exp.split('+');
console.log(str);
