var RocknCoder = RocknCoder || {};

(function () {
  "use strict";

  RocknCoder.Pages = RocknCoder.Pages || {};

  RocknCoder.Pages.page1 = (function () {
    var showChart = function(tables){
      $.jqplot('chart',tables).replot({
        clear: true,
        resetAxes:true
      });
    };
    return {
      pageshow: function () {
        showChart([[1, 2, 3, 4]]);
      }
    };
  }());
}());

