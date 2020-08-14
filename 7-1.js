
//Functions 


//Named function :--

function fn()//without parameter
{
    console.log("Hello Google");
}
fn();
//OUTPUT: Hello Google

function fn1(r) //with parameter
{
    console.log("The Value = " + r);
}

fn1(6);

//OUTPUT: The Value = 6

//------------------------------------------------

//Annonymous Function:--

let r = function ()//without parameter
{
    console.log("This is anonnymous function");
}

r();

//OUTPUT: This is anonnymous function

let r1 = function (v)//with parameter
{
    console.log("The Passing Parameter =" + v);
}

r1("hello");

//OUTPUT: The Passing Parameter =hello

//---------------------------------------------------------

//ARROW Function:

let r1 = () => {
    console.log("Hello");
}

r1();
//OUTPUT: Hello

let r1 = () => {
    r();
}

r1();
//OUTPUT: This is anonnymous function

let r2 = () => {
    console.log("Hello");
}

r2();

//OUTPUT: Hello

fn1(r2());

//OUTPUT: Hello
//       The Value = undefined

fn1(r1());

//OUTPUT:  This is anonnymous function
//         The Value = undefined