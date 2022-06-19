function scrollIntoView () {
  window.scrollTo(0, 0)
}

// 阻止微信拖动
document.body.addEventListener('touchmove', function (e) {
  e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
}, {passive: false})

setTimeout(() => {
  autoScale({
    deviseW: 750,
    deviseH: 1508,
    center: 'middle',
    scroll: false,
    type: 'rollH5',
    box: '.scale-box'
  })
}, 100);

function changeItem (el) {
  console.log(el)
  document.querySelector('.show-video').src = el.querySelector('video').src
}

if (document.querySelector('.show-video')) {
  document.querySelector('.show-video').src = document.querySelector('.LbWMGSGs .swiper-slide video').src
}

if (document.querySelector('.jcbd')) {
  document.querySelector('.jcbd li').classList.add('active')
  document.querySelector('.jcbd .fl').src = document.querySelector('.jcbd li img').src
}

function showjcdb (el) {
  document.querySelectorAll('.jcbd li').forEach(element => {
    element.classList.remove('active')
  });
  el.classList.add('active')
  document.querySelector('.jcbd .fl').src = el.querySelector('img').src
}