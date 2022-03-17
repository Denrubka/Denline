// Card interface
class Card {
  constructor(node, position) {
    this.node = node;
    this.position = position;
  }

  nextPosition() {
    let nextPosition = 1;

    if (this.position != 5) {
      nextPosition = this.position + 1;
    }

    return nextPosition;
  }

  prevPosition() {
    let prevPosition = 5;

    if (this.position != 1) {
      prevPosition = this.position - 1;
    }

    return prevPosition;
  }

  moveNext(attr) {
    this.node.classList.replace(
      `position${this.position}`,
      `position${this.nextPosition()}`
    );

    this.position = this.nextPosition();
  }

  movePrev() {
    this.node.classList.replace(
      `position${this.position}`,
      `position${this.prevPosition()}`
    );

    this.position = this.prevPosition();
  }
}

// Initializations
const [prev, next] = document.querySelectorAll("i");
const gallery = document.querySelector(".gallery");
const cards = [];
let start;

let arrText = [];
let arrTitle = [];
const texts = document.querySelectorAll('.card');
const textBlocks = document.querySelectorAll('.text');
const titleBlock = document.querySelector('.text-title');
let count = 0;

// Instantiate cards and populate cards array
document.querySelectorAll(".card").forEach((e, pos = 0) => {
  pos += 1;
  cards.push(new Card(e, pos));
});

// Handle click events
next.addEventListener("click", () => {
  cards.forEach((c) => {
    c.moveNext();
  });
});

prev.addEventListener("click", () => {
  cards.forEach((c) => {
    c.movePrev();
  });
});

// Handle slide events
gallery.addEventListener("touchstart", (s) => {
  start = s.targetTouches[0].screenX;
});

gallery.addEventListener("touchend", (e) => {
  let end = e.changedTouches[0].screenX;
  const range = Math.abs(start - end);

  if (range > 30) {
    if (start < end) {
      cards.forEach((c) => {
        c.moveNext();
      });
      swipeNextTextSlider();
    }

    if (start > end) {
      cards.forEach((c) => {
        c.movePrev();
      });
      swipePrevTextSlider();
    }
  }
});

texts.forEach(text => {
  arrText.push(text.getAttribute('data-text'));
  arrTitle.push(text.getAttribute('data-title'));
})

console.log(arrTitle);
next.addEventListener('click', () => {
  swipeNextTextSlider()
});

prev.addEventListener('click', () => {
  swipePrevTextSlider();
})

function swipePrevTextSlider() {
  count--;
  if(count < 0) {
    count = arrText.length - 1;
  }
  addTextSlider();
}

function swipeNextTextSlider() {
  count++;
  if(count === arrText.length) {
    count = 0;

  }
  addTextSlider();
}
function addTextSlider() {
  textBlocks.forEach(textBlock => {
    textBlock.textContent = arrText[count];
    titleBlock.textContent = arrTitle[count];
  })
}
addTextSlider()