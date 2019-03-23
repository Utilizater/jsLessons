function modal() {
  let more = document.querySelectorAll('.more, .description-btn'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');



  let browserDetection = () => {

    var sBrowser, sUsrAg = navigator.userAgent;
    if (sUsrAg.indexOf("Firefox") > -1) {
      sBrowser = "Mozilla Firefox";
      // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
    } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
      sBrowser = "Opera";
      //"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
    } else if (sUsrAg.indexOf("Trident") > -1) {
      sBrowser = "Microsoft Internet Explorer";
      // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
    } else if (sUsrAg.indexOf("Edge") > -1) {
      sBrowser = "Microsoft Edge";
      // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
    } else if (sUsrAg.indexOf("Chrome") > -1) {
      sBrowser = "Google Chrome or Chromium";
      // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
    } else if (sUsrAg.indexOf("Safari") > -1) {
      sBrowser = "Apple Safari";
      // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
    } else {
      sBrowser = "unknown";
    }

    return sBrowser;
  };



  for (let i = 0; i < more.length; i++) {
    more[i].addEventListener('click', () => {


      if (document.body.clientWidth < 900) {
        overlay.classList.remove("fade");
        overlay.style.display = 'block';
      } else if (browserDetection() == "Microsoft Internet Explorer") {
        this.classList.add('more-splash');
        overlay.style.display = 'block';
      } else {
        overlay.classList.remove("fade");
        overlay.style.opacity = "0.1";
        overlay.style.display = 'block';

        let modalAnimation = () => {
          if (+overlay.style.opacity != 1)
            overlay.style.opacity = +overlay.style.opacity + 0.1 + "";
          else clearInterval(z);
        };
        let z = setInterval(modalAnimation, 50);
      }



      document.body.style.overflow = 'hidden';
    });
  }

  close.addEventListener('click', () => {
    overlay.style.display = 'none';
    //this.parentNode.classList.remove('more-splash');
    document.body.style.overflow = '';
  });

}

module.exports = modal;