let value;

value = document;
value = document.all;
value = document.all[2];
value = document.all.length;
value = document.head;
value = document.body;
value = document.doctype;
value = document.domain;
value = document.URL;
value = document.characterSet;
value = document.contentType;


value = document.forms;
value = document.forms[0];
value = document.forms[0].id;
value = document.forms[0].method;
value = document.forms[0].action;

value = document.scripts;

value = document.scripts[0].getAttribute('src');

let scripts = document.scripts;

let scriptArr = Array.from(scripts);

scriptArr.forEach(function(script) {
    console.log(script.getAttribute('src'));
});

console.log(scriptArr);


