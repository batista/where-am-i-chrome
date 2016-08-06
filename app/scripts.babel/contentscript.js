(function () {

  'use strict';

  if (window.location.host.indexOf('localhost') > -1 ||
      window.location.host.indexOf('127.0.0.1') > -1) {
    var text = 'localhost';

    var ribbon =
      '<div id="where-am-i-ribbon">' + text + '</div>';

    document.body.insertAdjacentHTML('beforeend', ribbon);
  }
})();
