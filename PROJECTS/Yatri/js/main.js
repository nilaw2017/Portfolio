// document.querySelector(".nav-top").style.backgroundColor="rgba(10,10,10,0.3)";

// document.querySelector(".nav-top")

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (window.scrollY >= 520 && window.scrollY <= 1482) {
    document.querySelector(".elegance").style.transition = "1s";
    document.querySelector(".elegance").style.opacity = "1";
    document.querySelector(".elegance").style.top = "50%";
  } else {
    document.querySelector(".elegance").style.opacity = "0";
    document.querySelector(".elegance").style.top = "70%";
  }

  if (window.scrollY >= 1596 && window.scrollY <= 2530) {
    document.querySelector(".power-train").style.transition = "1s";
    document.querySelector(".power-train").style.opacity = "1";
    document.querySelector(".power-train").style.transform = "translateY(0)";
  } else {
    document.querySelector(".power-train").style.opacity = "0";
    document.querySelector(".power-train").style.transform = "translateY(200px)";
  }

  if (window.scrollY >= 2100 && window.scrollY <= 3100) {
    document.querySelector(".console-img").style.transition = "1s";
    document.querySelector(".console-img").style.opacity = "1";
    document.querySelector(".console-img").style.transform = "translateY(0)";
  } else {
    document.querySelector(".console-img").style.opacity = "0";
    document.querySelector(".console-img").style.transform = "translateY(200px)";
  }

  if (window.scrollY >= 2200 && window.scrollY <= 3200) {
    document.querySelector(".console-info").style.transition = "1s";
    document.querySelector(".console-info").style.opacity = "1";
    document.querySelector(".console-info").style.transform = "translateY(0)";
  } else {
    document.querySelector(".console-info").style.opacity = "0";
    document.querySelector(".console-info").style.transform = "translateY(200px)";
  }

  if (window.scrollY >= 2700 && window.scrollY <= 3700) {
    document.querySelector(".video-anim").style.transition = "1s";
    document.querySelector(".video-anim").style.opacity = "1";
    document.querySelector(".video-anim").style.transform = "translateY(0)";
  } else {
    document.querySelector(".video-anim").style.opacity = "0";
    document.querySelector(".video-anim").style.transform = "translateY(200px)";
  }

  if (window.scrollY >= 2800 && window.scrollY <= 3800) {
    document.querySelector(".video-info").style.opacity = "1";
  } else {
    document.querySelector(".video-info").style.opacity = "0";
  }

  if (window.scrollY >= 3400 && window.scrollY <= 4400) {
    document.querySelector(".powertrain").style.transition = "1s";
    document.querySelector(".powertrain").style.opacity = "1";
    document.querySelector(".powertrain").style.transform = "translateY(0)";
  } else {
    document.querySelector(".powertrain").style.opacity = "0";
    document.querySelector(".powertrain").style.transform = "translateY(200px)";
  }

  if (window.scrollY >= 4100 && window.scrollY <= 5100) {
    document.querySelector(".structure").style.transition = "1s";
    document.querySelector(".structure").style.opacity = "1";
    document.querySelector(".structure").style.transform = "translateY(0)";
  } else {
    document.querySelector(".structure").style.opacity = "0";
    document.querySelector(".structure").style.transform = "translateY(200px)";
  }

  if (window.scrollY >= 4600 && window.scrollY <= 5600) {
    document.querySelector(".dimensions").style.transition = "1s";
    document.querySelector(".dimensions").style.opacity = "1";
    document.querySelector(".dimensions").style.transform = "translateY(0)";
  } else {
    document.querySelector(".dimensions").style.opacity = "0";
    document.querySelector(".dimensions").style.transform = "translateY(200px)";
  }

  if (window.scrollY >= 5000 && window.scrollY <= 6000) {
    document.querySelector(".connectivity").style.transition = "1s";
    document.querySelector(".connectivity").style.opacity = "1";
    document.querySelector(".connectivity").style.transform = "translateY(0)";
  } else {
    document.querySelector(".connectivity").style.opacity = "0";
    document.querySelector(".connectivity").style.transform = "translateY(200px)";
  }
}