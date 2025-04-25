/*1. it show the whole document
      var element = document;
      console.log(document);
*/

/*2. it show the 10th index element from your current document
     var element2 = document.all[9];
     console.log(element2);
*/

/*3. it return head, title, body, links, links[2], images, images[0], scripts, scripts[0], URL, domain from your current document
    var element3;
    element3 = document.head;
    console.log(element3);
    element3 = document.title;
    console.log(element3);
    element3 = document.body;
    console.log(element3);
    element3 = document.links;
    console.log(element3);
    element3 = document.links[2];
    console.log(element3);
    element3 = document.images;
    console.log(element3);
    element3 = document.images[0];
    console.log(element3);
    element3 = document.scripts;
    console.log(element3);
    element3 = document.scripts[0];
    console.log(element3);
    element3 = document.URL;
    console.log(element3);
    element3 = document.domain;
    console.log(element3);
*/

/*4. it return header, footer, list , ul from your current document
    var element4;
    element4 = document.querySelectorAll("header");
    console.log(element4);

    var element4;
    element4 = document.querySelectorAll("footer");
    console.log(element4);

    element4 = document.querySelectorAll('li');
    console.log(element4);

    element4 = document.querySelectorAll('ul');
    console.log(element4);
*/

/*5. it find how many list, ul from any particular id or class
   var element5;
   element5 = document.getElementById("header").getElementsByTagName("li");
   console.log(element5);

   element5 = document.getElementById("header").getElementsByTagName("ul");
   console.log(element5);
*/

/* 6. it find text,tag,class,style,event,attribute,attributeNode from any particular id or class
   var element5;

   element5 = document.getElementById("header").innerText;
   console.log(element5);

   element5 = document.getElementById("header").innerHTML;
   console.log(element5);

   element5 = document.getElementById("header").getAttribute("class");
   console.log(element5);

   element5 = document.getElementById("header").getAttribute("style");
   console.log(element5);

   element5 = document.getElementById("header").getAttribute("onclick");
   console.log(element5);
   
   element5 = document.getElementById("header").getAttributeNode("onclick");
   console.log(element5);

   element5 = document.getElementById("header").attributes;
   console.log(element5);

   element5 = document.getElementById("header").attributes[2];
   console.log(element5);
*/

/*7. it set text,tag,class,style,event,attribute,attributeNode from any particular id or class
    var element6;
    element6 = document.getElementById("header").innerText = "Custom Text";
    console.log(element6);

    element6 = document.getElementById("header").innerHTML = "<h1>Custom Heading</h1>";
    console.log(element6);

    element6 = document.getElementById("header").setAttribute("class","custom");
    console.log(element6);

    element6 = document.getElementById("header").setAttribute("style","color:blue;");
    console.log(element6);

    element6 = document.getElementById("header").setAttribute("onclick","alert('Hello')");
    console.log(element6);

    element6 = document.getElementById("header").removeAttribute("class");
    console.log(element6);

    element6 = document.getElementById("header").removeAttribute("style");
    console.log(element6);

    element6 = document.getElementById("header").removeAttribute("onclick");
    console.log(element6);

    element6 = document.getElementById("header").attributes;
    console.log(element6);

    element6 = document.getElementById("header").attributes[0];
    console.log(element6);
*/

// Note:- With the help of querySelector and querySelectorAll Method we target Css Selector only like if we want to target tag then must give it's id either class then you target.No need to giv like document.getElementById or document.getElementsByClassName,document.getElementsByTagName.

/* 8. Dom QuerySelector and QuerySelectorAll Method:--
 var element;
 element7 = document.querySelector("#header");  
 console.log(element7);

 element7 = document.querySelectorAll(".menu");
 console.log(element7);

 element7 = document.querySelectorAll("li");
 console.log(element7);
*/

/*9. Dom Css Styling Methods:--
     var element8;
     element8 = document.getElementById("header").style.color;
     console.log(element8);

     element8 = document.getElementById("header").style.color = "gray";
     console.log(element8);

     element8 = document.getElementById("header").style.backgroundColor = "black";
     console.log(element8);
*/

/* 10. Dom ClassList Methods:--
   var element9;
   element9 = document.querySelector(".heading").classList;
   console.log(element9);

   element9 = document.querySelector(".heading").classList.add("abc", "xyz");
   console.log(element9);

   element9 = document.querySelector(".heading").classList.remove("pqr");
   console.log(element9);

   element9 = document.querySelector(".heading").classList.contains("xyz");
   console.log(element9);

   element9 = document.querySelector(".heading").classList.toggle("xyz");
   console.log(element9);

   element9 = document.querySelector(".heading").classList.item(1);
   console.log(element9);

   element9 = document.querySelector(".heading").classList.replace("pqr", "xyz");
   console.log(element9);

*/

/* 11. Dom Event Methods:--
      var element10;
      element10 = document.getElementById("subheading").addEventListener("click", function(){
        alert("Heading clicked!");
     });

      element10 = document.getElementById("subheading").addEventListener("click", function(){
        document.getElementById("subheading").style.backgroundColor = "gray";
     });

     element10 = document.querySelector(".heading").addEventListener("mouseover", function(){
       document.querySelector(".heading").style.backgroundColor = "black";
    });

    element10 = document.querySelector(".heading").removeEventListener("click", function(){
      document.querySelector(".heading").style.backgroundColor = "black";
   });
*/

