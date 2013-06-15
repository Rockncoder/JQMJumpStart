/**
 * User: Troy
 * Date: 8/11/12
 * Time: 12:21 PM
 */

var RocknCoder = RocknCoder || {};

RocknCoder.Location = (function () {
  return {
    getCurrentLocation: function () {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          console.log(JSON.stringify(position.coords));

        }, function (positionError) {
          console.log("Geo returned an error: " + positionError.message);
        });
    }
  };
})();