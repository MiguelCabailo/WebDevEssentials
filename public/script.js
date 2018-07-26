// Index HTML on-load
var indexHTML = function () {
    (function (topics, buttonClass) {
        var topicsAmount = topics.length;

        var currClass = 0
        // attach events on the child node
        var myElement;
        var myNode = document.querySelector('.content');

        // for each topic create a button and add functionality
        for (var i = 0; i < topicsAmount; i++) {
            var myElement = document.createElement("button");

            myElement.textContent = topics[i];
            myElement.id = "Lesson" + [i + 1] + ".html";
            myElement.classList.add("btn");
            myElement.classList.add(buttonClass[currClass]);

            if (currClass === buttonClass.length - 1) {
                currClass = 0;
            } else {
                currClass++;
            }

            myNode.appendChild(myElement);
        }

        myNode.addEventListener('click', function (e) {
            location.href = e.target.id;
        });

    })(["ManipulateTargetDom", "Closures", "IIFE's", "RelativeAbsolutePosition", "Callbacks"
    , "Flexbox and Centering Content", "Constructor", "DebuggingCss", "Sass and Gulp"
    , "Git", "Arrow Functions","CSS Variables", "NPM", "Ajax"],
        ["btn-primary", "btn-secondary", "btn-success", "btn-danger", "btn-warning", "btn-info"]);
}

/*
    Lesson 1 Scripts
*/
var colors = [
    "orange", "blue", "pink", "lime",
    "purple", "green", "red", "yellow"
];

var makeboxes = function (howMany) {
    var colorAmount = colors.length;
    var currColor = 0;

    var myElement;
    var myNode = document.querySelector('.boxes');

    for (var i = 0; i < howMany; i++) {

        myElement = document.createElement('div');
        myElement.className = 'box';
        myElement.style = 'background-color:' + colors[currColor];

        if (currColor === colorAmount - 1) {
            currColor = 0;
        } else {
            currColor++;
            myNode.appendChild(myElement);
        }

    }

    //to remove an element target the parent element 
    //then remove the target element
    //no need to put it in the loop since it is the parent that is targeted
    myNode.addEventListener("click", function (e) {
        e.target.parentNode.removeChild(e.target);
    });
}

/*
    Lesson 2 Scripts
*/
function setupItem() {
    var myNumber = 1;

    function increment() {
        return console.log(myNumber++);
    }
    increment();
    increment();
}

function myObject() {
    var myValue = 1;
    return {
        display: function () {
            return console.log(myValue);
        },
        increment: function () {
            return myValue++;
        }
    };
}

var mything = myObject();
var other = myObject();

var itemText = [
    {
        'id': '#symptoms',
        'text': 'It is important to be as detailed as possible with your description of symptoms. Note changes in bathroom habits, weight loss, responsiveness and anything you can think of.'
    },
    {
        'id': '#medications',
        'text': 'Please list all medications and make sure you list the date and the dosage you gave to your pet'
    }
];

function handleItem(id, text) {

    // new alert element, the target element to add the alert, current alert to be used
    var newElement, targetElement, currentAlert;
    currentAlert = document.querySelector('#currentAlert');

    //if currentAlert has a value, just delete it
    if (currentAlert !== null) {
        currentAlert.parentNode.removeChild(currentAlert);
    }
    newElement = document.createElement('div');
    newElement.id = 'currentAlert';
    newElement.className = 'alert alert-danger';
    newElement.innerHTML = text;
    targetElement = document.querySelector(id).parentNode;
    targetElement.insertBefore(newElement, targetElement.childNodes[2]);
}

function initItem(id, text) {
    return function () {
        handleItem(id, text);
    }
}

function setupItem2() {
    var DOMElement;

    for (var i = 0; i < itemText.length; i++) {
        DOMElement = document.querySelector(itemText[i].id);
        DOMElement.addEventListener('focus', initItem(itemText[i].id, itemText[i].text));
    }
}


/*
    Lesson 4 Code IIFE
    only used css hover property
    see: if(window.location.href === 'http://localhost:3000/Lesson3.html')
*/

