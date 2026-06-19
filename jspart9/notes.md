`document.querySelector("hi")` is looking for an HTML **element whose tag name is `<hi>`** — like `<div>` or `<p>`, but `<hi>`. That tag doesn't exist anywhere in your page (and isn't a real HTML tag at all), so it finds nothing and returns `null`. That's correct, expected behavior — not a bug.

I think you meant to search for the `<h1>` element. The string `"hi"` and the tag `h1` look similar but aren't the same thing.

Try:

```javascript
console.dir(document.querySelector("h1"));
```

A quick refresher on `querySelector` syntax, since it takes CSS selectors:

| You want to select... | Selector string |
|---|---|
| a tag like `<h1>` | `"h1"` |
| an element with `id="mainImg"` | `"#mainImg"` |
| elements with `class="oldImg"` | `".oldImg"` |

So in your file, `document.querySelector("h1")` would correctly grab your `<h1>Spider Man</h1>`, `document.querySelector("#mainImg")` would grab the spiderman image, and `document.querySelector(".oldImg")` would grab the *first* of your three creation images (querySelector only ever returns one element, the first match — for all matches you'd use `querySelectorAll`).