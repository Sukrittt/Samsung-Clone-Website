let display = [0, 0, 0, 0, 0, 0, 0, 0];
let idArray = [
  "mobCont",
  "TvCont",
  "HomeCont",
  "laptopCont",
  "displayCont",
  "smartCont",
  "offerCont",
  "supportCont",
];
let position = 0;

//MOBILE CONTENT
document.getElementById("mobile").addEventListener("mouseover", function (e) {
  if (onePosition(display) > -1) {
    document.getElementById(idArray[onePosition(display)]).style.display =
      "none";
    display[onePosition(display)] = 0;
  }
  document.getElementById("mobCont").style.display = "flex";
  document.getElementById("leftButton1").style.opacity = "0.0";
  document.getElementById("leftButton2").style.opacity = "0.0";
  document.getElementById("rightButton1").style.opacity = "0.0";
  document.getElementById("rightButton2").style.opacity = "0.0";
  display[0] = 1;
});
document.getElementById("close").addEventListener("click", function (e) {
  document.getElementById("mobCont").style.display = "none";
  document.getElementById("leftButton1").style.opacity = "1.0";
  document.getElementById("leftButton2").style.opacity = "1.0";
  document.getElementById("rightButton1").style.opacity = "1.0";
  document.getElementById("rightButton2").style.opacity = "1.0";
});
document.getElementById("mobCont").addEventListener("mouseleave", function (e) {
  if (onePosition(display) > -1) {
    document.getElementById(idArray[onePosition(display)]).style.display =
      "none";
    document.getElementById("leftButton1").style.opacity = "1.0";
    document.getElementById("leftButton2").style.opacity = "1.0";
    document.getElementById("rightButton1").style.opacity = "1.0";
    document.getElementById("rightButton2").style.opacity = "1.0";
    display[onePosition(display)] = 0;
  }
});

//TV CONTENT
document.getElementById("tv").addEventListener("mouseover", function (e) {
  if (onePosition(display) > -1) {
    document.getElementById(idArray[onePosition(display)]).style.display =
      "none";
    display[onePosition(display)] = 0;
  }
  document.getElementById("TvCont").style.display = "flex";
  document.getElementById("leftButton1").style.opacity = "0.0";
  document.getElementById("leftButton2").style.opacity = "0.0";
  document.getElementById("rightButton1").style.opacity = "0.0";
  document.getElementById("rightButton2").style.opacity = "0.0";
  display[1] = 1;
});
document.getElementById("close2").addEventListener("click", function (e) {
  document.getElementById("TvCont").style.display = "none";
  document.getElementById("leftButton1").style.opacity = "1.0";
  document.getElementById("leftButton2").style.opacity = "1.0";
  document.getElementById("rightButton1").style.opacity = "1.0";
  document.getElementById("rightButton2").style.opacity = "1.0";
});
document.getElementById("TvCont").addEventListener("mouseleave", function (e) {
  if (onePosition(display) > -1) {
    document.getElementById(idArray[onePosition(display)]).style.display =
      "none";
    document.getElementById("leftButton1").style.opacity = "1.0";
    document.getElementById("leftButton2").style.opacity = "1.0";
    document.getElementById("rightButton1").style.opacity = "1.0";
    document.getElementById("rightButton2").style.opacity = "1.0";
    display[onePosition(display)] = 0;
  }
});

//Home Appliances
document
  .getElementById("homeAppliances")
  .addEventListener("mouseover", function (e) {
    if (onePosition(display) > -1) {
      document.getElementById(idArray[onePosition(display)]).style.display =
        "none";
      display[onePosition(display)] = 0;
    }
    document.getElementById("HomeCont").style.display = "flex";
    document.getElementById("leftButton1").style.opacity = "0.0";
    document.getElementById("leftButton2").style.opacity = "0.0";
    document.getElementById("rightButton1").style.opacity = "0.0";
    document.getElementById("rightButton2").style.opacity = "0.0";
    display[2] = 1;
  });
document.getElementById("close3").addEventListener("click", function (e) {
  document.getElementById("HomeCont").style.display = "none";
  document.getElementById("leftButton1").style.opacity = "1.0";
  document.getElementById("leftButton2").style.opacity = "1.0";
  document.getElementById("rightButton1").style.opacity = "1.0";
  document.getElementById("rightButton2").style.opacity = "1.0";
});
document
  .getElementById("HomeCont")
  .addEventListener("mouseleave", function (e) {
    if (onePosition(display) > -1) {
      document.getElementById(idArray[onePosition(display)]).style.display =
        "none";
      document.getElementById("leftButton1").style.opacity = "1.0";
      document.getElementById("leftButton2").style.opacity = "1.0";
      document.getElementById("rightButton1").style.opacity = "1.0";
      document.getElementById("rightButton2").style.opacity = "1.0";
      display[onePosition(display)] = 0;
    }
  });

//Laptop Content
document.getElementById("laptop").addEventListener("mouseover", function (e) {
  if (onePosition(display) > -1) {
    document.getElementById(idArray[onePosition(display)]).style.display =
      "none";
    display[onePosition(display)] = 0;
  }
  document.getElementById("laptopCont").style.display = "flex";
  document.getElementById("leftButton1").style.opacity = "0.0";
  document.getElementById("leftButton2").style.opacity = "0.0";
  document.getElementById("rightButton1").style.opacity = "0.0";
  document.getElementById("rightButton2").style.opacity = "0.0";
  display[3] = 1;
});
document.getElementById("close4").addEventListener("click", function (e) {
  document.getElementById("laptopCont").style.display = "none";
  document.getElementById("leftButton1").style.opacity = "1.0";
  document.getElementById("leftButton2").style.opacity = "1.0";
  document.getElementById("rightButton1").style.opacity = "1.0";
  document.getElementById("rightButton2").style.opacity = "1.0";
});
document
  .getElementById("laptopCont")
  .addEventListener("mouseleave", function (e) {
    if (onePosition(display) > -1) {
      document.getElementById(idArray[onePosition(display)]).style.display =
        "none";
      document.getElementById("leftButton1").style.opacity = "1.0";
      document.getElementById("leftButton2").style.opacity = "1.0";
      document.getElementById("rightButton1").style.opacity = "1.0";
      document.getElementById("rightButton2").style.opacity = "1.0";
      display[onePosition(display)] = 0;
    }
  });
