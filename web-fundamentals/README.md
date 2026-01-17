# Web Fundamentals

This folder contains the basic building blocks of web development: HTML, CSS, and JavaScript.

## Your First Task

Follow these steps to practice working with HTML, CSS, and JavaScript:

### Step 1: Add a Button (HTML)
1. Open `index.html`
2. Add a `<button>` element inside the `<body>` tag
3. Give it some text, like "Click Me!"

### Step 2: Style the Button (CSS)
1. Open `styles.css`
2. Add CSS rules to style your button:
   - Set a different background color (e.g., `background-color: #4CAF50;`)
   - Set a different text color (e.g., `color: white;`)
   - You can also add padding, border-radius, or other properties to make it look nice!

### Step 3: Add Click Functionality (JavaScript)
1. Open `script.js`
2. Add code to make your button show an alert when clicked
3. You'll need to:
   - Select the button element
   - Add an event listener for the 'click' event
   - Show an alert with a message

## Task 2: Simple Calculator

Create a simple calculator that adds two numbers together.

### Step 1: Add Input Fields (HTML)
1. Open `index.html`
2. Add two number input fields
3. Add a plus sign (+) between thme
4. Add a button labeled "Calculate" or "="

**HTML Input Example:**
```html
<!-- This creates a number input field -->
<input type="number" id="firstNumber">

<!-- You can add an "id" attribute to any HTML element to give it a unique identifier -->
<!-- This makes it easy to find and work with that element in JavaScript -->
<input type="number" id="secondNumber">
```

### Step 2: Get Values and Calculate (JavaScript)
1. Open `script.js`
2. Add code to your button's click handler that:
   - Gets the value from the first input field
   - Gets the value from the second input field
   - Converts them to numbers (use `Number()` or `parseInt()`)
   - Adds them together
   - Shows the sum in an alert

**JavaScript Snippets:**

```javascript
// How to get an element by its id:
const firstInput = document.getElementById('firstNumber');

// How to get the value from an input element:
const firstValue = firstInput.value;

// Remember: input values are strings, so convert to numbers for math:
const firstNumber = Number(firstInput.value);
const secondNumber = Number(document.getElementById('secondNumber').value);

// Then you can add them:
const sum = firstNumber + secondNumber;
```

**Tip:** You can add an `id` attribute to any HTML element (like `<button id="myButton">` or `<h1 id="title">`). This gives the element a unique identifier that you can use to find it in JavaScript with `document.getElementById('idName')`.

## Files

- `index.html` - The HTML structure of the page
- `styles.css` - The CSS styling for the page
- `script.js` - The JavaScript functionality

## Getting Started

Simply open `index.html` in your web browser to see your page!
