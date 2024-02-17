window.onload = function() {
    setTimeout(function() {
      // Hide the loader
      document.querySelector('.loader').style.display = 'none';
  
      // Show the website content
      document.getElementById('site-content').style.display = 'block';
    }, 5000); // Wait for 5 seconds
  };


  window.addEventListener('scroll', function() {
    let currentSection = Math.round(window.scrollY / window.innerHeight) + 1;
    let element = document.querySelector(`div[data-section='${currentSection}']`);
    element.scrollIntoView({behavior: "smooth"});
  });