//Display Content
document.getElementById("display").addEventListener("mouseover", function (e) {
  if (onePosition(display) > -1) {
    document.getElementById(idArray[onePosition(display)]).style.display =
      "none";
    display[onePosition(display)] = 0;
  }
  document.getElementById("displayCont").style.display = "flex";
  document.getElementById("leftButton1").style.opacity = "0.0";
  document.getElementById("leftButton2").style.opacity = "0.0";
  document.getElementById("rightButton1").style.opacity = "0.0";
  document.getElementById("rightButton2").style.opacity = "0.0";
  display[4] = 1;
});
document.getElementById("close5").addEventListener("click", function (e) {
  document.getElementById("displayCont").style.display = "none";
  document.getElementById("leftButton1").style.opacity = "1.0";
  document.getElementById("leftButton2").style.opacity = "1.0";
  document.getElementById("rightButton1").style.opacity = "1.0";
  document.getElementById("rightButton2").style.opacity = "1.0";
});
document
  .getElementById("displayCont")
  .addEventListener("mouseleave", function (e) {
    if (onePosition(display) > -1) {
      document.getElementById(idArray[onePosition(display)]).style.display =
        "none";
      document.getElementById("leftButton1").style.opacity = "1.0";
      document.getElementById("leftButton2").style.opacity = "1.0";
      document.getElementById("rightButton1").style.opacity = "1.0";
      document.getElementById("rightButton2").style.opacity = "1.0";
      display[onePosition(display)] = 0;
    }
  });

//SmartThings Content
document.getElementById("smart").addEventListener("mouseover", function (e) {
  if (onePosition(display) > -1) {
    document.getElementById(idArray[onePosition(display)]).style.display =
      "none";
    document.getElementById("leftButton1").style.opacity = "1.0";
    document.getElementById("leftButton2").style.opacity = "1.0";
    document.getElementById("rightButton1").style.opacity = "1.0";
    document.getElementById("rightButton2").style.opacity = "1.0";
    display[onePosition(display)] = 0;
  }
  document.getElementById("smartCont").style.display = "flex";
  document.getElementById("leftButton1").style.opacity = "0.0";
  document.getElementById("leftButton2").style.opacity = "0.0";
  document.getElementById("rightButton1").style.opacity = "0.0";
  document.getElementById("rightButton2").style.opacity = "0.0";
  display[5] = 1;
});
document.getElementById("close6").addEventListener("click", function (e) {
  document.getElementById("smartCont").style.display = "none";
  document.getElementById("leftButton1").style.opacity = "1.0";
  document.getElementById("leftButton2").style.opacity = "1.0";
  document.getElementById("rightButton1").style.opacity = "1.0";
  document.getElementById("rightButton2").style.opacity = "1.0";
});
document
  .getElementById("smartCont")
  .addEventListener("mouseleave", function (e) {
    if (onePosition(display) > -1) {
      document.getElementById(idArray[onePosition(display)]).style.display =
        "none";
      document.getElementById("leftButton1").style.opacity = "1.0";
      document.getElementById("leftButton2").style.opacity = "1.0";
      document.getElementById("rightButton1").style.opacity = "1.0";
      document.getElementById("rightButton2").style.opacity = "1.0";
      display[onePosition(display)] = 0;
    }
  });

//Offer Content
document.getElementById("offer").addEventListener("mouseover", function (e) {
  if (onePosition(display) > -1) {
    document.getElementById(idArray[onePosition(display)]).style.display =
      "none";
    document.getElementById("leftButton1").style.opacity = "1.0";
    document.getElementById("leftButton2").style.opacity = "1.0";
    document.getElementById("rightButton1").style.opacity = "1.0";
    document.getElementById("rightButton2").style.opacity = "1.0";
    display[onePosition(display)] = 0;
  }
  document.getElementById("offerCont").style.display = "flex";
  document.getElementById("leftButton1").style.opacity = "0.0";
  document.getElementById("leftButton2").style.opacity = "0.0";
  document.getElementById("rightButton1").style.opacity = "0.0";
  document.getElementById("rightButton2").style.opacity = "0.0";
  display[6] = 1;
});
document.getElementById("close7").addEventListener("click", function (e) {
  document.getElementById("offerCont").style.display = "none";
  document.getElementById("leftButton1").style.opacity = "1.0";
  document.getElementById("leftButton2").style.opacity = "1.0";
  document.getElementById("rightButton1").style.opacity = "1.0";
  document.getElementById("rightButton2").style.opacity = "1.0";
});
document
  .getElementById("offerCont")
  .addEventListener("mouseleave", function (e) {
    if (onePosition(display) > -1) {
      document.getElementById(idArray[onePosition(display)]).style.display =
        "none";
      document.getElementById("leftButton1").style.opacity = "1.0";
      document.getElementById("leftButton2").style.opacity = "1.0";
      document.getElementById("rightButton1").style.opacity = "1.0";
      document.getElementById("rightButton2").style.opacity = "1.0";
      display[onePosition(display)] = 0;
    }
  });

//Support Content
document.getElementById("support").addEventListener("mouseover", function (e) {
  if (onePosition(display) > -1) {
    document.getElementById(idArray[onePosition(display)]).style.display =
      "none";
    display[onePosition(display)] = 0;
  }
  document.getElementById("supportCont").style.display = "flex";
  document.getElementById("leftButton1").style.opacity = "0.0";
  document.getElementById("leftButton2").style.opacity = "0.0";
  document.getElementById("rightButton1").style.opacity = "0.0";
  document.getElementById("rightButton2").style.opacity = "0.0";
  display[7] = 1;
});
document.getElementById("close8").addEventListener("click", function (e) {
  document.getElementById("supportCont").style.display = "none";
  document.getElementById("leftButton1").style.opacity = "1.0";
  document.getElementById("leftButton2").style.opacity = "1.0";
  document.getElementById("rightButton1").style.opacity = "1.0";
  document.getElementById("rightButton2").style.opacity = "1.0";
});
document
  .getElementById("supportCont")
  .addEventListener("mouseleave", function (e) {
    if (onePosition(display) > -1) {
      document.getElementById(idArray[onePosition(display)]).style.display =
        "none";
      document.getElementById("leftButton1").style.opacity = "1.0";
      document.getElementById("leftButton2").style.opacity = "1.0";
      document.getElementById("rightButton1").style.opacity = "1.0";
      document.getElementById("rightButton2").style.opacity = "1.0";
      display[onePosition(display)] = 0;
    }
  });

//Accessories Content
document
  .getElementById("accessories")
  .addEventListener("mouseover", function (e) {
    if (onePosition(display) > -1) {
      document.getElementById(idArray[onePosition(display)]).style.display =
        "none";
      document.getElementById("leftButton1").style.opacity = "1.0";
      document.getElementById("leftButton2").style.opacity = "1.0";
      document.getElementById("rightButton1").style.opacity = "1.0";
      document.getElementById("rightButton2").style.opacity = "1.0";
      display[onePosition(display)] = 0;
    }
  });

//Business Content
document.getElementById("business").addEventListener("mouseover", function (e) {
  if (onePosition(display) > -1) {
    document.getElementById(idArray[onePosition(display)]).style.display =
      "none";
    document.getElementById("leftButton1").style.opacity = "1.0";
    document.getElementById("leftButton2").style.opacity = "1.0";
    document.getElementById("rightButton1").style.opacity = "1.0";
    document.getElementById("rightButton2").style.opacity = "1.0";
    display[onePosition(display)] = 0;
  }
});
// A method to return the position of 1 in the array.
function onePosition(arr) {
  let pos = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      pos = i;
      break;
    }
  }
  return pos;
}