/*
    Lesson 5 Callbacks
*/
function lesson5HTML() {
    var tips = document.querySelectorAll('.hastip');

    // takes three arguments: event, callback and boolean
    // the event info goes to the e in this case
    for (var i = 0; i < tips.length; i++) {
        tips[i].addEventListener('click', function (e) {
            e.target.querySelector('.tooltip').classList.toggle('active');
        }, false);
    }
}

/*
    Lesson 6 No Script
*/

/*
    Lesson 7 Constructors
*/
function lesson7HTML() {

    // targets a function to be activated
    function Hamburger(nodeName) {
        var myNode = document.querySelector(nodeName + ' .hamburger');

        // building a constructor
        // will return something when this function is called
        return {
            // this is a method and is a closure since myNode is available here
            activate: function () {
                myNode.addEventListener('click', function (e) {
                    myNode.parentNode.querySelector(".navbar").classList.toggle('hidden');
                }, false);
            },
            hide: function () {
                myNode.parentNode.querySelector(".navbar").classList.add('hidden');
            }
        }
    }

    var topMenu = new Hamburger('#topMenu');
    topMenu.activate();

    var botMenu = new Hamburger('#bottomMenu');
    botMenu.activate();
    botMenu.hide();
}

/*
    Lesson 11: Arrow Functions
*/
function lesson11HTML() {

    var Hamburger = function (nodeName) {
        var myNode = document.querySelector(nodeName + ' .hamburger');

        return {
            activate: () => myNode.addEventListener('click', e => myNode.parentNode.querySelector('.navbar').classList.toggle('hidden'), false),
            // activate
            hide: () => myNode.parentNode.querySelector('.navbar').classList.add('hidden')
        } //return
    } //Hamburger

    var topMenu = new Hamburger('#topMenu');
    topMenu.activate();

    var bottomMenu = new Hamburger('#bottomMenu');
    bottomMenu.activate();
    bottomMenu.hide();
}

/*
    Lesson 12: CSS Variables
*/
function lesson12HTML() {

    var Hamburger = function(nodeName) {
        var myNode = document.querySelector(nodeName + ' .hamburger');

        return {
            activate: () => myNode.addEventListener('click', e => myNode.parentNode.querySelector('.navbar').classList.toggle('hidden'), false), // activate
            hide: () => myNode.parentNode.querySelector('.navbar').classList.add('hidden')
        } //return
    } //Hamburger

    var topMenu = new Hamburger('#topMenu');
    topMenu.activate();
    var bottomMenu = new Hamburger('#bottomMenu');
    bottomMenu.activate();
    bottomMenu.hide();
}

window.onload = function () {
    if (window.location.pathname === '/' | window.location.pathname === '/index.html') {
        indexHTML();
    }

    // only load if on the lesson 1 page
    if (window.location.pathname === '/Lesson1.html')
        makeboxes(20);


    //alert(window.location.href);
    if (window.location.pathname === '/Lesson2.html') {
        setupItem();
        console.log("new");
        mything.display();
        mything.increment();
        mything.display();
        mything.increment();
        mything.display();
        console.log("new");
        other.display();
        setupItem2();
    }

    if (window.location.pathname === '/Lesson3.html') {
        (function (howMany, colors) {
            var colorAmount = colors.length;
            var currColor = 0;
            var myElement;
            var myNode = document.querySelector('.boxes');

            for (var i = 0; i < howMany; i++) {
                myElement = document.createElement('div');
                myElement.className = 'box';
                myElement.style = 'background-color:' + colors[currColor];

                if (currColor === colorAmount - 1) {
                    currColor = 0;
                } else {
                    currColor++;
                    myNode.appendChild(myElement);
                }
            }
            //to remove an element target the parent element 
            //then remove the target element
            //no need to put it in the loop since it is the parent that is targeted
            myNode.addEventListener("click", function (e) {
                e.target.parentNode.removeChild(e.target);
            });
        })(10, ["orange", "blue", "pink", "lime", "purple", "green", "red", "yellow"]);
    }

    /*
        No lesson 4 html
    */


    if (window.location.pathname === '/Lesson5.html') {
        lesson5HTML();
    }

    /*
        No Lesson 6
    */

    if (window.location.pathname === '/Lesson7.html') {
        lesson7HTML();
    }

    if (window.location.pathname === '/Lesson11.html') {
        lesson11HTML();
    }

    if (window.location.pathname === '/Lesson12.html') {
        lesson12HTML();
    }

}