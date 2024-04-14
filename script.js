let data = [
  {
    'name': 'onepiece',
    'color': '#107cdb',
  },
  {
    'name': 'demonslayer',
    'color': '#ff0000',
  },
  {
    'name': 'sololeveling',
    'color': '#295fe8',
  },
  {
    'name': 'frieren',
    'color': '#EFE8D3',
  },
]

console.log('script');

//append the modal box to the html
let modalSlider = document.querySelector('.modal__inner');

data.forEach((item, index) => {
  let modal = document.createElement('div');
  modal.classList.add('modal__item');
  modal.setAttribute('data-index', index);
  modal.style.backgroundColor = item.color;
  modal.innerHTML = `
    <div class="modal__item__img">
      <img src="src/img/${item.name}.jpg">
    </div>
  `;
  modalSlider.appendChild(modal);
});

//hover change image 
let target = $('.list__item');

target.hover(function() {
  let index = this.dataset.index;

  $('.modal__inner').css('top', `-${index * 100}%`);
});

//open modal box when mouse enter
$('.list').mouseenter(function(e) {
  $('.modal').addClass('open');

});

$('.list').mouseleave(function() {
  $('.modal').removeClass('open');
});

//get mouse location
let mouseX = 0;
let mouseY = 0;

$(document).mousemove(function(e) {
  var mouseX = e.clientX;
  var mouseY = e.clientY;
  $('.modal').css('left', +mouseX + 'px');
  $('.modal').css('top', +mouseY + 'px');
});