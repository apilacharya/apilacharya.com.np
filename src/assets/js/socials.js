const socials = document.getElementsByClassName('socials');

Array.from(socials).forEach((social) => {
  social.innerHTML = `
  <div class="social absolute top-1/3">
  <div class="logos space-x-4 cursor-pointer flex flex-col">
  <a href="https://twitter.com/ApilAcharya" target="_blank"><i
  class="ml-4 mb-4 fab fa-twitter fa-2x text-blue-500 hover:transform rotate-180 active:animate-ping"
></i></a>
<i class="mb-4 fab fa-instagram text-red-500 fa-2x active:animate-ping"
    ></i>
    <a href="https://www.linkedin.com/in/apil-raj-acharya-13a59a205/"
      target="_blank"><i
        class="mb-4 fab fa-linkedin-in text-gray-800 dark:text-gray-900 fa-2x active:animate-ping"
      ></i
    ></a>
    <i class="fab fa-github fa-2x active:animate-ping"></i>
    <a href="https://github.com/apilacharya" target="_blank"></a>
    
  </div>
</div>
  `;
});
