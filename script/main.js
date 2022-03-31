function myfunction() {
  var x = document.getElementById("nav");
  var i = document.getElementById("icon");

  if (x.className === "navbar") {
    x.className += " responsiveness ";
    i.classList.remove("fa-bars");
    i.classList.add("fa-times");
  } else {
    x.className = "navbar";
    i.classList.remove("fa-times");
    i.classList.add("fa-bars");
  }
}
//   var x = document.getElementById('nav')
//      if (x.className ==='navbar'){
//       x.className.add += " responsiveness";
//  }
//  else{
//       x.className='navbar';
//      }
//     // console.log(x) }
