# JavaScript DOM Manipulation — Complete Notes

---

## 1. Introduction

**DOM (Document Object Model)** is how JavaScript "sees" and interacts with an HTML page. When a browser loads an HTML file, it converts the HTML into a tree-like structure of objects — this tree is the DOM. JavaScript can then read, change, add, or delete parts of this tree, which is why a webpage can update *without* reloading.

Think of HTML as the blueprint, and the DOM as the actual living structure built from that blueprint that JS can poke and modify.

---

## 2. What is DOM?

The DOM represents your entire HTML document as a tree of **nodes** — every tag (`<div>`, `<p>`, `<h1>`) becomes a node, and nodes can have parent/child/sibling relationships.

```
document
 └── html
      ├── head
      └── body
           ├── h1
           ├── div
           │    ├── h4
           │    └── ul
           └── script
```

`document` is the entry point — every DOM operation in JS starts from `document`.

---

## 3. Selecting Elements

### a) Selecting Element by ID

```javascript
document.getElementById("mainImg");
```
Returns a **single element** (IDs are supposed to be unique on a page).

### b) Selecting Elements by Class Name

```javascript
let smallImages = document.getElementsByClassName("oldImg");
for (let i = 0; i < smallImages.length; i++) {
    smallImages[i].src = "assets/spiderman_img.png";
    console.log(`value of image no. ${i} is changed`);
}
```

**What's happening:**
- `getElementsByClassName` returns an **HTMLCollection** (array-like, but not a real array) of ALL elements with that class.
- We loop through it with a normal `for` loop and change the `src` of each one.

**Output (console):**
```
value of image no. 0 is changed
value of image no. 1 is changed
value of image no. 2 is changed
```
(and all three images with class `oldImg` visually change to `spiderman_img.png`)

### c) Selecting Elements by Tag Name

```javascript
document.getElementsByTagName("a");
```
Returns all `<a>` tags on the page as an HTMLCollection — same idea as class name selection, just matching by tag instead.

---

## 4. Query Selectors

`querySelector` and `querySelectorAll` are the **modern, more flexible** way to select elements — they accept **CSS selector syntax**, so you use the same patterns you'd use in a `.css` file.

```javascript
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelector("div a"));
console.dir(document.querySelectorAll("div a"));
```

| You want to select... | Selector string |
|---|---|
| a tag like `<h1>` | `"h1"` |
| an element with `id="mainImg"` | `"#mainImg"` |
| elements with `class="oldImg"` | `".oldImg"` |
| an `<a>` tag nested inside a `<div>` | `"div a"` |

**Key difference:**
- `querySelector("...")` → returns only the **first match**
- `querySelectorAll("...")` → returns **all matches**, as a NodeList

