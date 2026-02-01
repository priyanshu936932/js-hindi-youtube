# Project 03 - Digital Clock

A real-time digital clock that displays your local time, updating every second. Built with HTML, CSS, and JavaScript using `setInterval()` for live updates.

## Features
- Displays current local time in HH:MM:SS format
- Updates automatically every second
- Styled with orange background clock display
- Dark theme UI

## Files
- `index.html` – page structure and styling
- `chaiaurcode.js` – clock logic with setInterval

## How It Works
The clock uses JavaScript's `Date` object and `toLocaleTimeString()` method to get the current time, then updates the display every 1000ms (1 second) using `setInterval()`.

```javascript
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## How to Use
1. Open `index.html` in a browser
2. The clock will automatically display and update your local time

## Key Concepts
- `Date()` object for time access
- `setInterval()` for repeated execution
- `toLocaleTimeString()` for formatted time display
- DOM manipulation with `getElementById()` and `innerHTML`
