console.log("parent: ", document.body.parentNode);

//   Contact Button
document.addEventListener("DOMContentLoaded", function () {
  //  Get the contact button from DOM
  const contactBtn = document.getElementById("contactBtn");
  //    Add click event listener
  contactBtn.addEventListener("click", function (event) {
    //   Prevent default link behavior
    event.preventDefault();
    //    Scroll smoothly to the contact section
    document.querySelector("#contact").scrollIntoView({
      behavior: "smooth",
    });
  });
});

// JavaScript to handle project smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // const project = this.getAttribute('href').substring(1); // Remove '#'
    const myProject = document.getElementById("myProject");

    if (myProject) {
      myProject.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

//  Hire Button
document.addEventListener("DOMContentLoaded", function () {
  //  Get the hire button from DOM
  const hireBtn = document.getElementById("hireBtn");
  //    Add click event listener
  hireBtn.addEventListener("click", function (event) {
    //   Prevent default link behavior
    event.preventDefault();
    //    Scroll smoothly to the contact section
    document.querySelector("#contact").scrollIntoView({
      behavior: "smooth",
    });
  });
});

//    Hero section words display
document.addEventListener("DOMContentLoaded", function () {
  //    Array of words to display
  let words = ["A BACKEND DEVELOPER", "A FRONTEND DEVELOPER"];
  let wordIndex = 0;
  let word2Element = document.getElementById("word");

  //  Function to display words one after the other
  function displayWords() {
    word2Element.textContent = words[wordIndex];
    wordIndex = (wordIndex + 1) % words.length;
    //   Change word every two seconds
    setTimeout(displayWords, 2000);
  }
  //    Animation
  displayWords();
});

// // On focus of input, alert "You're editing the name field!"
// document.querySelectorAll("input").forEach((input) => {
//   input.addEventListener("click", (e) => {
//     alert(`You are editing the ${e.target.name} field!`);
//   });
// });

// On send message, alert "Your message has been sent!"
document.querySelector("#contact").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Your message has been sent!");
});
