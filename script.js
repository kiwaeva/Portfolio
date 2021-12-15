// function to change Icon

// let changeIcon = function(icon) {
//   icon.classList.toggle('fa-moon')
// }

// Arrow function
// changeIcon = (icon) => icon.classList.toggle('fa-moon')

// let btn = document.querySelector('.toggle');
// let icon = btn.querySelector(".fa-sun")

// btn.onclick = function(){
//   if(icon.classList.contains("fa-sun")){
//     icon.classList.replace("fa-sun","fa-moon");
//   }
// }

  //  let fbtn = document.querySelector(".toggle");
  //       let ficon = fbtn.querySelector(".fa-moon");

  //       fbtn.onclick = function () {
  //           if (ficon.classList.contains("fa-moon")) {
  //               ficon.classList.replace("fa-moon", "fa-sun");
  //           } else {
  //               ficon.classList.replace("fa-sun", "fa-moon");
  //           }
  //       }

        let darkMode = document.getElementById("darkMode");

        darkMode.onclick = function(){
          document.body.classList.toggle("dark-theme");
          if(document.body.classList.contains("dark-theme")){
            darkMode.src = "/img/sun.png";
          } else{
            darkMode.src = "/img/moon.png"
          }

        }