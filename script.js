

document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".navformdDevice").style.display = "block"
})
document.querySelector(".closebtn").addEventListener("click", () => {
    document.querySelector(".navformdDevice").style.display = "none"
})

document.querySelectorAll(".qutetoggle").forEach(e => {
    
    e.addEventListener("click", () => {
        let a = document.querySelector(".qute").style;
        if (a.display === "none") {
            a.display = "block"
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

// document.querySelector("#submit").addEventListener("click", ()=>{
// if (emaill.value ==="" && text.value ==="") {
//     e-valid.innerHTML== "is empty"
// }
// })


let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

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