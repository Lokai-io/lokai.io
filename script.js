const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const menu = document.querySelector("[data-menu]");

function setMenu(open) {
  if (!menu || !menuButton) return;
  menu.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  document.body.classList.toggle("menu-open", open);
}

menuButton?.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

menu?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) setMenu(false);
});

window.addEventListener(
  "scroll",
  () => header?.classList.toggle("is-scrolled", window.scrollY > 48),
  { passive: true },
);

window.addEventListener("resize", () => {
  if (window.innerWidth > 720) setMenu(false);
});
