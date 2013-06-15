var RocknCoder = RocknCoder || {};

(function () {
  "use strict";

  RocknCoder.Pages = RocknCoder.Pages || {};

  RocknCoder.Pages.page1 = (function () {
    var counter = 1, item,

      showListings = function (listings) {
        var  listItems = "", ndx;

        /* show the results to the console */
        for (ndx = 0; ndx < listings.length; ndx += 1) {
          item = listings[ndx];

          /* HTML in JavaScript, separation of concern violation */
          listItems +=
            '<li><a href="#detailsPage" data-rnc-listingId="' + item.listingId + '" class="listing" data-transition="slide" >' +
              '<h2>' + item.businessName + '</h2>' +
              '<p><strong>' + item.street + ', ' + item.city +', ' + item.state + ' ' + item.zip + '</strong></p>' +
              '<p>' + item.distance + ' miles away</p>' +
              '</a></li>';
        }

        /* don't forget to call the refresh method */
        $('#lists').html(listItems).listview( "refresh" );

        /* go get some more data */
        if(counter > 0){
          counter--;
          RocknCoder.Coffee.next(showListings);
        }
      };
    return {
      pageshow: function () {
        RocknCoder.Coffee.get({}, showListings);
      },
      pagehide: function () {
      }
    };
  }());

  RocknCoder.Pages.page2 = (function () {
    return {
      pageshow: function () {
      },
      pagehide: function () {
      }
    };
  }());
}());

