'use strict';

(function() {

  let _scrollList = document.getElementsByClassName('scroll');
  for (let i = 0; i < _scrollList.length ; i++) {
    _scrollList[i].Scroll = new IScroll('.' + _scrollList[i].className, {scrollbars: true, mouseWheel: true});
  }

})();


