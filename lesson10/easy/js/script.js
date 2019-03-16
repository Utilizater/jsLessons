class options{
    constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }


  createElement(st, cssText) {
    let element = document.createElement("div");
    element.style.cssText = cssText;
    element.textContent = st;
    document.getElementsByTagName("body")[0].appendChild(element);
  }
}

let element = new options();
element.createElement("Hello World!", "height: 200px; width: 300px; font-size: 20px");
