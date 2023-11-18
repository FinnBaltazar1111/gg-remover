window.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("keyup", event => {
    if (event.ctrlKey && event.which === 192) {
      eval(prompt("js to execute:"));
    }
  })
    }, false);
