// JavaScript is connected and working!
console.log('Hello from JavaScript!');

// Simple DOM manipulation example
document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('h1');
    if (heading) {
        heading.addEventListener('click', function() {
            alert('You clicked the heading! JavaScript is working.');
        });
    }
});