// Next Slide in every 5 seconds
var counter = 1;
var timeSpan = 4000;
for (let i = 1; i <= 10000; i++) {
  if (counter % 2 != 0) {
    // This will happen when the 2nd Slide is active
    const secondTimeout = setTimeout(secondSlideChange, timeSpan);
    timeSpan += 4000;
  }
  const firstTimeOut = setTimeout(firstSlideChange, timeSpan);
  timeSpan += 4000;
  counter++;
}

//Will Change the display of the slide
document.getElementById("leftButton1").addEventListener("click", function (e) {
  console.log(document.getElementById("firstSlide"));
  document.getElementById("firstSlide").style.display = "none";
  document.getElementById("secondSlide").style.display = "block";

  document.getElementById("secondSlide").classList.add("w3-container");
  document.getElementById("secondSlide").classList.add("w3-center");
  document.getElementById("secondSlide").classList.add("w3-animate-opacity");
});
document.getElementById("leftButton2").addEventListener("click", function (e) {
  document.getElementById("firstSlide").style.display = "block";

  document.getElementById("firstSlide").classList.add("w3-container");
  document.getElementById("firstSlide").classList.add("w3-center");
  document.getElementById("firstSlide").classList.add("w3-animate-opacity");

  document.getElementById("secondSlide").style.display = "none";
});

document.getElementById("rightButton1").addEventListener("click", function (e) {
  document.getElementById("firstSlide").style.display = "none";
  document.getElementById("secondSlide").style.display = "block";

  document.getElementById("secondSlide").classList.add("w3-container");
  document.getElementById("secondSlide").classList.add("w3-center");
  document.getElementById("secondSlide").classList.add("w3-animate-opacity");
});
document.getElementById("rightButton2").addEventListener("click", function (e) {
  document.getElementById("firstSlide").style.display = "block";

  document.getElementById("firstSlide").classList.add("w3-container");
  document.getElementById("firstSlide").classList.add("w3-center");
  document.getElementById("firstSlide").classList.add("w3-animate-opacity");

  document.getElementById("secondSlide").style.display = "none";
});

//This function will change slide from 1 --> 2
function firstSlideChange() {
  let firstSlide = document.getElementById("firstSlide");
  let secondSlide = document.getElementById("secondSlide");
  firstSlide.style.display = "none";
  secondSlide.style.display = "block";
  document.getElementById("secondSlide").classList.add("w3-container");
  document.getElementById("secondSlide").classList.add("w3-center");
  document.getElementById("secondSlide").classList.add("w3-animate-opacity");
}

//This function will change slide from 2 --> 1
function secondSlideChange() {
  let firstSlide = document.getElementById("firstSlide");
  let secondSlide = document.getElementById("secondSlide");
  firstSlide.style.display = "block";
  document.getElementById("firstSlide").classList.add("w3-container");
  document.getElementById("firstSlide").classList.add("w3-center");
  document.getElementById("firstSlide").classList.add("w3-animate-opacity");
  secondSlide.style.display = "none";
}

//Will make the display of the Buy Now button block when hovered one the image
document
  .getElementById("highGridOne")
  .addEventListener("mouseover", function (e) {
    document.getElementById("fomoBuy").style.display = "block";
  });
//Will make the display of the Buy Now button none when hovered one the image
document
  .getElementById("highGridOne")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("fomoBuy").style.display = "none";
  });

//Will make the text's display to none and buy now display to block when hovered on the image
document.getElementById("image1").addEventListener("mouseover", function (e) {
  document.getElementById("buyNow").style.display = "block";
  document.getElementById("text3").style.display = "none";
});
document.getElementById("image1").addEventListener("mouseleave", function (e) {
  document.getElementById("buyNow").style.display = "none";
  document.getElementById("text3").style.display = "block";
});

document.getElementById("image3").addEventListener("mouseover", function (e) {
  document.getElementById("buyNow2").style.display = "block";
  document.getElementById("text6").style.display = "none";
});
document.getElementById("image3").addEventListener("mouseleave", function (e) {
  document.getElementById("buyNow2").style.display = "none";
  document.getElementById("text6").style.display = "block";
});

document.getElementById("image2").addEventListener("mouseover", function (e) {
  document.getElementById("buyNow3").style.display = "block";
  document.getElementById("text7").style.display = "none";
});
document.getElementById("image2").addEventListener("mouseleave", function (e) {
  document.getElementById("buyNow3").style.display = "none";
  document.getElementById("text7").style.display = "block";
});

document.getElementById("image4").addEventListener("mouseover", function (e) {
  document.getElementById("buyNow4").style.display = "block";
  document.getElementById("text10").style.display = "none";
});
document.getElementById("image4").addEventListener("mouseleave", function (e) {
  document.getElementById("buyNow4").style.display = "none";
  document.getElementById("text10").style.display = "block";
});

document
  .getElementById("mobileImageOne")
  .addEventListener("mouseover", function (e) {
    document.getElementById("buyNow5").style.display = "block";
    document.getElementById("text13").style.display = "none";
  });
document
  .getElementById("mobileImageOne")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow5").style.display = "none";
    document.getElementById("text13").style.display = "block";
  });

document
  .getElementById("mobileImageTwo")
  .addEventListener("mouseover", function (e) {
    document.getElementById("buyNow6").style.display = "block";
    document.getElementById("text16").style.display = "none";
  });
document
  .getElementById("mobileImageTwo")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow6").style.display = "none";
    document.getElementById("text16").style.display = "block";
  });

document
  .getElementById("mobileImageThree")
  .addEventListener("mouseover", function (e) {
    document.getElementById("buyNow7").style.display = "block";
    document.getElementById("text19").style.display = "none";
  });
document
  .getElementById("mobileImageThree")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow7").style.display = "none";
    document.getElementById("text19").style.display = "block";
  });
document
  .getElementById("mobileImageFour")
  .addEventListener("mouseover", function (e) {
    document.getElementById("buyNow8").style.display = "block";
    document.getElementById("text22").style.display = "none";
  });
document
  .getElementById("mobileImageFour")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow8").style.display = "none";
    document.getElementById("text22").style.display = "block";
  });
document
  .getElementById("mobileImageFive")
  .addEventListener("mouseover", function (e) {
    document.getElementById("buyNow9").style.display = "block";
    document.getElementById("text25").style.display = "none";
  });
document
  .getElementById("mobileImageFive")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow9").style.display = "none";
    document.getElementById("text25").style.display = "block";
  });

document.getElementById("notifyMe").addEventListener("mouseover", function (e) {
  document.getElementById("buyNow10").style.display = "block";
});
document
  .getElementById("notifyMe")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow10").style.display = "none";
  });

document.getElementById("tvImage2").addEventListener("mouseover", function (e) {
  document.getElementById("buyNow11").style.display = "block";
  document.getElementById("text28").style.display = "none";
});
document
  .getElementById("tvImage2")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow11").style.display = "none";
    document.getElementById("text28").style.display = "block";
  });
