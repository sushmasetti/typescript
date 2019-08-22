var obj={};
function fun1(){

    return "in fun1";

}
var fun2=function(){
return "in fun2";
}

fun1();
fun2();
//rule 1 : to access object items ,use key. eg:obj.key
//rule 2 : to access array items,use position. eg:arr[0]
var complexObj={
    fun3:function(){
        console.log("In fun3");
    },
    items: ["Mobiles","Cables","Papers","Laptop"],
    subObj: {sk1:1000, 
            sk2:"some value", 
            sk3: [1,2,3,
                      ["a","b"],
                      {ssk1:100}
                 ]
             }
}
console.log("displaying fun3")
console.log(complexObj.fun3());
console.log("displaying cables")
console.log(complexObj.items[1]);
console.log("displaying sk2")
console.log(complexObj.subObj.sk2);
console.log("displaying b:")
console.log(complexObj.subObj.sk3[3][1]);
console.log(complexObj.subObj.sk3[4].ssk1ssk1);


////tweakig a function/////
function fun(){
    return "in fun";
}
function fundoo(){
this.NameProperty="Sushma";
this.Work=function(){
    return this.NameProperty+ "works!";
}
}
var classObj = new fundoo();
console.log("view fundoo as class instance")
console.log(classObj);
console.log(classObj.NameProperty);
console.log(classObj.Work());
var funObj = new fun();
console.log(funObj);