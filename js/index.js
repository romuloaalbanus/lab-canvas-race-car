const canvas = document.getElementById("the-canvas");
const ctx = canvas.getContext("2d");

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  class Component {
    constructor(x, y, width, height, color) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      // this.color = color;
      // this.speedX = 0;
      // this.speedY = 0;
    }
  }

  class Car {
    constructor() {
      this.img = ``;
      this.width = 50;
      this.height = 80;
      this.x = ctx.canvas.width / 2 - 25;
      this.y = ctx.canvas.height - 120;
      this.direction = ``;
    }

    renderImage() {
      this.img = new Image();
      this.img.src = `/images/car.png`;
      this.img.onload = () => {
        this.drawSelf();
      };
    }
  }
};
const img = new Image();
const car = new Image();

car.src = "../images/car.png";
img.src = "../images/road.png";

let canvas, ctx, mainCanvas, mainCtx;

img.onload = function () {
  // Create background canvas
  backgroundCanvas = document.getElementById("canvas");
  ctx = backgroundCanvas.getContext("2d");

  // Create main canvas
  mainCanvas = document.getElementById("main-canvas");
  mainCtx = mainCanvas.getContext("2d");

  // start calling updateCanvas once the image is loaded
  updateBackgroundCanvas();
};

const backgroundImage = {
  img: img,
  x: 0,
  y: 0,
  speed: 90,

  move: function () {
    this.y += this.speed;
    this.y %= backgroundCanvas.height;
  },

  draw: function () {
    ctx.drawImage(this.img, 0, this.y);
    if (this.speed < 0) {
      ctx.drawImage(this.img, 0, this.y + this.img.height);
    } else {
      ctx.drawImage(this.img, 0, this.y - backgroundCanvas.height);
    }
  },
};

function renderMainCanvas() {
  mainCtx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
}

function updateBackgroundCanvas() {
  backgroundImage.move();
  renderMainCanvas();
  ctx.clearRect(300, 0, backgroundCanvas.width, backgroundCanvas.height);
  backgroundImage.draw();

  requestAnimationFrame(updateBackgroundCanvas);
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {}
};