document.getElementById("tvImage3").addEventListener("mouseover", function (e) {
  document.getElementById("buyNow12").style.display = "block";
  document.getElementById("text31").style.display = "none";
});
document
  .getElementById("tvImage3")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow12").style.display = "none";
    document.getElementById("text31").style.display = "block";
  });

document.getElementById("tvImage4").addEventListener("mouseover", function (e) {
  document.getElementById("buyNow13").style.display = "block";
  document.getElementById("text34").style.display = "none";
});
document
  .getElementById("tvImage4")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow13").style.display = "none";
    document.getElementById("text34").style.display = "block";
  });

document.getElementById("tvImage5").addEventListener("mouseover", function (e) {
  document.getElementById("buyNow14").style.display = "block";
  document.getElementById("text37").style.display = "none";
});
document
  .getElementById("tvImage5")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow14").style.display = "none";
    document.getElementById("text37").style.display = "block";
  });

document
  .getElementById("appImage1")
  .addEventListener("mouseover", function (e) {
    document.getElementById("buyNow15").style.display = "block";
    document.getElementById("text39").style.display = "none";
  });
document
  .getElementById("appImage1")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow15").style.display = "none";
    document.getElementById("text39").style.display = "block";
  });

document
  .getElementById("appImage2")
  .addEventListener("mouseover", function (e) {
    document.getElementById("buyNow16").style.display = "block";
    document.getElementById("text42").style.display = "none";
  });
document
  .getElementById("appImage2")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow16").style.display = "none";
    document.getElementById("text42").style.display = "block";
  });

document
  .getElementById("appImage3")
  .addEventListener("mouseover", function (e) {
    document.getElementById("buyNow17").style.display = "block";
    document.getElementById("text45").style.display = "none";
  });
document
  .getElementById("appImage3")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow17").style.display = "none";
    document.getElementById("text45").style.display = "block";
  });

document
  .getElementById("appImage4")
  .addEventListener("mouseover", function (e) {
    document.getElementById("buyNow18").style.display = "block";
    document.getElementById("text47").style.display = "none";
  });
document
  .getElementById("appImage4")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow18").style.display = "none";
    document.getElementById("text47").style.display = "block";
  });

document
  .getElementById("appImage5")
  .addEventListener("mouseover", function (e) {
    document.getElementById("buyNow19").style.display = "block";
    document.getElementById("text50").style.display = "none";
  });
document
  .getElementById("appImage5")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow19").style.display = "none";
    document.getElementById("text50").style.display = "block";
  });

document
  .getElementById("tabImage1")
  .addEventListener("mouseover", function (e) {
    document.getElementById("buyNow20").style.display = "block";
    document.getElementById("text53").style.display = "none";
  });
document
  .getElementById("tabImage1")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow20").style.display = "none";
    document.getElementById("text53").style.display = "block";
  });

document
  .getElementById("tabImage2")
  .addEventListener("mouseover", function (e) {
    document.getElementById("buyNow21").style.display = "block";
    document.getElementById("text56").style.display = "none";
  });
document
  .getElementById("tabImage2")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow21").style.display = "none";
    document.getElementById("text56").style.display = "block";
  });

document
  .getElementById("tabImage3")
  .addEventListener("mouseover", function (e) {
    document.getElementById("buyNow22").style.display = "block";
    document.getElementById("text59").style.display = "none";
  });
document
  .getElementById("tabImage3")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow22").style.display = "none";
    document.getElementById("text59").style.display = "block";
  });

document
  .getElementById("tabImage4")
  .addEventListener("mouseover", function (e) {
    document.getElementById("buyNow23").style.display = "block";
    document.getElementById("text62").style.display = "none";
  });
document
  .getElementById("tabImage4")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow23").style.display = "none";
    document.getElementById("text62").style.display = "block";
  });

document
  .getElementById("tabImage5")
  .addEventListener("mouseover", function (e) {
    document.getElementById("buyNow24").style.display = "block";
    document.getElementById("text65").style.display = "none";
  });
document
  .getElementById("tabImage5")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow24").style.display = "none";
    document.getElementById("text65").style.display = "block";
  });

document
  .getElementById("galaxyImage1")
  .addEventListener("mouseover", function (e) {
    document.getElementById("buyNow25").style.display = "block";
    document.getElementById("text67").style.display = "none";
  });
document
  .getElementById("galaxyImage1")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow25").style.display = "none";
    document.getElementById("text67").style.display = "block";
  });

document
  .getElementById("galaxyImage2")
  .addEventListener("mouseover", function (e) {
    document.getElementById("buyNow26").style.display = "block";
    document.getElementById("text70").style.display = "none";
  });
document
  .getElementById("galaxyImage2")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow26").style.display = "none";
    document.getElementById("text70").style.display = "block";
  });

document
  .getElementById("galaxyImage3")
  .addEventListener("mouseover", function (e) {
    document.getElementById("buyNow27").style.display = "block";
  });
document
  .getElementById("galaxyImage3")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow27").style.display = "none";
  });

document
  .getElementById("galaxyImage4")
  .addEventListener("mouseover", function (e) {
    document.getElementById("buyNow28").style.display = "block";
  });
document
  .getElementById("galaxyImage4")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow28").style.display = "none";
  });

document
  .getElementById("galaxyImage5")
  .addEventListener("mouseover", function (e) {
    document.getElementById("buyNow29").style.display = "block";
    document.getElementById("text74").style.display = "none";
  });
document
  .getElementById("galaxyImage5")
  .addEventListener("mouseleave", function (e) {
    document.getElementById("buyNow29").style.display = "none";
    document.getElementById("text74").style.display = "block";
  });
//Will Change slides of Week Highlights
let weekArray = [1, 0, 0, 0, 0, 0];
let weekId = [
  "highOne",
  "highTwo",
  "highThree",
  "highFour",
  "highFive",
  "highSix",
];
let weekHeading = [
  "weekNewIn",
  "weekMobile",
  "weekTv",
  "weekAppliances",
  "weekTabs",
  "weekGalaxy",
];

let index = 0;

//When Clicked on New-in in Week Highlights
document.getElementById("weekNewIn").addEventListener("click", function (e) {
  if (onePosition(weekArray) > -1) {
    document.getElementById(weekId[onePosition(weekArray)]).style.display =
      "none";
    document.getElementById(weekHeading[onePosition(weekArray)]).style.border =
      "none";
    weekArray[onePosition(weekArray)] = 0;
  }
  document.getElementById("highOne").style.display = "flex";
  document.getElementById("weekNewIn").style.borderBottom =
    "2px solid rgb(43, 42, 42)";
  weekArray[0] = 1;
});

//When clicekd on Mobile in Week Highlights
document.getElementById("weekMobile").addEventListener("click", function (e) {
  if (onePosition(weekArray) > -1) {
    document.getElementById(weekId[onePosition(weekArray)]).style.display =
      "none";
    document.getElementById(weekHeading[onePosition(weekArray)]).style.border =
      "none";
    weekArray[onePosition(weekArray)] = 0;
  }
  document.getElementById("highTwo").style.display = "flex";
  document.getElementById("weekMobile").style.borderBottom =
    "2px solid rgb(43, 42, 42)";
  weekArray[1] = 1;
});

