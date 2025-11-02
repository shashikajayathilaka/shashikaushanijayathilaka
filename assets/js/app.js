//console.log("hello !");
////var a;
//let b;
////const c=3.14;
//console.log("var "+ a);
//console.log("let "+ b);
//console.log("const "+ c);
//a=10;
//b="kamal";
//console.log("var "+ a);
//console.log("let "+ b);
//console.log("const "+ c);
//function checkValue(){
   // var d="saman";
   // let e=45;
    //const c=3.14;
  //  console.log("var "+ d);
  //  console.log("let "+ e);
    //console.log("const "+ c);
//}
//checkValue(); 
//{
//var a=10;
//let b=16;
//}
//console.log("var "+ a);
//console.log("let "+ b);
//let b=25;
//console.log("var "+ a);
//console.log("let "+ b);
function addValues() {
    let input1 = document.getElementById("inputField1");
    let input2 = document.getElementById("inputField2");
    let input3 = document.getElementById("inputField3");

    let value1 = input1.value;
    let value2 = input2.value;
    let value3 = input3.value;

    let y = parseFloat(value1);
    let m = parseFloat(value2);
    let d = parseFloat(value3);
    y1= y - ((14 - m) / 12);
    x = y1 + y1/4 - y1/100 + y1/400;
    m1 = m + 12 * ((14 - m) / 12) - 2;
    d1 = (d + x + (31 * m1) / 12) % 7;
    //let sum = num1 + num2+ num3;

    document.getElementById("resultField").value = d1;
    console.log("var "+ d1);
}
addValues();