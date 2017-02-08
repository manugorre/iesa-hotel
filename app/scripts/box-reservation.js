'use strict';

(function() {
  let ReservationSelector = function($root) {
    this.init($root);
  };

  ReservationSelector.prototype =  {

    _el: null,
    _select: null,
    _selectedValue: null,

    init: function(_el) {
      this._el = _el;
      this._select = _el.getElementsByTagName('select')[0];
      this._datePickerList = _el.getElementsByTagName('select');
      this._selectedValue = _el.querySelectorAll('.number-selector .value')[0];

      this.listenSelect();
    },

    listenSelect: function () {
      let that = this;

      this._select.addEventListener("change", function(data) {
        let selectedIndex = data.target.selectedIndex;
        that.setNumberGuest(selectedIndex);
      });

      for (let i = 0; i < this._datePickerList.length ; i++) {
        this._datePickerList[i].addEventListener("change", function(data) {
          console.log(data);

        });
      }

    },

    setNumberGuest: function(selectedIndex) {
      this._selectedValue.innerHTML = this._select[selectedIndex].value;
    }
  };


  let _elList = document.getElementsByClassName('box-reservation');
  for (let i = 0; i < _elList.length ; i++) {
    _elList[i].ReservationSelector = new ReservationSelector(_elList[i]);
  }

})();