**Common bug to watch for:** `document.querySelector("hi")` looks for a literal `<hi>` tag (which doesn't exist), NOT the `<h1>` element. `"hi"` and `h1` look similar but are completely different selectors — this returns `null`, not an error.

`console.dir()` vs `console.log()`: `console.dir()` shows the full object/properties view of an element (useful to inspect all its attributes), while `console.log()` on a DOM element usually shows it as rendered HTML in the console.

---

## 5. Setting Content in Objects

Once you've selected an element, you can change what's *inside* it:

```javascript
element.innerText = "New text here";   // sets plain text
element.innerHTML = "<b>Bold text</b>"; // sets HTML (parses tags too)
```

- `innerText` → only text, ignores/escapes any HTML tags inside the string
- `innerHTML` → parses HTML tags inside the string (more powerful, but be careful — this is how XSS vulnerabilities happen if you're inserting user input)

---

## 6. Manipulating Attributes

You can directly get/set an element's attributes as JS properties:

```javascript
img.src = "newImage.png";
link.href = "https://example.com";
input.value = "some text";
```

Or generically using:
```javascript
element.setAttribute("src", "newImage.png");
element.getAttribute("src");
element.removeAttribute("src");
```

This is exactly what happened in the class-name example above — `smallImages[i].src = "assets/spiderman_img.png"` is directly setting the `src` attribute.

---

## 7. Manipulating Style (with style attribute)

```javascript
let links = document.querySelectorAll(".box a");
for (let i = 0; i < links.length; i++) {
    links[i].style.color = "green";
}
```

**Important bug note from your own code:** you had written `links[i].computedStyleMap.color` — that's incorrect. `computedStyleMap` is a *read-only method* used for reading final computed styles, not for setting styles. To directly set a style property, you always use `.style.propertyName`:

```javascript
links[i].style.color = "green";   // ✅ correct way
```

Style properties in JS use **camelCase** instead of CSS's kebab-case:
| CSS | JavaScript |
|---|---|
| `background-color` | `backgroundColor` |
| `font-size` | `fontSize` |
| `border-radius` | `borderRadius` |

---

## 8. classList Property

Instead of manually setting individual style properties, it's usually cleaner to toggle **CSS classes** on/off:

```javascript
element.classList.add("red");       // adds a class
element.classList.remove("red");    // removes a class
element.classList.toggle("red");    // adds if absent, removes if present
element.classList.contains("red");  // returns true/false
```

This is exactly the pattern used in your practice code:

```javascript
para1.classList.add("red");
H3.classList.add("blue");
div.classList.add("box");
```

Combined with your CSS:
```css
.red {
  color: red;
}
.blue {
  color: blue;
}
.box {
  border: 1px solid black;
  background-color: pink;
}
```

This means whatever styling is defined in your `.red`, `.blue`, or `.box` CSS classes gets applied to the element the moment you `.add()` that class name — no inline style code needed. This is the preferred, cleaner approach over direct `.style.property` manipulation for anything beyond quick one-off changes.

---

## 9. Navigation on Page

Once you have one element selected, you can "walk" the DOM tree relative to it:

```javascript
element.parentElement;       // the element's parent
element.children;            // all direct child elements
element.firstElementChild;   // first child
element.lastElementChild;    // last child
element.nextElementSibling;  // next sibling element
element.previousElementSibling; // previous sibling element
```

This is useful when you've selected one element but actually need to modify something near it in the tree, without writing a whole new selector.

---

## 10. Adding Elements on Page

This is the core of your **Practice Questions** code. Two-step pattern:
1. **Create** the element with `document.createElement("tagname")`
2. **Insert** it into the DOM with `.append()` (or `.appendChild()`)

### Practice Q (a) — Red paragraph

```javascript
let para1 = document.createElement("p");
para1.innerText = "Hey I'm red";
document.querySelector("body").append(para1);
para1.classList.add("red");
```

**Step by step:**
1. `createElement("p")` → creates a `<p>` element **in memory** (not visible yet, not attached to the page)
2. `.innerText = "Hey I'm red"` → sets its text content
3. `.append(para1)` → attaches it to the `<body>`, so now it appears on the actual page
4. `.classList.add("red")` → applies the `.red` CSS class (text turns red)

**Output (rendered on page):**
```html
<p class="red">Hey I'm red</p>
```
Displayed in **red** text, because of the `.red { color: red; }` CSS rule.

### Practice Q (b) — Blue H3

```javascript
let H3 = document.createElement("h3");
H3.innerText = "Hey I'm blue H3";
document.querySelector("body").append(H3);
H3.classList.add("blue");
```

Same exact pattern, different tag (`h3`) and class (`blue`).

**Output:**
```html
<h3 class="blue">Hey I'm blue H3</h3>
```
Displayed as a heading-sized text, in **blue**.

### Practice Q (c) — Nested div with h1 + p inside

```javascript
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a div";
para2.innerText = "ME TOO!";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").append(div);
```

**Step by step (this is the important one — building a nested structure):**
1. Create three separate elements: `div`, `h1`, `para2` — all still just floating in memory, unconnected
2. Set text on `h1` and `para2`
3. `div.append(h1)` → puts `h1` INSIDE `div` (not into the body yet — just into the `div` element itself)
4. `div.append(para2)` → puts `para2` INSIDE `div` too, after `h1`
5. `div.classList.add("box")` → styles the div (border + pink background, from your CSS)
6. **Only now** do we attach the whole assembled `div` (with its children already inside) to the body

This order matters — you build the structure piece-by-piece in memory first, THEN attach the finished structure to the page in one go. This is more efficient than attaching each piece separately to the live DOM.

**Output (rendered on page):**
```html
<div class="box">
  <h1>I'm in a div</h1>
  <p>ME TOO!</p>
</div>
```
Displayed with a **1px black border** and **pink background** (from `.box` CSS), containing a heading "I'm in a div" followed by a paragraph "ME TOO!".

---

## 11. Removing Elements from Page

```javascript
element.remove();               // removes the element itself
parentElement.removeChild(childElement); // older way, removes a specific child
```

`.remove()` is the modern, simpler syntax — directly call it on the element you want gone.

---

## 12. Full Summary Table

| Task | Method |
|---|---|
| Select by ID | `getElementById("id")` |
| Select by class | `getElementsByClassName("class")` |
| Select by tag | `getElementsByTagName("tag")` |
| Select (CSS-style, first match) | `querySelector("selector")` |
| Select (CSS-style, all matches) | `querySelectorAll("selector")` |
| Set text | `.innerText` |
| Set HTML | `.innerHTML` |
| Get/set attribute | `.getAttribute()` / `.setAttribute()` |
| Set style directly | `.style.property = value` |
| Add/remove/toggle class | `.classList.add/remove/toggle()` |
| Create new element | `document.createElement("tag")` |
| Insert into DOM | `.append()` |
| Remove from DOM | `.remove()` |
| Move to parent/child/sibling | `.parentElement`, `.children`, `.nextElementSibling`, etc. |

---

## Key Takeaways / Common Mistakes (from your own code)

1. **`computedStyleMap` vs `.style`** — `computedStyleMap` reads final computed CSS values; it is NOT used to set styles. Always use `.style.propertyName = value` to set styles directly via JS.
2. **`querySelector("hi")` ≠ `querySelector("h1")`** — a typo-looking string that matches a non-existent tag silently returns `null` instead of throwing an error. Always double check selector strings.
3. **Order of building nested elements matters** — create all pieces first, nest them together (`div.append(h1)`), and only attach the fully-built parent to the `body` at the end. This avoids multiple unnecessary re-renders of the live page.
4. **HTMLCollection (from `getElementsByClassName`/`getElementsByTagName`) vs NodeList (from `querySelectorAll`)** — both are array-like and loopable with a normal `for` loop, but HTMLCollections update live if the DOM changes, while NodeLists (from querySelectorAll) are a static snapshot.
