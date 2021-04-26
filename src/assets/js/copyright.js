// footerdate config

  const copyrights = document.getElementsByClassName('copyright');

   Array.from(copyrights).forEach((copyright) => {
    copyright.innerHTML = `
    <p class="text-center">
     © Apil ${new Date().getFullYear()}, Built with Tailwind
    </p>
     `;
  });

