(function(){
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var cursor = document.getElementById("cursorDot");
  if (cursor && window.matchMedia("(hover:hover) and (pointer:fine)").matches) {
    var mx = 0, my = 0, cx = 0, cy = 0;
    window.addEventListener("mousemove", function(e){
      mx = e.clientX; my = e.clientY;
    });
    (function raf(){
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      cursor.style.transform = "translate(" + cx + "px," + cy + "px) translate(-50%,-50%)";
      requestAnimationFrame(raf);
    })();

    document.querySelectorAll("a, button").forEach(function(el){
      el.addEventListener("mouseenter", function(){ cursor.classList.add("is-active"); });
      el.addEventListener("mouseleave", function(){ cursor.classList.remove("is-active"); });
    });
  } else if (cursor) {
    cursor.style.display = "none";
  }

  var header = document.getElementById("siteHeader");
  var darkSections = document.querySelectorAll(".work, .education, .contact");
  if (header && darkSections.length) {
    var headerObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting && entry.intersectionRatio > 0.15) {
          header.classList.add("on-dark");
        }
      });
      var anyDarkVisible = false;
      darkSections.forEach(function(sec){
        var rect = sec.getBoundingClientRect();
        if (rect.top < 90 && rect.bottom > 90) anyDarkVisible = true;
      });
      if (!anyDarkVisible) header.classList.remove("on-dark");
    }, { threshold: [0, 0.15, 0.5, 1] });

    darkSections.forEach(function(sec){ headerObserver.observe(sec); });

    window.addEventListener("scroll", function(){
      var anyDarkVisible = false;
      darkSections.forEach(function(sec){
        var rect = sec.getBoundingClientRect();
        if (rect.top < 90 && rect.bottom > 90) anyDarkVisible = true;
      });
      header.classList.toggle("on-dark", anyDarkVisible);
    }, { passive: true });
  }

  var menuToggle = document.getElementById("menuToggle");
  var mobileNav = document.getElementById("mobileNav");
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function(){
      var isOpen = mobileNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    mobileNav.querySelectorAll("a").forEach(function(link){
      link.addEventListener("click", function(){
        mobileNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var scrollCue = document.getElementById("scrollCue");
  if (scrollCue) {
    scrollCue.addEventListener("click", function(){
      var target = document.getElementById("about");
      if (target) target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  var revealTargets = document.querySelectorAll(
    ".timeline-item, .skill-group, .project, .edu-item, .about-grid, .fact-list"
  );
  revealTargets.forEach(function(el){ el.setAttribute("data-reveal", ""); });

  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    var revealObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

    revealTargets.forEach(function(el){ revealObserver.observe(el); });
  } else {
    revealTargets.forEach(function(el){ el.classList.add("is-visible"); });
  }

})();