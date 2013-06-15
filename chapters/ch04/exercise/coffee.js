/**
 * User: Troy
 * Date: 4/30/13
 * Time: 9:15 PM
 */

var RocknCoder = RocknCoder || {};

RocknCoder.Coffee = (function () {
  var apiKey = "896eaa9f49a1c77a595b7d3279a1c464",
    term = "coffee",
    numListing = 20,

    currentPage = 1,
    listings = null,
    results = null,
    totalPages = 0,
    totalAvailable = 0,
    location = "90023",
    radius = 20,

    fetch = function () {

      $.ajax({
        url: "http://api2.yp.com/listings/v1/search?searchloc=" + location + "&pagenum=" + currentPage + "&term=" + term + "&format=json&sort=distance&radius=" + radius + "&listingcount=" + numListing + "&key=" + apiKey,
        dataType: "JSONP"
      }).done(function (data) {
          var meta, ndx;
          if (data && data.searchResult && data.searchResult.metaProperties) {
            meta = data.searchResult.metaProperties;

            if (meta.resultCode === "Success") {
              totalAvailable = meta.totalAvailable;
              totalPages = Math.ceil(totalAvailable / numListing);
              var temp = data.searchResult.searchListings.searchListing;
              listings = temp.concat(listings);
              results = data.searchResult;

              /* show the results to the console */
              for(ndx=0; ndx < listings.length; ndx += 1){
                console.log(listings[ndx].businessName);
              }
            }
          }
        });
    };
  return {
    get: function (options) {
      listings = [];
      fetch();
    }
  };
})();