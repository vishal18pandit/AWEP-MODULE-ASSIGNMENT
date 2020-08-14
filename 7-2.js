

//CALLBACK Function

let hello = function () {
    console.log("HelloWorld");
}
hello();

//OUTPUT:HelloWorld

hello(() => {
    console.log("Callback  functions");
});

hello();

//OUTPUT:HelloWorld

let callbckfun = function () {

    console.log("Welcome to world of Programmers");
};

callbckfun(hello);

//OUTPUT: Welcome to world of Programmers

let arrow = () => {
    console.log("Welcome to world of ITians");
};

hello(arrow);

  //OUTPUT: Welcome to world of ITians