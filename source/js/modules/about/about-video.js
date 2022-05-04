const videoPlayer = document.querySelector('[data-player]');

const loadVideo = () => {
  videoPlayer.addEventListener('click', (evt) => {
    evt.preventDefault();

    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('class', 'about__video youtube-video');
    videoPlayer.replaceWith(iframe);
  });
};

export {loadVideo};
