# Enable Contextmenu

## Usage

- Drag this link to your bookmarks.

  <a href="javascript:(function t(n){n.oncontextmenu&&(n.oncontextmenu=null),n.addEventListener(`contextmenu`,e=>{e.stopPropagation()},!0);for(let e=0;e<n.frames.length;e++)t(n.frames[e])})(window);
">Enable Contextmenu</a>

- Click on the bookmarked link whenever you need to enable contextmenu.

## Code

```js
(function enableContextmenu(w) {
  if (w.oncontextmenu) {
    w.oncontextmenu = null;
  }

  w.addEventListener(
    "contextmenu",
    (e) => {
      e.stopPropagation();
    },
    true
  );

  for (let i = 0; i < w.frames.length; i++) {
    enableContextmenu(w.frames[i]);
  }
})(window);

```
