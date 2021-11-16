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
