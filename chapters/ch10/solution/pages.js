var RocknCoder = RocknCoder || {};

(function () {
  "use strict";

  RocknCoder.Pages = RocknCoder.Pages || {};

  RocknCoder.Pages.page1 = (function () {
    var map,
      mapElement = $("#map").get(0),
      getOptions = function (radius) {
        return {
          mapTypeControl: false,
          streetViewControl: false,
          zoom: radius,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
      },
      drawMarker = function (map, biz) {
          new google.maps.Marker({
            position: new google.maps.LatLng(biz.latitude, biz.longitude),
            map: map
          });
      },
      showMap = function (loc) {
        var options = getOptions(14);
        options.center = new google.maps.LatLng(loc.latitude, loc.longitude);
        map = new google.maps.Map(mapElement, options);
        drawMarker(map, {latitude:  33.8226203918457, longitude: -118.331848144531});
      };
    return {
      pageshow: function () {
        var dim = RocknCoder.Dimensions.get();
        $("#map").css('height', dim.height);
        showMap({latitude: 33.8226203918457, longitude: -118.331848144531});
      }
    };
  }());
}());

