'use strict';

(function() {
  let Slider = function($root) {
    this.init($root);
  };

  Slider.prototype =  {

    _slider: null,

    init: function(_slider) {
      this._slider = _slider;

      this.initSlider();
    },

    initSlider: function() {
      $(this._slider).slick({
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        speed: 800,
        fade: true,
        cssEase: 'ease',
        mobileFirst: true,
        arrows: false
      });
    }
  };


  let _sliderList = document.getElementsByClassName('slider');
  for (let i = 0; i < _sliderList.length ; i++) {
    _sliderList[i].Slider = new Slider(_sliderList[i]);
  }

})();


