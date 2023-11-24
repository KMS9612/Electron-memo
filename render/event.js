document.addEventListener("DOMContentLoaded", function () {
  const x_mark = document.querySelector(".x_mark");
  x_mark.addEventListener("click", function () {
    ipcRenderer.send("quit-app");
  });
});
