var RocknCoder = RocknCoder || {};

(function () {
  "use strict";

  RocknCoder.Pages = RocknCoder.Pages || {};

  RocknCoder.Pages.page1 = (function () {
    var counter = 1,
      showListings = function (listings) {
        var ndx;

        /* show the results to the console */
        for (ndx = 0; ndx < listings.length; ndx += 1) {
          console.log(ndx +": " + listings[ndx].businessName);
        }

        if(counter > 0){
          counter--;
          RocknCoder.Coffee.next(showListings);
        }
      };
    return {
      pagebeforechange: function (event, data) {
      },
      pageshow: function () {
        RocknCoder.Coffee.get({}, showListings);
      },
      pagehide: function () {
      }
    };
  }());

  RocknCoder.Pages.page2 = (function () {
    return {
      pagebeforechange: function () {
      },
      pageshow: function () {
      },
      pagehide: function () {
      }
    };
  }());
}());

