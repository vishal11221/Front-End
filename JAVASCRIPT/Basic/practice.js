var container = document.createElement('div'); //create div
container.id = 'container';//Assign id to div
var tag = document.createElement('span');//create span tag
tag.id = 'sp';//Assign id to span tag
var txt = document.createTextNode("This span text coming from dom");//create text
//Append text into span tag
tag.appendChild(txt);

//Append span tag into div container
container.appendChild(tag);

//Append div container into body
document.body.appendChild(container);
