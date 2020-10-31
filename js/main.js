var prev = document.getElementById('prev'),
next = document.getElementById('next'),
thumbNail = document.getElementsByClassName('thumbnail'),
hero = document.getElementById('hero');

var bgurl = "img/bkd",
bgex = ".jpg";

var pagerNum = 0;
console.log(pagerNum);

function bg_play(){
  hero.style.backgroundImage = 'url("'+bgurl+''+[pagerNum+1]+''+bgex+'")';
  for(var y= 0; y < thumbNail.length; y++){
    thumbNail[y].classList.remove('active');
  }
  thumbNail[pagerNum].classList.add('active');
}
// 다음 버튼
next.onclick = function(){
  if(pagerNum < thumbNail.length-1){
    pagerNum++;
    bg_play()
  }else{
    pagerNum = 0;
    hero.style.backgroundImage = 'url("'+bgurl+''+1+''+bgex+'")';
    for(y= 0; y < thumbNail.length; y++){
      thumbNail[y].classList.remove('active');
    }
    thumbNail[0].classList.add('active');
  }
}
// 이전 버튼
prev.onclick = function(){
  if(pagerNum > 0){
    pagerNum--;
    bg_play()
  }else{
    pagerNum = thumbNail.length-1;
    bg_play()
  }
}
// 자동 슬라이드
let autoTimer = 0;
var autoSlide = setInterval(function(){
  autoTimer++
  if(0 < autoTimer&&pagerNum < thumbNail.length-1){
    pagerNum = autoTimer;
    bg_play()
    console.log(pagerNum);
  }else{
    autoTimer = 0;
    pagerNum = 0;
    hero.style.backgroundImage = 'url("'+bgurl+''+1+''+bgex+'")';
    for(y= 0; y < thumbNail.length; y++){
      thumbNail[y].classList.remove('active');
    }
    thumbNail[0].classList.add('active');
  }
}, 8000);

// 갤러리 버튼
for(var x = 0; x < thumbNail.length; x++){
  thumbNail[x].addEventListener('click', function(){
  var pagerSrc = event.target.getAttribute('src');
  pagerNum = event.target.getAttribute('data-btn')-1;
  autoTimer = pagerNum;
  for(y= 0; y < thumbNail.length; y++){
    thumbNail[y].classList.remove('active');
  }
  console.log(pagerNum);
  event.target.classList.add('active');
  hero.style.backgroundImage = 'url("'+pagerSrc+'")';
  });
}
