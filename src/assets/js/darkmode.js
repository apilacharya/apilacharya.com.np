import moon from 'url:../img/moon.svg';
import sun from 'url:../img/light.svg';


let img = document.createElement('img');
img.src = sun;

let src = document.getElementById('toggleContainer');
src.appendChild(img);



function toggle() {
  let htmlClasses = document.querySelector('html').classList;
  
  if (localStorage.theme === 'dark') {
    htmlClasses.remove('dark');
    // localStorage.removeItem('theme');
    localStorage.setItem('theme', 'light');
    img.src = sun;
  } else {
    htmlClasses.add('dark');
    localStorage.setItem('theme', 'dark');
    img.src = moon;
  }
}
img.addEventListener('click', function () {
  toggle()
});

if (localStorage.theme === 'dark') {
  htmlClasses.add('dark');
  img.src = moon;
} else {
  htmlClasses.remove('dark');

  img.src = sun;
}
