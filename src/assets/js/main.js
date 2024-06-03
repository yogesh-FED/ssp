import $ from "jquery";

/**
 * Easy on scroll event listener
 */
const onscroll = (el, listener) => {
  el.addEventListener("scroll", listener);
};

/**
 * Back to top button
 */
let backtotop = document.getElementsByClassName(".back-to-top");
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      $(".back-to-top").addClass("active");
    } else {
      $(".back-to-top").removeClass("active");
    }
  };
  window.addEventListener("load", toggleBacktotop);
  onscroll(document, toggleBacktotop);
}

/**
 * Header fixed top on scroll
 */
let selectHeader = document.getElementById("#header");
if (selectHeader) {
  let headerOffset = selectHeader.offsetTop;
  let nextElement = document
    .getElementById("#header")
    .parent()
    .next()
    .find("#hero");
  const headerFixed = () => {
    if (headerOffset - window.scrollY <= 0) {
      $("#header").addClass("fixed-top");
      nextElement.addClass("scrolled-offset");
    } else {
      $("#header").removeClass("fixed-top");
      nextElement.removeClass("scrolled-offset");
    }
  };
  window.addEventListener("load", headerFixed);
  onscroll(document, headerFixed);
}

/**
 * Preloader
 */
let preloader = document.getElementById("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}