//When clicekd on TV in Week Highlights
document.getElementById("weekTv").addEventListener("click", function (e) {
  console.log(weekArray);
  if (onePosition(weekArray) > -1) {
    document.getElementById(weekId[onePosition(weekArray)]).style.display =
      "none";
    document.getElementById(weekHeading[onePosition(weekArray)]).style.border =
      "none";
    weekArray[onePosition(weekArray)] = 0;
  }
  document.getElementById("weekTv").style.borderBottom =
    "2px solid rgb(43, 42, 42)";
  document.getElementById("highThree").style.display = "flex";
  weekArray[2] = 1;
  console.log(weekArray);
});

//When clicekd on Appliances in Week Highlights
document
  .getElementById("weekAppliances")
  .addEventListener("click", function (e) {
    console.log(weekArray);
    if (onePosition(weekArray) > -1) {
      document.getElementById(weekId[onePosition(weekArray)]).style.display =
        "none";
      document.getElementById(
        weekHeading[onePosition(weekArray)]
      ).style.border = "none";
      weekArray[onePosition(weekArray)] = 0;
    }
    document.getElementById("weekAppliances").style.borderBottom =
      "2px solid rgb(43, 42, 42)";
    document.getElementById("highFour").style.display = "flex";
    weekArray[3] = 1;
    console.log(weekArray);
  });

//When clicekd on Tabs & Computing in Week Highlights
document.getElementById("weekTabs").addEventListener("click", function (e) {
  console.log(weekArray);
  if (onePosition(weekArray) > -1) {
    document.getElementById(weekId[onePosition(weekArray)]).style.display =
      "none";
    document.getElementById(weekHeading[onePosition(weekArray)]).style.border =
      "none";
    weekArray[onePosition(weekArray)] = 0;
  }
  document.getElementById("weekTabs").style.borderBottom =
    "2px solid rgb(43, 42, 42)";
  document.getElementById("highFive").style.display = "flex";
  weekArray[4] = 1;
  console.log(weekArray);
});

//When clicekd on Galaxy Ecosystem in Week Highlights
document.getElementById("weekGalaxy").addEventListener("click", function (e) {
  console.log(weekArray);
  if (onePosition(weekArray) > -1) {
    document.getElementById(weekId[onePosition(weekArray)]).style.display =
      "none";
    document.getElementById(weekHeading[onePosition(weekArray)]).style.border =
      "none";
    weekArray[onePosition(weekArray)] = 0;
  }
  document.getElementById("highSix").style.display = "flex";
  document.getElementById("weekGalaxy").style.borderBottom =
    "2px solid rgb(43, 42, 42)";
  weekArray[5] = 1;
  console.log(weekArray);
});

// To change the slides of Mobile & Computing
let mobComp = [1, 0, 0, 0, 0];
let slideId = ["slideOne", "slideTwo", "slideThree", "slideFour", "slideFive"];
let slideId2 = ["mobNav1", "mobNav2", "mobNav3", "mobNav4", "mobNav5"];

/*The Logic used for slide animation is that if the user clicks a slide which is
  in the right hand side of the active slide, then 'animate-right' class will be
  used; which means the previous slide will come from the left side and vice
  versa.
*/

//When Clicked Galaxy Z Fold4
document.getElementById("mobNav1").addEventListener("click", function (e) {
  if (onePosition(mobComp) > -1) {
    document.getElementById("slideOne").classList.add("w3-container");
    document.getElementById("slideOne").classList.add("w3-center");
    document.getElementById("slideOne").classList.add("w3-animate-left");
    document.getElementById(slideId[onePosition(mobComp)]).style.display =
      "none";
    document.getElementById(slideId2[onePosition(mobComp)]).style.border =
      "none";
    mobComp[onePosition(mobComp)] = 0;
  }
  document.getElementById("slideOne").style.display = "block";
  document.getElementById("mobNav1").style.borderBottom =
    "2px solid rgb(43, 42, 42)";
  mobComp[0] = 1;
});

//When Clicked on Galaxy Z Flip4
document.getElementById("mobNav2").addEventListener("click", function (e) {
  if (onePosition(mobComp) > -1) {
    if (onePosition(mobComp) > 1) {
      //Remove Right Animation Class
      document.getElementById("slideTwo").classList.remove("w3-container");
      document.getElementById("slideTwo").classList.remove("w3-center");
      document.getElementById("slideTwo").classList.remove("w3-animate-right");

      //Add Left Animation Class
      document.getElementById("slideTwo").classList.add("w3-container");
      document.getElementById("slideTwo").classList.add("w3-center");
      document.getElementById("slideTwo").classList.add("w3-animate-left");
    } else {
      //Remove Left Animation Class
      document.getElementById("slideTwo").classList.remove("w3-container");
      document.getElementById("slideTwo").classList.remove("w3-center");
      document.getElementById("slideTwo").classList.remove("w3-animate-left");

      //Add Right Animation Class
      document.getElementById("slideTwo").classList.add("w3-container");
      document.getElementById("slideTwo").classList.add("w3-center");
      document.getElementById("slideTwo").classList.add("w3-animate-right");
    }
    document.getElementById(slideId[onePosition(mobComp)]).style.display =
      "none";
    document.getElementById(slideId2[onePosition(mobComp)]).style.border =
      "none";
    mobComp[onePosition(mobComp)] = 0;
  }
  document.getElementById("slideTwo").style.display = "block";
  document.getElementById("mobNav2").style.borderBottom =
    "2px solid rgb(43, 42, 42)";
  mobComp[1] = 1;
  console.log(onePosition(mobComp));
});

//When Clicked on Galaxy Watch5 | Watch5 Pro
document.getElementById("mobNav3").addEventListener("click", function (e) {
  if (onePosition(mobComp) > -1) {
    if (onePosition(mobComp) > 2) {
      //Remove Right Animation Class
      document.getElementById("slideThree").classList.remove("slideOne");
      document.getElementById("slideThree").classList.remove("w3-container");
      document.getElementById("slideThree").classList.remove("w3-center");
      document
        .getElementById("slideThree")
        .classList.remove("w3-animate-right");

      //Add Left Animation Class
      document.getElementById("slideThree").classList.add("w3-container");
      document.getElementById("slideThree").classList.add("w3-center");
      document.getElementById("slideThree").classList.add("w3-animate-left");
    } else {
      //Remove Left Animation Class
      document.getElementById("slideThree").classList.remove("w3-container");
      document.getElementById("slideThree").classList.remove("w3-center");
      document.getElementById("slideThree").classList.remove("w3-animate-left");

      //Add Right Animation Class
      document.getElementById("slideThree").classList.add("w3-container");
      document.getElementById("slideThree").classList.add("w3-center");
      document.getElementById("slideThree").classList.add("w3-animate-right");
    }
    document.getElementById(slideId[onePosition(mobComp)]).style.display =
      "none";
    document.getElementById(slideId2[onePosition(mobComp)]).style.border =
      "none";
    mobComp[onePosition(mobComp)] = 0;
  }
  document.getElementById("slideThree").style.display = "block";
  document.getElementById("mobNav3").style.borderBottom =
    "2px solid rgb(43, 42, 42)";
  mobComp[2] = 1;
  console.log(onePosition(mobComp));
});

