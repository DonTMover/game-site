document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme');
    
    const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" 
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>`;

    const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 3c.132 0 .263 .005 .393 .014a9 9 0 1 1 -9.393 9.393a7 7 0 0 0 9 -9.407z"/>
    </svg>`;

    function setIcon() {
      // Если активна тёмная тема – отображается солнце (для переключения на светлую)
      if (document.body.classList.contains('dark-theme')) {
        toggleButton.innerHTML = sunIcon;
      } else {
        toggleButton.innerHTML = moonIcon;
      }
    }

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    setIcon();

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        setIcon();
    });
}); 

function toggleFullScreen() {
    var gameWindow = document.querySelector('.game-window');
    if (!document.fullscreenElement) {
      if (gameWindow.requestFullscreen) {
        gameWindow.requestFullscreen();
      } else if (gameWindow.mozRequestFullScreen) { /* Firefox */
        gameWindow.mozRequestFullScreen();
      } else if (gameWindow.webkitRequestFullscreen) { /* Chrome, Safari и Opera */
        gameWindow.webkitRequestFullscreen();
      } else if (gameWindow.msRequestFullscreen) { /* IE/Edge */
        gameWindow.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { /* Chrome, Safari и Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
      }
    }
  }