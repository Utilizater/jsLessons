function scroll() {
  let anchors = [];
      anchors[0] = document.querySelector('a[href="#about"]');
      anchors[1] = document.querySelector('a[href="#photo"]');
      anchors[2] = document.querySelector('a[href="#price"]');
      anchors[3] = document.querySelector('a[href="#contacts"]');

      anchors.forEach((item) => {
        let myStopInterval = () => {
          clearInterval(myInter);
        };

        item.addEventListener('click', (e) => {
          e.preventDefault();

          if (window.myInter != undefined) {
            myStopInterval();
          }

          if (item.href.includes("about"))
            var element = document.getElementById("about");

          else if (item.href.includes("photo"))
            var element = document.getElementById("photo");

          else if (item.href.includes("price"))
            var element = document.getElementById("price");

          else if (item.href.includes("contacts"))
            var element = document.getElementById("contacts");


          let myTimer = () => {
            let coordY = element.getBoundingClientRect().top;
            if (Math.abs(coordY) > 30 && coordY < 0)
              window.scrollBy(0, -30);

            if (Math.abs(coordY) > 30 && coordY > 0)
              window.scrollBy(0, 30);

            if (Math.abs(coordY) < 40) {
              myStopInterval();
            }
          };

          window.myInter = setInterval(myTimer, 10);
        });
      });
}

module.exports = scroll;