//When Clicked on Galaxy Buds2 Pro
document.getElementById("mobNav4").addEventListener("click", function (e) {
  if (onePosition(mobComp) > -1) {
    if (onePosition(mobComp) > 3) {
      //Remove Right Animation Class
      document.getElementById("slideFour").classList.remove("w3-container");
      document.getElementById("slideFour").classList.remove("w3-center");
      document.getElementById("slideFour").classList.remove("w3-animate-right");

      //Add Left Animation Class
      document.getElementById("slideFour").classList.add("w3-container");
      document.getElementById("slideFour").classList.add("w3-center");
      document.getElementById("slideFour").classList.add("w3-animate-left");
    } else {
      //Remove Left Animation Class
      document.getElementById("slideFour").classList.remove("w3-container");
      document.getElementById("slideFour").classList.remove("w3-center");
      document.getElementById("slideFour").classList.remove("w3-animate-left");

      //Add Right Animation Class
      document.getElementById("slideFour").classList.add("w3-container");
      document.getElementById("slideFour").classList.add("w3-center");
      document.getElementById("slideFour").classList.add("w3-animate-right");
    }
    document.getElementById(slideId[onePosition(mobComp)]).style.display =
      "none";
    document.getElementById(slideId2[onePosition(mobComp)]).style.border =
      "none";
    mobComp[onePosition(mobComp)] = 0;
  }
  document.getElementById("slideFour").style.display = "block";
  document.getElementById("mobNav4").style.borderBottom =
    "2px solid rgb(43, 42, 42)";
  mobComp[3] = 1;
});

//When Clicked on Galaxy Book2 Pro 360
document.getElementById("mobNav5").addEventListener("click", function (e) {
  if (onePosition(mobComp) > -1) {
    if (onePosition(mobComp) > 4) {
      //Remove Right Animation Class
      document.getElementById("slideFive").classList.remove("w3-container");
      document.getElementById("slideFive").classList.remove("w3-center");
      document.getElementById("slideFive").classList.remove("w3-animate-right");

      //Add Left Animation Class
      document.getElementById("slideFive").classList.add("w3-container");
      document.getElementById("slideFive").classList.add("w3-center");
      document.getElementById("slideFive").classList.add("w3-animate-left");
    } else {
      //Remove Left Animation Class
      document.getElementById("slideFive").classList.remove("w3-container");
      document.getElementById("slideFive").classList.remove("w3-center");

      document.getElementById("slideFive").classList.add("w3-container");
      document.getElementById("slideFive").classList.add("w3-center");
      document.getElementById("slideFive").classList.add("w3-animate-right");
    }
    document.getElementById(slideId[onePosition(mobComp)]).style.display =
      "none";
    document.getElementById(slideId2[onePosition(mobComp)]).style.border =
      "none";
    mobComp[onePosition(mobComp)] = 0;
  }
  document.getElementById("slideFive").style.display = "block";
  document.getElementById("mobNav5").style.borderBottom =
    "2px solid rgb(43, 42, 42)";
  mobComp[4] = 1;
});

// User Interaction in Tv & Av
let tvPos = [1, 0, 0, 0];
let tvLink = ["tvLink1", "tvLink2", "tvLink3", "tvLink4"];
let tvIdSlide = ["tvSlideOne", "tvSlideTwo", "tvSlideThree", "tvSlideFour"];

//When the user clicks QLED 4K
document.getElementById("tvLink1").addEventListener("click", function (e) {
  document.getElementById("tvSlideOne").classList.add("w3-container");
  document.getElementById("tvSlideOne").classList.add("w3-center");
  document.getElementById("tvSlideOne").classList.add("w3-animate-left");

  document.getElementById(tvIdSlide[onePosition(tvPos)]).style.display = "none";
  document.getElementById(tvLink[onePosition(tvPos)]).style.border = "none";
  tvPos[onePosition(tvPos)] = 0;
  document.getElementById("tvSlideOne").style.display = "block";
  document.getElementById("tvLink1").style.borderBottom =
    "2px solid rgb(43, 42, 42)";
  tvPos[0] = 1;
});

//When the user clicks Neo QLED 8K
document.getElementById("tvLink2").addEventListener("click", function (e) {
  if (onePosition(tvPos) > 1) {
    //Remove Right Animation Class
    document.getElementById("tvSlideTwo").classList.remove("w3-container");
    document.getElementById("tvSlideTwo").classList.remove("w3-center");
    document.getElementById("tvSlideTwo").classList.remove("w3-animate-right");

    //Add Left Animation Class
    document.getElementById("tvSlideTwo").classList.add("w3-container");
    document.getElementById("tvSlideTwo").classList.add("w3-center");
    document.getElementById("tvSlideTwo").classList.add("w3-animate-left");
  } else {
    //Remove Left Animation Class
    document.getElementById("tvSlideTwo").classList.remove("w3-container");
    document.getElementById("tvSlideTwo").classList.remove("w3-center");
    document.getElementById("tvSlideTwo").classList.remove("w3-animate-left");

    //Add Right Animation Class
    document.getElementById("tvSlideTwo").classList.add("w3-container");
    document.getElementById("tvSlideTwo").classList.add("w3-center");
    document.getElementById("tvSlideTwo").classList.add("w3-animate-right");
  }
  document.getElementById(tvIdSlide[onePosition(tvPos)]).style.display = "none";
  document.getElementById(tvLink[onePosition(tvPos)]).style.border = "none";
  tvPos[onePosition(tvPos)] = 0;
  document.getElementById("tvSlideTwo").style.display = "block";
  document.getElementById("tvLink2").style.borderBottom =
    "2px solid rgb(43, 42, 42)";
  tvPos[1] = 1;
});

