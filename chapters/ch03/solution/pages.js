
var RocknCoder = RocknCoder || {};

(function () {
	"use strict";

	RocknCoder.Pages = RocknCoder.Pages || {};

	RocknCoder.Pages.page1 = (function () {
		return {
      pagebeforechange: function(event, data){
      },
			pageshow: function () {
        RocknCoder.Coffee.get();
      },
			pagehide: function () {
      }
		};
	}());

	RocknCoder.Pages.page2 = (function () {
		return {
      pagebeforechange: function(){
      },
			pageshow: function () {
      },
			pagehide: function () {
      }
		};
	}());
}());

