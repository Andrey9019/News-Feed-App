document.addEventListener("DOMContentLoaded", function () {
  function initPrebid() {
    const adFrame = document.getElementById("ad-frame");
    if (!adFrame) {
      return false;
    }

    console.log("[Prebid] Found ad-frame, initializing");

    const adUnit = {
      code: "ad-frame",
      mediaTypes: {
        banner: {
          sizes: [
            [300, 200],
            [300, 600],
          ],
        },
      },
      bids: [
        {
          bidder: "adtelligent",
          params: { aid: 350975 },
        },
      ],
    };

    window.pbjs = window.pbjs || {};
    pbjs.que = pbjs.que || [];

    pbjs.que.push(function () {
      pbjs.addAdUnits(adUnit);
      pbjs.requestBids({
        bidsBackHandler: (bidResponse) => {
          const bids = pbjs.getHighestCpmBids("ad-frame");
          if (bids.length > 0) {
            const doc = adFrame.contentWindow.document;
            pbjs.renderAd(doc, bids[0].adId);
            console.log("[Prebid] Ad rendered");
          } else {
            console.log("[Prebid] No bids");
          }
        },
      });
    });

    pbjs.que.push(() => {
      pbjs.addAdUnits(adUnit);
      pbjs.onEvent("bidResponse", (winningBid) => {
        const doc = adFrame.contentWindow.document;
        pbjs.renderAd(doc, winningBid.adId);
        console.log("[Prebid] Bid response rendered");
      });
      pbjs.onEvent("bidWon", (bid) => {
        console.log("[Prebid] Bid won", bid);
      });
      pbjs.requestBids({ timeout: 1000 });
    });

    return true;
  }

  const interval = setInterval(() => {
    if (initPrebid()) {
      clearInterval(interval);
      console.log("[Prebid] Initialization complete");
    }
  }, 100);
});
