function reveal() {
    const reveals = document.querySelectorAll(".reveal");
  
    for (const i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  function reveal2() {
    const reveals2 = document.querySelectorAll(".reveal2");
  
    for (const i = 0; i < reveals2.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals2[i].getBoundingClientRect().top;
      const elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals2[i].classList.add("active");
      } else {
        reveals2[i].classList.remove("active");
      }
    }
  }
  
  function reveal3() {
    const reveals3 = document.querySelectorAll(".reveal3");
  
    for (const i = 0; i < reveals3.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals3[i].getBoundingClientRect().top;
      const elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals3[i].classList.add("active");
      } else {
        reveals3[i].classList.remove("active");
      }
    }
  }
  function reveal4() {
    const reveals4 = document.querySelectorAll(".reveal4");
  
    for (const i = 0; i < reveals4.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals4[i].getBoundingClientRect().top;
      const elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals4[i].classList.add("active");
      } else {
        reveals4[i].classList.remove("active");
      }
    }
  }
  function reveal5() {
    const reveals5 = document.querySelectorAll(".reveal5");
  
    for (const i = 0; i < reveals5.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals5[i].getBoundingClientRect().top;
      const elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals5[i].classList.add("active");
      } else {
        reveals5[i].classList.remove("active");
      }
    }
  }
  function reveal6() {
    const reveals6 = document.querySelectorAll(".reveal6");
  
    for (const i = 0; i < reveals6.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals6[i].getBoundingClientRect().top;
      const elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals6[i].classList.add("active");
      } else {
        reveals6[i].classList.remove("active");
      }
    }
  }
  function reveal7() {
    const reveals7 = document.querySelectorAll(".reveal7");
  
    for (const i = 0; i < reveals7.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals7[i].getBoundingClientRect().top;
      const elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals7[i].classList.add("active");
      } else {
        reveals7[i].classList.remove("active");
      }
    }
  }
  function reveal8() {
    const reveals8 = document.querySelectorAll(".reveal8");
  
    for (const i = 0; i < reveals8.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals8[i].getBoundingClientRect().top;
      const elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals8[i].classList.add("active");
      } else {
        reveals8[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  window.addEventListener("scroll", reveal2);
  window.addEventListener("scroll", reveal3);
  window.addEventListener("scroll", reveal4);
  window.addEventListener("scroll", reveal5);
  window.addEventListener("scroll", reveal6);
  window.addEventListener("scroll", reveal7);
  window.addEventListener("scroll", reveal8);