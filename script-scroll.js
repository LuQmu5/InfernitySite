function scrollToSection(i) {
  document.getElementById(sections[i].id).scrollIntoView({
    behavior: 'smooth'
  });
}


let sections = document.getElementsByClassName('section-to-scroll');
let smoothLinks = document.querySelectorAll('a[href^="#"]');
let anchors = document.querySelectorAll('[id^="nav"]');

let currentSection = 0;

for (let anchor of anchors){
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    let anchorId = anchor.id;
    currentSection = anchorId.slice("nav".length);
});
}

for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        let id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

window.addEventListener('wheel', function(e) {
  e.preventDefault();

  (e.deltaY < 0) ? --currentSection: ++currentSection;

  if (currentSection < 0) 
    currentSection = 0;
  else if (currentSection > (sections.length - 1)) 
    currentSection = (sections.length - 1);

  scrollToSection(currentSection);
}, {passive: false} );
