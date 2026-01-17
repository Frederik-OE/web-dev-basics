# React Fundamentals

This folder contains a basic React application using TypeScript. React is a JavaScript library that helps you build user interfaces using components.

## Getting Started

1. Install dependencies: `npm install`
2. Start the development server: `npm dev`
3. Open your browser to `http://localhost:3000`

## Your First Task

Follow these steps to practice working with React components, JSX, and event handling:

### Step 1: Add a Button (JSX)
1. Open `src/App.tsx`
2. Add a `<button>` element inside the component's return statement
3. Give it some text, like "Click Me!"

**JSX Example:**
```tsx
function App() {
  return (
    <div className="App">
      <h1>Welcome to React!</h1>
      <button>Click Me!</button>
    </div>
  );
}
```

### Step 2: Style the Button (CSS)
1. Open `src/App.css`
2. Add CSS rules to style your button:
   - Set a different background color (e.g., `background-color: #4CAF50;`)
   - Set a different text color (e.g., `color: white;`)
   - You can also add padding, border-radius, or other properties to make it look nice!

**CSS Example:**
```css
button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
```

### Step 3: Add Click Functionality (React Event Handler)
1. Open `src/App.tsx`
2. Add an `onClick` handler to your button
3. Create a function that shows an alert when the button is clicked

**React Event Handler Example:**
```tsx
function App() {
  const handleClick = () => {
    alert('Button clicked! React is working.');
  };

  return (
    <div className="App">
      <h1>Welcome to React!</h1>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}
```

**Note:** In React, we use `onClick` (camelCase) instead of `onclick`. Event handlers are functions that you pass as props to JSX elements.

## Task 2: Simple Todo Checkbox

Create a simple todo item with a checkbox that can be checked or unchecked using React state.

### Step 1: Add a Checkbox with Text (JSX)
1. Open `src/App.tsx`
2. Add a checkbox input element
3. Add some text next to it (like a todo item, e.g., "Learn React")

**JSX Checkbox Example:**
```tsx
<label>
  <input type="checkbox" />
  Learn React
</label>
```

### Step 2: Use State to Track Checked Status (React Hooks)
1. Import `useState` from React at the top of your file
2. Create a state variable to track whether the checkbox is checked
3. Add an `onChange` handler to update the state when the checkbox is clicked
4. Connect the checkbox's `checked` attribute to your state

**React State and Event Handlers:**

```tsx
import React, { useState } from 'react';

function App() {
  // useState creates a state variable and a function to update it
  // Start with false (unchecked)
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    // Toggle the checked state
    setIsChecked(!isChecked);
  };

  return (
    <div className="App">
      <label>
        <input 
          type="checkbox" 
          checked={isChecked}
          onChange={handleChange}
        />
        Learn React
      </label>
    </div>
  );
}
```

**Key React Concepts:**
- **`useState`**: A React Hook that lets you add state to your component. It returns an array with the current value and a function to update it.
- **`onChange`**: An event handler that fires when a checkbox is clicked. We use it to update our state.
- **Controlled Components**: In React, checkboxes are "controlled" when their `checked` attribute comes from state and updates through `onChange` handlers.
- **Boolean State**: For checkboxes, we typically use `true`/`false` (boolean) values to represent checked/unchecked states.

## Task 3: Create a Todo Component

Learn how to create reusable components in React by building a Todo component that can be used multiple times.

### Step 1: Create a Todo Component Function
1. Create a new file called `Todo.tsx` in the `src` folder
2. Create a function component called `Todo` that returns some JSX
3. Export the component so it can be used in other files

**Simple Component Example:**
```tsx
// Example of a simple component structure
function Greeting() {
  return <h2>Hello!</h2>;
}

export default Greeting;
```

**Your Task:** Create a `Todo` component that returns a `<div>` with some placeholder content (you'll add the real content in the next step).

### Step 2: Add a Title Property (Props)
1. Add a `title` parameter to your Todo component function
2. Use TypeScript to type the props (create an interface or type for the props)
3. Display the `title` prop inside your component's JSX

**Props Example:**
```tsx
// How to define and use props in a component
interface GreetingProps {
  name: string;
}

function Greeting({ name }: GreetingProps) {
  return <h2>Hello, {name}!</h2>;
}

// Usage: <Greeting name="Alice" />
```

**Your Task:** 
- Create an interface for Todo props with a `title` property of type `string`
- Use the `title` prop in your Todo component's JSX
- You can display it as text or in a heading

### Step 3: Use the Todo Component Multiple Times
1. Import your `Todo` component in `App.tsx`
2. Render multiple `<Todo />` components, each with a different `title` prop
3. Pass different todo titles to each component

**Multiple Components Example:**
```tsx
import Greeting from './Greeting';

function App() {
  return (
    <div className="App">
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
}
```

**Your Task:** 
- Import `Todo` in `App.tsx`
- Add at least 3 `<Todo title="..." />` components with different titles
- Each component should display its own title

**Key React Concepts:**
- **Components**: Functions that return JSX. They make your code reusable and organized.
- **Props**: Properties passed to components. They allow you to customize each component instance.
- **TypeScript Props**: Use interfaces or types to define what props a component expects.
- **Component Reusability**: Once you create a component, you can use it multiple times with different props.

## Files

- `src/App.tsx` - The main React component (this is where you'll write most of your code)
- `src/App.css` - The CSS styling for the App component
- `src/index.tsx` - The entry point that renders the App component
- `src/index.css` - Global CSS styles

## Key Differences from Vanilla JavaScript

- **JSX instead of HTML**: React uses JSX, which looks like HTML but is actually JavaScript
- **Components**: Code is organized into reusable components (functions that return JSX)
- **State**: Instead of directly manipulating the DOM, React uses state to manage data
- **Event Handlers**: Use `onClick`, `onChange`, etc. (camelCase) instead of `addEventListener`
- **No getElementById**: React manages the DOM for you - just update state and React updates the UI