//When the user clicks Crystal 4K UHD
document.getElementById("tvLink3").addEventListener("click", function (e) {
  if (onePosition(tvPos) > 2) {
    //Remove Right Animation Class
    document.getElementById("tvSlideThree").classList.remove("w3-container");
    document.getElementById("tvSlideThree").classList.remove("w3-center");
    document
      .getElementById("tvSlideThree")
      .classList.remove("w3-animate-right");

    //Add Left Animation Class
    document.getElementById("tvSlideThree").classList.add("w3-container");
    document.getElementById("tvSlideThree").classList.add("w3-center");
    document.getElementById("tvSlideThree").classList.add("w3-animate-left");
  } else {
    //Remove Left Animation Class
    document.getElementById("tvSlideThree").classList.remove("w3-container");
    document.getElementById("tvSlideThree").classList.remove("w3-center");
    document.getElementById("tvSlideThree").classList.remove("w3-animate-left");

    //Add Right Animation Class
    document.getElementById("tvSlideThree").classList.add("w3-container");
    document.getElementById("tvSlideThree").classList.add("w3-center");
    document.getElementById("tvSlideThree").classList.add("w3-animate-right");
  }
  document.getElementById(tvIdSlide[onePosition(tvPos)]).style.display = "none";
  document.getElementById(tvLink[onePosition(tvPos)]).style.border = "none";
  tvPos[onePosition(tvPos)] = 0;
  document.getElementById("tvSlideThree").style.display = "block";
  document.getElementById("tvLink3").style.borderBottom =
    "2px solid rgb(43, 42, 42)";
  tvPos[2] = 1;
});
//When the user clicks The Frame
document.getElementById("tvLink4").addEventListener("click", function (e) {
  if (onePosition(tvPos) > 3) {
    //Remove Right Animation Class
    document.getElementById("tvSlideFour").classList.remove("w3-container");
    document.getElementById("tvSlideFour").classList.remove("w3-center");
    document.getElementById("tvSlideFour").classList.remove("w3-animate-right");

    //Add Left Animation Class
    document.getElementById("tvSlideFour").classList.add("w3-container");
    document.getElementById("tvSlideFour").classList.add("w3-center");
    document.getElementById("tvSlideFour").classList.add("w3-animate-left");
  } else {
    //Remove Left Animation Class
    document.getElementById("tvSlideFour").classList.remove("w3-container");
    document.getElementById("tvSlideFour").classList.remove("w3-center");

    document.getElementById("tvSlideFour").classList.add("w3-container");
    document.getElementById("tvSlideFour").classList.add("w3-center");
    document.getElementById("tvSlideFour").classList.add("w3-animate-right");
  }
  document.getElementById(tvIdSlide[onePosition(tvPos)]).style.display = "none";
  document.getElementById(tvLink[onePosition(tvPos)]).style.border = "none";
  tvPos[onePosition(tvPos)] = 0;
  document.getElementById("tvSlideFour").style.display = "block";
  document.getElementById("tvLink4").style.borderBottom =
    "2px solid rgb(43, 42, 42)";
  tvPos[3] = 1;
});

// User Interaction with Home Appliances
homePos = [1, 0, 0, 0, 0];
homeLink = ["homeLink1", "homeLink2", "homeLink3", "homeLink4", "homeLink5"];
homeIdSlide = [
  "homeSlide1",
  "homeSlide2",
  "homeSlide3",
  "homeSlide4",
  "homeSlide5",
];

//When the user clicks Ecobubble Top Load
document.getElementById("homeLink1").addEventListener("click", function (e) {
  document.getElementById("homeSlide1").classList.add("w3-container");
  document.getElementById("homeSlide1").classList.add("w3-center");
  document.getElementById("homeSlide1").classList.add("w3-animate-left");
  document.getElementById(homeIdSlide[onePosition(homePos)]).style.display =
    "none";
  document.getElementById(homeLink[onePosition(homePos)]).style.border = "none";
  homePos[onePosition(homePos)] = 0;
  document.getElementById("homeSlide1").style.display = "block";
  document.getElementById("homeLink1").style.borderBottom = "2px solid white";
  homePos[0] = 1;
});

//When the user clicks AI Ecobubble
document.getElementById("homeLink2").addEventListener("click", function (e) {
  if (onePosition(homePos) > 1) {
    //Remove Right Animation Class
    document.getElementById("homeSlide2").classList.remove("w3-container");
    document.getElementById("homeSlide2").classList.remove("w3-center");
    document.getElementById("homeSlide2").classList.remove("w3-animate-right");

    //Add Left Animation Class
    document.getElementById("homeSlide2").classList.add("w3-container");
    document.getElementById("homeSlide2").classList.add("w3-center");
    document.getElementById("homeSlide2").classList.add("w3-animate-left");
  } else {
    //Remove Left Animation Class
    document.getElementById("homeSlide2").classList.remove("w3-container");
    document.getElementById("homeSlide2").classList.remove("w3-center");
    document.getElementById("homeSlide2").classList.remove("w3-animate-left");

    //Add Right Animation Class
    document.getElementById("homeSlide2").classList.add("w3-container");
    document.getElementById("homeSlide2").classList.add("w3-center");
    document.getElementById("homeSlide2").classList.add("w3-animate-right");
  }
  document.getElementById(homeIdSlide[onePosition(homePos)]).style.display =
    "none";
  document.getElementById(homeLink[onePosition(homePos)]).style.border = "none";
  homePos[onePosition(homePos)] = 0;
  document.getElementById("homeSlide2").style.display = "block";
  document.getElementById("homeLink2").style.borderBottom = "2px solid white";
  homePos[1] = 1;
});

//When the user clicks WindFree AC
document.getElementById("homeLink3").addEventListener("click", function (e) {
  if (onePosition(homePos) > 2) {
    //Remove Right Animation Class
    document.getElementById("homeSlide3").classList.remove("w3-container");
    document.getElementById("homeSlide3").classList.remove("w3-center");
    document.getElementById("homeSlide3").classList.remove("w3-animate-right");

    //Add Left Animation Class
    document.getElementById("homeSlide3").classList.add("w3-container");
    document.getElementById("homeSlide3").classList.add("w3-center");
    document.getElementById("homeSlide3").classList.add("w3-animate-left");
  } else {
    //Remove Left Animation Class
    document.getElementById("homeSlide3").classList.remove("w3-container");
    document.getElementById("homeSlide3").classList.remove("w3-center");
    document.getElementById("homeSlide3").classList.remove("w3-animate-left");

    //Add Right Animation Class
    document.getElementById("homeSlide3").classList.add("w3-container");
    document.getElementById("homeSlide3").classList.add("w3-center");
    document.getElementById("homeSlide3").classList.add("w3-animate-right");
  }
  document.getElementById(homeIdSlide[onePosition(homePos)]).style.display =
    "none";
  document.getElementById(homeLink[onePosition(homePos)]).style.border = "none";
  homePos[onePosition(homePos)] = 0;
  document.getElementById("homeSlide3").style.display = "block";
  document.getElementById("homeLink3").style.borderBottom = "2px solid white";
  homePos[2] = 1;
});

