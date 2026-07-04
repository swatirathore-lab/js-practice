
# DOM Events & Event Listeners - jspart10

## 1. Selecting Elements
```js
let btn = document.querySelector("button");   // selects FIRST button
let btns = document.querySelectorAll("button"); // selects ALL buttons (NodeList)
```

## 2. Ways to Handle Events

### Method 1 — onclick (old way)
```js
btn.onclick = sayHello;
```
❌ Problem: can only assign ONE function — second one overwrites first

### Method 2 — addEventListener (modern way)
```js
btn.addEventListener("click", sayHello);
btn.addEventListener("click", sayName);
```
✅ Both functions run on single click — nothing gets overwritten

---

## 3. addEventListener Syntax
```js
element.addEventListener("eventName", function() {
    // code to run when event happens
});
```
- First argument  → event name (string) — "click", "mouseenter" etc.
- Second argument → function to run (callback)

---

## 4. Common Events
| Event | When it fires |
|-------|--------------|
| `click` | user clicks element |
| `mouseenter` | mouse hovers over element |

---

## 5. Activity — Random Color Generator

### Logic breakdown:
```js
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let randomColor = getRandomColor();      // step 1: generate color
    
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor; // step 2: apply as background
    div.innerText = randomColor;             // step 3: show rgb value as text
});
```

### getRandomColor() function:
```js
function getRandomColor() {
    let red   = Math.floor(Math.random() * 255);  // 0-254
    let green = Math.floor(Math.random() * 255);  // 0-254
    let blue  = Math.floor(Math.random() * 255);  // 0-254

    let color = `rgb(${red}, ${green}, ${blue})`; // template literal
    return color;  // returns string like "rgb(208, 21, 156)"
}
```
- `Math.random()` → gives decimal between 0 and 1
- `* 255` → scales it to 0-255 range
- `Math.floor()` → removes decimal, gives whole number
- `rgb(r, g, b)` → CSS color format

---

## 6. Bugs to Remember
| Bug | Fix |
|-----|-----|
| `text-align: centre` | CSS mein `center` hota hai, `centre` nahi |
| `querySelector("h3")` but no h3 in HTML | selector aur HTML element match karo |
| `margin: auto` nahi diya div ko | block elements ko center karne ke liye `margin: 0 auto` |