# Project 01 - Color Scheme Switcher

An interactive color scheme switcher that changes the background color of the page based on button clicks. Built with HTML, CSS, and JavaScript using event listeners.

## Features
- Four color buttons: Grey, Yellow, Red, and Green
- Click any button to change the page background
- Event-driven color switching
- Clean canvas layout

## Files
- `index.html` – page structure
- `style.css` – button and layout styling
- `chaiandcode.js` – event handling logic

## How It Works
The script selects all buttons with the class `.button`, then adds a click event listener to each. When clicked, the background color changes to match the button's ID.

```javascript
buttons.forEach((button) => {
  button.addEventListener('click', function(event) {
    if(event.target.id === "green") {
      body.style.backgroundColor = event.target.id;
    }
    // ... similar for red, grey, yellow
  })
});
```

## How to Use
1. Open `index.html` in a browser
2. Click on any of the four color buttons
3. Watch the page background change to the selected color

## Key Concepts
- `querySelectorAll()` for selecting multiple elements
- `forEach()` for iterating through NodeLists
- Event listeners with `addEventListener()`
- Event object and `event.target` for identifying clicked elements
- Dynamic style manipulation with `style.backgroundColor`
