class Tabs{
  constructor(){
    this.tabList = document.querySelectorAll('.pageNav__tabItem');
    this.tabList = document.querySelectorAll('.pageNav__tabItem');


    this.contentList = document.querySelectorAll('.pageNav__contentItem');
    let nav = document.querySelector('.pageNav');

    nav.addEventListener('click', e => this.show(e));

    this.setIndex();
  }

  show(e){
    let t = e.target;
    if (!t.classList.contains('pageNav__tabItem')) return;
    this.removePrev();

    let index = t.getAttribute('data-index');
    let content = document.querySelector('.pageNav__contentItem[data-index="'+index+'"]');

    t.classList.add('pageNav__tabItem--active');
    content.classList.add('pageNav__contentItem--active');
  }

  setIndex(){
    for (let i = 0; i < this.tabList.length; i++){
      this.tabList[i].setAttribute('data-index', i);
      this.contentList[i].setAttribute('data-index', i);
    }
  }

  removePrev(){
    for (let i = 0; i < this.tabList.length; i++){
      this.tabList[i].classList.remove('pageNav__tabItem--active');
      this.contentList[i].classList.remove('pageNav__contentItem--active');
    }
  }

}

document.addEventListener('DOMContentLoaded', ()=>{
  let tabs = new Tabs();
})


