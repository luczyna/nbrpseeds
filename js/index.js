// TODO share links with plants in url
// TODO search content (but how for all html??)
const mobilenav = document.getElementById('toggleMobileNav');

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
  window.setTimeout(() => {                
      content.scrollTop = content.getAttribute('dataScrollPos');
  }, 50);
}

function isSmallScreen() {
    return window.innerWidth <= 500;
}