//When the user clicks Curd Maestro
document.getElementById("homeLink4").addEventListener("click", function (e) {
  if (onePosition(homePos) > 3) {
    //Remove Right Animation Class
    document.getElementById("homeSlide4").classList.remove("w3-container");
    document.getElementById("homeSlide4").classList.remove("w3-center");
    document.getElementById("homeSlide4").classList.remove("w3-animate-right");

    //Add Left Animation Class
    document.getElementById("homeSlide4").classList.add("w3-container");
    document.getElementById("homeSlide4").classList.add("w3-center");
    document.getElementById("homeSlide4").classList.add("w3-animate-left");
  } else {
    //Remove Left Animation Class
    document.getElementById("homeSlide4").classList.remove("w3-container");
    document.getElementById("homeSlide4").classList.remove("w3-center");
    document.getElementById("homeSlide4").classList.remove("w3-animate-left");

    //Add Right Animation Class
    document.getElementById("homeSlide4").classList.add("w3-container");
    document.getElementById("homeSlide4").classList.add("w3-center");
    document.getElementById("homeSlide4").classList.add("w3-animate-right");
  }
  document.getElementById(homeIdSlide[onePosition(homePos)]).style.display =
    "none";
  document.getElementById(homeLink[onePosition(homePos)]).style.border = "none";
  homePos[onePosition(homePos)] = 0;
  document.getElementById("homeSlide4").style.display = "block";
  document.getElementById("homeLink4").style.borderBottom = "2px solid white";
  homePos[3] = 1;
});

//When the user clicks Curd Maestro
document.getElementById("homeLink5").addEventListener("click", function (e) {
  if (onePosition(homePos) > 4) {
    //Remove Right Animation Class
    document.getElementById("homeSlide5").classList.remove("w3-container");
    document.getElementById("homeSlide5").classList.remove("w3-center");
    document.getElementById("homeSlide5").classList.remove("w3-animate-right");

    //Add Left Animation Class
    document.getElementById("homeSlide5").classList.add("w3-container");
    document.getElementById("homeSlide5").classList.add("w3-center");
    document.getElementById("homeSlide5").classList.add("w3-animate-left");
  } else {
    //Remove Left Animation Class
    document.getElementById("homeSlide5").classList.remove("w3-container");
    document.getElementById("homeSlide5").classList.remove("w3-center");
    document.getElementById("homeSlide4").classList.remove("w3-animate-left");

    //Add Right Animation Class
    document.getElementById("homeSlide5").classList.add("w3-container");
    document.getElementById("homeSlide5").classList.add("w3-center");
    document.getElementById("homeSlide5").classList.add("w3-animate-right");
  }
  document.getElementById(homeIdSlide[onePosition(homePos)]).style.display =
    "none";
  document.getElementById(homeLink[onePosition(homePos)]).style.border = "none";
  homePos[onePosition(homePos)] = 0;
  document.getElementById("homeSlide5").style.display = "block";
  document.getElementById("homeLink5").style.borderBottom = "2px solid white";
  homePos[4] = 1;
});

// User Interaction with Explore Section

let explorePos = [1, 0, 0, 0, 0];
let exploreNav = ["navOne", "navTwo", "navThree", "navFour", "navFive"];
let tipNav = ["tipOne", "tipTwo", "tipThree", "tipFour", "tipFive"];
let learnTab = [
  "learn-tab-one",
  "learn-tab-two",
  "learn-tab-three",
  "learn-tab-four",
  "learn-tab-five",
];
let exploreId = [
  "exploreImage1",
  "exploreImage2",
  "exploreImage3",
  "exploreImage4",
  "exploreImage5",
];

// When the user hovers over the 1st Tip
document.getElementById("navOne").addEventListener("mouseover", function (e) {
  document.getElementById(exploreId[onePosition(explorePos)]).style.display =
    "none";
  document.getElementById(tipNav[onePosition(explorePos)]).style.marginTop =
    "none";
  document.getElementById(exploreNav[onePosition(explorePos)]).style.borderTop =
    "none";
  document.getElementById(learnTab[onePosition(explorePos)]).style.display =
    "none";
  explorePos[onePosition(explorePos)] = 0;
  document.getElementById("exploreImage1").style.display = "block";
  document.getElementById("learn-tab-one").style.display = "block";
  document.getElementById("navOne").style.borderTop = "2px solid black";
  document.getElementById("tipOne").style.marginTop = "1.3em";
  explorePos[0] = 1;
});

// When the user hovers over the 2nd Tip
document.getElementById("navTwo").addEventListener("mouseover", function (e) {
  document.getElementById(exploreId[onePosition(explorePos)]).style.display =
    "none";
  document.getElementById(tipNav[onePosition(explorePos)]).style.marginTop =
    "none";
  document.getElementById(exploreNav[onePosition(explorePos)]).style.border =
    "none";
  document.getElementById(learnTab[onePosition(explorePos)]).style.display =
    "none";
  explorePos[onePosition(explorePos)] = 0;
  document.getElementById("navTwo").style.borderTop = "2px solid black";
  document.getElementById("tipTwo").style.marginTop = "1.3em";
  document.getElementById("learn-tab-two").style.display = "block";
  document.getElementById("exploreImage2").style.display = "block";
  explorePos[1] = 1;
});

// When the user hovers over the 3rd Tip
document.getElementById("navThree").addEventListener("mouseover", function (e) {
  document.getElementById(exploreId[onePosition(explorePos)]).style.display =
    "none";
  document.getElementById(learnTab[onePosition(explorePos)]).style.display =
    "none";
  document.getElementById(tipNav[onePosition(explorePos)]).style.marginTop =
    "none";
  document.getElementById(exploreNav[onePosition(explorePos)]).style.border =
    "none";
  explorePos[onePosition(explorePos)] = 0;
  document.getElementById("navThree").style.borderTop = "2px solid black";
  document.getElementById("tipThree").style.marginTop = "1.3em";
  document.getElementById("exploreImage3").style.display = "block";
  document.getElementById("learn-tab-three").style.display = "block";
  explorePos[2] = 1;
});

// When the user hovers over the 2nd Tip
document.getElementById("navFour").addEventListener("mouseover", function (e) {
  document.getElementById(exploreId[onePosition(explorePos)]).style.display =
    "none";
  document.getElementById(learnTab[onePosition(explorePos)]).style.display =
    "none";
  document.getElementById(tipNav[onePosition(explorePos)]).style.marginTop =
    "none";
  document.getElementById(exploreNav[onePosition(explorePos)]).style.border =
    "none";
  explorePos[onePosition(explorePos)] = 0;
  document.getElementById("exploreImage4").style.display = "block";
  document.getElementById("navFour").style.borderTop = "2px solid black";
  document.getElementById("learn-tab-four").style.display = "block";
  document.getElementById("tipFour").style.marginTop = "1.3em";
  explorePos[3] = 1;
});

// When the user hovers over the 2nd Tip
document.getElementById("navFive").addEventListener("mouseover", function (e) {
  document.getElementById(exploreId[onePosition(explorePos)]).style.display =
    "none";
  document.getElementById(learnTab[onePosition(explorePos)]).style.display =
    "none";
  document.getElementById(exploreNav[onePosition(explorePos)]).style.border =
    "none";
  document.getElementById(tipNav[onePosition(explorePos)]).style.marginTop =
    "none";
  explorePos[onePosition(explorePos)] = 0;
  document.getElementById("navFive").style.borderTop = "2px solid black";
  document.getElementById("exploreImage5").style.display = "block";
  document.getElementById("tipFive").style.marginTop = "1.3em";
  document.getElementById("learn-tab-five").style.display = "block";
  explorePos[4] = 1;
});
