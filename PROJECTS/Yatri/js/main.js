// document.querySelector(".nav-top").style.backgroundColor="rgba(10,10,10,0.3)";

// document.querySelector(".nav-top")

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (window.scrollY >= 640 && window.scrollY <= 1160) {
    document.querySelector(".elegance").style.transition = "1s";
    document.querySelector(".elegance").style.opacity = "1";
    document.querySelector(".elegance").style.top = "50%";
  } else {
    document.querySelector(".elegance").style.opacity = "0";
    document.querySelector(".elegance").style.top = "70%";
  }

  if (window.scrollY >= 1320 && window.scrollY <= 2000) {
    document.querySelector(".power-train").style.transition = "1s";
    document.querySelector(".power-train").style.opacity = "1";
    document.querySelector(".power-train").style.transform = "translateY(0)";
  } else {
    document.querySelector(".power-train").style.opacity = "0";
    document.querySelector(".power-train").style.transform = "translateY(200px)";
  }

  if (window.scrollY >= 1779 && window.scrollY <= 2600) {
    document.querySelector(".console-img").style.transition = "1s";
    document.querySelector(".console-img").style.opacity = "1";
    document.querySelector(".console-img").style.transform = "translateY(0)";
  } else {
    document.querySelector(".console-img").style.opacity = "0";
    document.querySelector(".console-img").style.transform = "translateY(200px)";
  }

  if (window.scrollY >= 2000 && window.scrollY <= 2800) {
    document.querySelector(".console-info").style.transition = "1s";
    document.querySelector(".console-info").style.opacity = "1";
    document.querySelector(".console-info").style.transform = "translateY(0)";
  } else {
    document.querySelector(".console-info").style.opacity = "0";
    document.querySelector(".console-info").style.transform = "translateY(200px)";
  }

  if (window.scrollY >= 2527 && window.scrollY <= 3000) {
    document.querySelector(".video-anim").style.transition = "1s";
    document.querySelector(".video-anim").style.opacity = "1";
    document.querySelector(".video-anim").style.transform = "translateY(0)";
  } else {
    document.querySelector(".video-anim").style.opacity = "0";
    document.querySelector(".video-anim").style.transform = "translateY(200px)";
  }

  if (window.scrollY >= 2767 && window.scrollY <= 3348) {
    document.querySelector(".video-info").style.opacity = "1";
  } else {
    document.querySelector(".video-info").style.opacity = "0";
  }

  if (window.scrollY >= 3240 && window.scrollY <= 4048) {
    document.querySelector(".powertrain").style.transition = "1s";
    document.querySelector(".powertrain").style.opacity = "1";
    document.querySelector(".powertrain").style.transform = "translateY(0)";
  } else {
    document.querySelector(".powertrain").style.opacity = "0";
    document.querySelector(".powertrain").style.transform = "translateY(200px)";
  }

  if (window.scrollY >= 3750 && window.scrollY <= 4626) {
    document.querySelector(".structure").style.transition = "1s";
    document.querySelector(".structure").style.opacity = "1";
    document.querySelector(".structure").style.transform = "translateY(0)";
  } else {
    document.querySelector(".structure").style.opacity = "0";
    document.querySelector(".structure").style.transform = "translateY(200px)";
  }

  if (window.scrollY >= 4203 && window.scrollY <= 5200) {
    document.querySelector(".dimensions").style.transition = "1s";
    document.querySelector(".dimensions").style.opacity = "1";
    document.querySelector(".dimensions").style.transform = "translateY(0)";
  } else {
    document.querySelector(".dimensions").style.opacity = "0";
    document.querySelector(".dimensions").style.transform = "translateY(200px)";
  }

  if (window.scrollY >= 4641 && window.scrollY <= 5400) {
    document.querySelector(".connectivity").style.transition = "1s";
    document.querySelector(".connectivity").style.opacity = "1";
    document.querySelector(".connectivity").style.transform = "translateY(0)";
  } else {
    document.querySelector(".connectivity").style.opacity = "0";
    document.querySelector(".connectivity").style.transform = "translateY(200px)";
  }
}