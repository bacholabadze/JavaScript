(function () {
  const header = document.querySelector("h1");
  document.querySelector("h1").style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    if (header.style.color === "red") header.style.color = "blue";
    else if (header.style.color === "blue") header.style.color = "red";
  });
})();
