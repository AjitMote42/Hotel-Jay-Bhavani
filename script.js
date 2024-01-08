
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".navformdDevice").style.right = "0"
})
document.querySelector(".closebtn").addEventListener("click", () => {
    document.querySelector(".navformdDevice").style.right = "-100%"
})

document.querySelectorAll(".qutetoggle").forEach(e => {
    
    e.addEventListener("click", () => {
        let a = document.querySelector(".qute").style;
        if (a.display === "none") {
            a.display = "block"
            document.querySelector(".navformdDevice").style.display = "none"
        }
        else if (a.display = "block") {
            a.display = "none"
        }
    })
})


// add event listenr for close the query tab
document.querySelector(".qute img").addEventListener("click", () => {
    document.querySelector(".qute").style.display = "none"
});

//add event listner for to form validation
let emaill = document.getElementById("Email1")
let text = document.getElementById("floatingTextarea")
let mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()

};
//function
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