/*  12.Dom Traversing Method:--
        parentNode, parentElement, childNodes, children, firstChild, firstElementChild ,lastChild, lastElementChild,nextElementSibling,nextSibling,previousElementSibling, previousSibling

       var element11;
       element5 = document.querySelector(".heading").parentNode;
       console.log(element11);

       element11 = document.querySelector(".heading").parentElement;
       console.log(element11);

       element11 = document.querySelector(".menu").childNodes;
       console.log(element11);

       element11 = document.querySelector(".menu").children;
       console.log(element11);

       element11 = document.querySelector(".menu").firstChild;
       console.log(element11);

       element11 = document.querySelector(".menu").firstElementChild;
       console.log(element11);

       element11 = document.querySelector(".menu").lastChild;
       console.log(element11);

       element11 = document.querySelector(".menu").lastElementChild;
       console.log(element11);

       element11 = document.querySelector(".menu").nextElementSibling;
       console.log(element11);

       element11 = document.querySelector(".menu").nextSibling;
       console.log(element11);

       element11 = document.querySelector(".menu").previousElementSibling;
       console.log(element11);

       element11 = document.querySelector(".menu").previousSibling;
       console.log(element11);
*/

/* 13. Dom Create Methods:--
   var element12;
   element12 = document.createElement("div");
   element12.id = "newdiv";
   console.log(element12);
  
   var element12;
   element12 = document.createElement("p");
   element12.innerText = "This is new paragraph";
   console.log(element12);

   var element12;
   element12 = document.createElement("h2");
   element12.innerText = "This is new heading";
   console.log(element12);

   var element12;
   element12 = document.createElement("ul");
   element12.innerHTML = "<li>Item 1</li><li>Item 2</li><li>Item 3</li>";
   console.log(element12);
*/

/* 14. Dom Append and Insert Methods:-
     var element13;
     element13 = document.querySelector(".menu").appendChild(document.createElement("li"));
     element13.innerHTML = "<a href='#'>Item 5</a>";
     console.log(element13);

     element13 = document.querySelector(".menu").insertBefore(document.createElement("li"), document.querySelector(".menu").firstElementChild);
     element13.innerHTML = "<a href='#'>More</a>";
     console.log(element13);

     element13 = document.querySelector(".menu").removeChild(document.querySelector(".menu").lastElementChild);
     console.log(element13);

     element13 = document.querySelector(".menu").replaceChild(document.createElement("li"), document.querySelector(".menu").firstElementChild);
     element13.innerHTML = "<a href='#'>More</a>";
     console.log(element13);

     element13 = document.querySelector(".menu");
     element13.innerHTML = "<h1>Custom Menu Heading</h1>";
     console.log(element13);
*/

/* 14. Dom  Clone Node Method:-- 
       var element14;
       element14 = document.querySelector(".menu").cloneNode(true);
       element14.appendChild(document.createElement("li")).innerText = "Item 6";
       console.log(element14);
*/

/* 15. Dom Contains Method:--
       var parentElement = document.querySelector(".menu");
       var target = document.querySelector(".sub-menu");
       var find = parentElement.contains(target);
       console.log(find);
*/

//Difference between == and ===
// var x = 5;
// var y = "5";
// console.log(x == y);
// console.log(x === y);

//About this operator
// var obj = {fname: "John",lname: "Doe" ,age: 30 , fullname: function() { return this.fname + " " + this.lname;}}
// console.log(obj.fullname());

//About ternary operator
// var x = 5;
// var y = 10;
// var result = x > 10 ? "Greater" : "Lesser";
// console.log(result);

//About closure
// function outerFunction() {
//    var x = 5;
//    y = 10; // Still global (intentionally left as-is to match original)
 
//    function innerFunction() {
//      return x + y;
//    }
 
//    return innerFunction;
//  }
 
//  var result = outerFunction(); // Call outer and store the inner function
//  console.log(result()); // Output: 15

 //About hoisting
   //  Example 1:
  //  console.log(a); // Output: undefined
  //  var a = 5;

   //  Example 2:
  //  var b;
  //  console.log(b); // Output: undefined
  //  b = 5;

   //  Example 3:
  //  sayHello();
  //  function sayHello() {
  //  console.log("Hello, world!");
  //  }

//About prototype 
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
  // Person.prototype.sayHello = function() {
  //   console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  // };
  
  // var person1 = new Person("John", 30);
  // person1.sayHello(); // Output: Hello, my name is John and I am 30 years old.

//Difference between setTimeout and setInterval
//   setTimeout(() => {
//        console.log("Executed after 2 seconds");
//   }, 2000);

//   setInterval(() => {
//        console.log("Executed every 2 seconds");
//   }, 2000);

//About promises
// let myPromise = new Promise((resolve, reject) => {
//     let success = true;

//     if (success) {
//         resolve("The operation was successful!");
//     } else {
//         reject("The operation failed.");
//     }
// });

// myPromise.then((message) => {
//    console.log("Success:", message);
// }).catch((error) => {
//    console.log("Error:", error);
// });

//About async and await
// async function fetchData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         const data = await response.json();
//         console.log(data); // Logs the post data
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// fetchData();

//About callback function
// function greet(name) {
//     console.log("Hello, " + name + "!");
//     callback();
//   }
//   function sayGoodbye(callback, name) {
//     callback(name);
//   }
  
//   sayGoodbye(greet, "John");

  //About IIFE
//   var result = (function() {
//    return "This code is executed immediately";
// })();
// console.log(result);

//About arrow function
// var add = (a, b) => a + b;
// var multiply = (a, b) => a * b;
// console.log(add(2, 3));
// console.log(multiply(2, 3));

