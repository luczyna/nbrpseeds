// TODO share links with plants in url
// TODO search content (but how for all html??)
const links = document.querySelectorAll('.plantlink');
const descnav = document.getElementById('toggleDescription')
const mobilenav = document.getElementById('toggleMobileNav');

descnav.addEventListener('click', toggleDescription, false);
links.forEach(l => {
  l.addEventListener('click', updateIframe, false)
});

if (isSmallScreen()) {
  mobilenav.addEventListener('click', showPlantList, false);
}

function showPlantList() {
  const content = document.getElementById('content');
  const list = document.getElementById('contentlist');
  const frame = document.getElementById('plantcontent');
  
  frame.style.display = "none";
  list.style.display = "block";
  mobilenav.style.display = "none";
  descnav.style.display = "block";
  window.setTimeout(() => {                
      content.scrollTop = content.getAttribute('dataScrollPos');
  }, 50);
}

function toggleDescription(e) {
  const desc = document.getElementById('description');
  const cont = document.getElementById('content');
  
  let isToggledOff = e.target.getAttribute('data-toggled');
  let toggleAttr = 'true'
  
  if (isToggledOff === 'false') {
    desc.style.display = "none";
    cont.style.display = ""
    e.target.textContent = "about this content";
  } else {
    desc.style.display = "";
    cont.style.display = "none"
    e.target.textContent = "hide description";
    toggleAttr = 'false'
  }
  
  e.target.setAttribute('data-toggled', toggleAttr);
}

function isSmallScreen() {
    return window.innerWidth <= 500;
}

function updateIframe(e) {
  const empty = document.querySelector('.empty-state')
  if (empty) {
    empty.remove();
  }

  const link = e.target.parentNode.getAttribute('data-file');
  const list = document.getElementById('contentlist');
  const frame = document.getElementById('plantcontent');
  const links = document.querySelectorAll('.plantlink');
  
  frame.src = 'plants/' + link;
  links.forEach(l => {
    l.parentNode.classList.remove('activePlant');
  });
  e.target.parentNode.classList.toggle('activePlant');
  
  if (isSmallScreen()) {
    const content = document.getElementById('content');
    content.setAttribute('dataScrollPos', content.scrollTop);
    
    frame.style.display = "block";
    list.style.display = "none";
    mobilenav.style.display = "block";
    descnav.style.display = "none"
  }
}