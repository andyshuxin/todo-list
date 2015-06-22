/*jshint browser:true */

var DEBUG = false;

var btn = document.getElementById('add_task_btn');
var input = document.getElementById('task_input');
var task_list = document.getElementById('task_list');

var id_counter = 0;

if (DEBUG) {
    for (var i=0; i<10; i++) {
        var li = document.createElement("li");
        var textNode = document.createTextNode(i);
        li.appendChild(textNode);
        li.setAttribute('id', id_counter.toString());
        id_counter++;
        task_list.appendChild(li);
    }
}

btn.onclick = function () {
    'use strict';
    var li = document.createElement("li");
    textNode = document.createTextNode(input.value);
    li.appendChild(textNode);
    li.setAttribute('id', id_counter.toString());
    id_counter++;
    task_list.appendChild(li);
};

task_list.addEventListener('click', function(e) {
    'use strict';
    var li = e.target;
    if (li.tagName.toUpperCase() === 'LI'){
        if (confirm('Seriously?')) {
            task_list.removeChild(li);
        }
    }
});