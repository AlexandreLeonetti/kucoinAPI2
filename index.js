/* see demo line 178 for margin */

/** Require SDK */
const API = require('kucoin-node-sdk');
const uuid = require('uuid');
const dotenv = require("dotenv");
const schedule = require("node-schedule");
const {sleep} = require("./utils/utils");

/** Init Configure */
API.init(require('./config'));

/** API use */
const main = async () => {
      const getTimestampRl = await API.rest.Others.getTimestamp();
      console.log(getTimestampRl.data);
      const st = await API.rest.Others.getStatus();
        console.log(st);

const uuid4 = uuid.v4()
    console.log(uuid4)

      let marketParams = {
          clientOid : uuid4,
          side      : "buy",
          symbol    : "TON-USDT",
          type      : "market",
          //tradeType : "MARGIN_TRADE",
          size      : "2",
          isIsolated: true,
          marginModel:"isolated"
      }


      const market1 = await API.rest.Margin.MarginInfo.postMarginOrder({
          ...marketParams
      });
      console.log(market1);

    await sleep(1000);
    const uuid4b = uuid.v4();
      const sl1 =  await API.rest.Trade.StopOrder.postStopOrder({
          clientOid: uuid4b,
          side        :"sell",
          symbol      :"TON-USDT",
          stop        :"loss",
          stopPrice   :"6.1",
          price       :"6",
          size        :"1.8",
          tradeType   :"MARGIN_ISOLATED_TRADE"

      });

     console.log(sl1);

};

/* call main on schedule */

const m1 = "58 * * * * * ";
const m5  = "57 4,9,14,19,24,29,34,39,44,49,54,59 * * * *";
const m15 = "55 14,29,44,59 * * * *";

const h4= "55 59 3,7,11,15,19,23 * * *";
const h8= "50 59 7,15,23 * * *";
const h12 = "50 59 11,23 * * *";
const d1  = "47 59 23 * * *";

let interval = schedule.scheduleJob(m5, function(){
    main();
});
