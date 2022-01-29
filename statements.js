function myFunc() {
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";

  const listKeyword = [
    "var= Declares a variable",
    "let = Declares a block variable",
    "const = Declars a block constant",
    "if =  Marks a block of statements to be executed on a condition",
    "switch = Marks a a block of statements case.",
    "for = Marks a block of statements to be executed in a loop",
    "function = Declares a fuction",
    "return = Exits a fuction",
    "try = Implements error handling to a block of statements",
  ];
  document
    .getElementById("keywords")
    .innerHTML =(listKeyword.map((v) => `<li>${v}</li>`));
}

let a, b, c;
a = 50;
b = 30;
c = a + b;
console.log(c);
