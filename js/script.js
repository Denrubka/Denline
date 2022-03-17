// Кнопка "ещё" для блока works-video

if (document.documentElement.clientWidth < 429) {
    document.addEventListener("DOMContentLoaded", function() {
        const limit = 4;
        const nextOpen = (wrapper, button) => {
          const boxs = wrapper.querySelectorAll(".works-video__list__card"),
            len = boxs.length - 2,
            endBox = wrapper.querySelector(".nextstop"),
            index = [...boxs].indexOf(endBox) + limit;
          if (endBox) endBox.classList.remove("nextstop");
          if (index < len) boxs[index].classList.add("nextstop");
          else button.remove()
        }
        document.querySelectorAll(".works-video__list").forEach(wrapper => {
          const button = wrapper.nextElementSibling;
          button.addEventListener("click", nextOpen.bind(null, wrapper, button));
          nextOpen(wrapper, button);
        })
    });
}

//Переключение табов блок - works-video
var tab; // заголовок вкладки
var tabContent; // блок содержащий контент вкладки


window.onload=function() {
    tabContent=document.getElementsByClassName('works-video__list');
    tab=document.getElementsByClassName('works-video__button__name');
    hideTabsContent(1);
}

document.getElementById('works-video').onclick= function (event) {
    var target=event.target;
    if (target.className=='works-video__button__name') {
       for (var i=0; i<tab.length; i++) {
           if (target == tab[i]) {
               showTabsContent(i);
               break;
           }
       }
    }
}

function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('active');
    }
}

function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('active');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}




function scrollTabs() {
    const tabs = document.querySelector('.works-video__head');
   document.addEventListener('scroll', () => {
       const listY = document.querySelector('.works-video__list.show').getBoundingClientRect().bottom;
        const count = 30;
        let posTabs = tabs.getBoundingClientRect().y;
       console.log(posTabs)
        if(posTabs <= count && listY >= 445) {
            tabs.classList.add('works-video__head--sticky');
            tabs.classList.remove('works-video__head--absolute');
        }
           if (listY <= 445){
               tabs.classList.remove('works-video__head--sticky');
               tabs.classList.add('works-video__head--absolute');
           }
            if(document.querySelector('.works-video__list.show').getBoundingClientRect().y > 0) {
                tabs.classList.remove('works-video__head--absolute');
                tabs.classList.remove('works-video__head--sticky');
            }
    })
}

scrollTabs()
