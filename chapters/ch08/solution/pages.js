var RocknCoder = RocknCoder || {};

(function () {
  "use strict";

  RocknCoder.Pages = RocknCoder.Pages || {};
  RocknCoder.template = Handlebars.compile($("#listing-template").html());

  RocknCoder.Pages.page1 = (function () {
    var counter = 1, item,
      isShowingListings = false,
      myScroll = null,  //new iScroll('psWrapper'),
      pullDownHeight, $pullDown, $pullDownLabel,

      getListings = function (location) {
        RocknCoder.Coffee.get({}, function () {
          var $psScroller = $('#psScroller');

          /* remove the loading spinner */
          $.mobile.loading("hide");
          isShowingListings = true;

          /* dynamically adjust the height of the scrollable region */
          $psScroller.find("ul").css('margin', 0);
          var $rows = $psScroller.find("ul > li"),
            $refresh = $psScroller.find('> div');

          $psScroller.height($rows.eq(0).outerHeight() * $rows.length + $refresh.outerHeight());

          if (!myScroll) {
            $pullDown = $('#pullDown');
            $pullDownLabel = $pullDown.find('.pullDownLabel');
            pullDownHeight = $refresh.outerHeight();

            myScroll = new iScroll('psWrapper', {
                topOffset: pullDownHeight,
                useTransition: true,
                hScrollbar: false,
                vScrollbar: false,
                onRefresh: function () {
                  if ($pullDown.hasClass('loading')) {
                    $pullDown.removeClass();
                    $pullDownLabel.html('Pull down to refresh...');
                  }
                },
                onScrollMove: function () {
                  if (this.y > 5 && !$pullDown.hasClass('flip')) {
                    $pullDown.addClass('flip');
                    $pullDownLabel.html('Release to refresh...');
                    this.minScrollY = 0;
                  } else if (this.y < 5 && $pullDown.hasClass('flip')) {
                    $pullDown.removeClass();
                    $pullDownLabel.html('Pull down to refresh...');
                    this.minScrollY = -pullDownHeight;
                  }
                },
                onScrollEnd: function () {
                  if ($pullDown.hasClass('flip')) {
                    $pullDown.removeClass();
                    $pullDown.addClass('loading');
                    $pullDownLabel.html('Loading...')
                    callRefresh();
                  }
                }
              }
            );
          }

          setTimeout(function () {
            myScroll.refresh();
          }, 0)
        });
      },

      showListings = function (listings) {
        $('#psScroller').html(RocknCoder.template({listings: listings})).trigger("create");

        /* go get some more data */
        if(counter > 0){
          counter--;
          RocknCoder.Coffee.next(showListings);
        }

        getListings({});
      };
    return {
      pageshow: function () {
        var dim = RocknCoder.Dimensions.get();
        $("#psWrapper").css('height', dim.height);
        RocknCoder.Coffee.get({}, showListings);
        RocknCoder.Location.getCurrentLocation();
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

