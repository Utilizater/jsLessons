class options{
    constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }


  createElement(st) {
    let element = document.createElement("div");
    element.style.cssText = `height: ${this.height}; width: ${this.width};
    background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
    element.textContent = st;
    document.getElementsByTagName("body")[0].appendChild(element);
  }
}

let element = new options("100px", "100px", "red", "30px", "center");
element.createElement("Hello World!");
