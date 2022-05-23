var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

let first = document.getElementById('first');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    first.style.top = value *1.05 + 'px';
})