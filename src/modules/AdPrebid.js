function loadPrebidScript() {
  return new Promise((resolve, reject) => {
    console.log("[AdPrebid] Loading prebid10.10.0.js");
    const script = document.createElement("script");
    script.src = "/prebid10.10.0.js";
    script.async = true;
    script.onload = () => {
      console.log("[AdPrebid] prebid10.10.0.js loaded");
      resolve();
    };
    script.onerror = () => {
      console.error("[AdPrebid] Failed to load prebid10.10.0.js");
      reject(new Error("Failed to load Prebid.js"));
    };
    document.head.appendChild(script);
  });
}

function initPrebid() {
  console.log("AdPrebid module loaded");

  loadPrebidScript()
    .then(() => {
      function initAd() {
        const adFrame1 = document.getElementById("ad-frame-0");
        const adFrame2 = document.getElementById("ad-frame-1");
        if (!adFrame1 || !adFrame2) {
          return false;
        }

        const adUnits = [
          {
            code: "ad-frame-0",
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
                {
        bidder: 'bidmatic',
        params: {
          placement: '886409'
        }
      }
            ],
          },
          {
            code: "ad-frame-1",
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
                {
        bidder: 'bidmatic',
        params: {
          placement: '886409'
        }
      }
            ],
          },
        ];

  window.pbjs = window.pbjs || { que: [] };
      if (!Array.isArray(window.pbjs.que)) {
        console.warn("[AdPrebid] window.pbjs.que is not an array, initializing as empty array");
        window.pbjs.que = [];
      }
        window.pbjs.que.push(() => {
          window.pbjs.addAdUnits(adUnits);
          window.pbjs.requestBids({
            bidsBackHandler: (bidResponse) => {
              const bidsForFrameOne = window.pbjs.getHighestCpmBids("ad-frame-0");
              if (bidsForFrameOne.length > 0) {
                const doc1 = adFrame1.contentWindow.document;
                const doc2 = adFrame2.contentWindow.document;
                window.pbjs.renderAd(doc1, bidsForFrameOne[0].adId);
                window.pbjs.renderAd(doc2, bidsForFrameOne[0].adId);
                console.log("[PrebidModule] Ad rendered in ad-frame-0");
              } else {
                console.log("[PrebidModule] No bids for ad-frame-0");
              }

            },
          });
        });
        return true;
      }
      const interval = setInterval(() => {
        if (initAd()) {
          clearInterval(interval);
        }
      }, 100);
    })
    .catch((error) => {
      console.error("[AdPrebid] Error loading Prebid.js:", error);
    });
}
initPrebid();

