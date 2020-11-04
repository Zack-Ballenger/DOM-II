// Your code goes here
// * [ ] Using your [index.js file](js/index.js), create [event listeners](https://developer.mozilla.org/en-US/docs/Web/Events) of at least 10 _different_ types. You must Use your creativity to make the Fun Bus site more interactive. For example you could change colors, animate objects, remove objects, etc. Here are some event types you could try to use:
//   * `mouseover`
//   * `keydown`
//   * `wheel`
//   * `load`
//   * `focus`
//   * `resize`
//   * `scroll`
//   * `select`
//   * `dblclick`
//   * `drag / drop`


// First and second events shamelessly stolen from lecture, Mouse enter/leave

const funBus = document.querySelector(".logo-heading");

funBus.addEventListener("mouseenter", () => {
    funBus.style.transform = "scale(1.2)";
    funBus.style.transition = "all 0.3s";
    funBus.innerHTML = "Don't start with me Harold";
});

funBus.addEventListener("mouseleave", () => {
    funBus.style.transform = "scale(1.0)";
    funBus.innerHTML = "That's what I thought Harold";
});



// 3rd, frustrating scrolling

const scrollBarShenanigans = document.querySelector('body');
scrollBarShenanigans.addEventListener('wheel', () => {
alert('MY EYES ARE UP HERE HAROLD');
});


// 4TH, keypress and another alert

const keyboard = document.querySelector("body");
keyboard.addEventListener("keydown", () => {
alert("DO NOT PUSH MY BUTTONS TODAY HAROLD I'M WARNING YOU");
});

// 5th, more of the home life of Harold

window.addEventListener('load', () => alert('DO NOT RUSH ME HAROLD I AM DOING MY BEST'));

// 6th, and a bit more on top of that

window.addEventListener("resize", () => {
    alert("IF YOU CANNOT ACCEPT MY SIZE THEN YOU CAN JUST GO STAY WITH ONE OF THOSE SLIM NEW SITES I ALWAYS SEE YOU DROOLING OVER")
});

// 7th, very reduntantly coded mouse down/up event

const gottaGetAway = document.querySelector('.destination');
gottaGetAway.addEventListener('mousedown', (event) => {

    gottaGetAway.style.transform = 'scale(1.3)';
    gottaGetAway.style.transition = 'transform 1s';
});

const GottaGetAway = document.querySelector('.destination');
gottaGetAway.addEventListener('mouseup', (event) => {

gottaGetAway.style.transform = 'scale(1)';
gottaGetAway.style.transition = 'transform 1s';
});



// 8th and 9th

let image = document.querySelectorAll('img')

let page = document.querySelector('body')

image.forEach(pic => {
  pic.addEventListener('dblclick', (e) => {
    e.stopPropagation()
    pic.style.border = '3px solid brown'
  })
});

page.addEventListener('dblclick', () => page.style.backgroundColor = 'black');
page.addEventListener('dblclick', () => alert('You just HAD to push me didnt you harold'));

// 10

page.addEventListener('copy', () => alert('YOU WILL NEVER FIND A COPY OF ME HAROLD'))






// const dontEvenLook = document.querySelector(img);
// dontEvenLook.addEventListener("mouseover", () => {

// }





// Note: Drag and drop is a bit more advanced than the others: it's not actually a single type of event but several types that need to work together.

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
// * [ ] Stop the navigation items from refreshing the page by using `preventDefault()`

// ### Task 3: Stretch

// * [ ] Go look at [GSAP](https://greensock.com/) and implement the animations found in that library with your custom events.

// #### Stretch assignment

// * [ ] Take a look at the [stretch assignment](stretch-assignment) and follow the instructions in the read me file.

// ## Submission Format

// **Follow these steps for completing your project.**

// * [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's  Repo). **Please don't merge your own pull request**
