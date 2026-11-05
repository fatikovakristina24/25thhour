// Кнопка «Открыть квитанцию» показывает документ поверх страницы.
(function () {
  var modal = document.getElementById("doc");
  var openBtn = document.getElementById("open-doc");
  var closeBtn = document.getElementById("close-doc");

  function open() {
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }
  function close() {
    modal.hidden = true;
    document.body.style.overflow = "";
    openBtn.focus();
  }

  openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  modal.addEventListener("click", function (e) { if (e.target === modal) close(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !modal.hidden) close(); });
  if (location.hash === "#doc") open();
})();
