//Shows and hides the answers to FAQs
function faq(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}


//Closes the login form when you click outside of the form
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//Opens tabs
function openTab(tabName) {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(tabName).style.display = "block";  
}


//Slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

//Change post in iFrame
function openPost(postNum) {
  var post;
  if (postNum == 0) {
    post = "Posts/WhatDoIDoAfterHighSchool.html"
  } 
  if (postNum == 1) {
    post = "Posts/CapstoneProject.html"
  }
  document.getElementById('display').src = post;
}

function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchInput");
        filter = input.value.toUpperCase();
    ul = document.getElementById("postlist");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

}

