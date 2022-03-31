import { atom } from "recoil";

export const coinListState = atom({
    key: "coinListState",
    // default: [],
    default: {
        entireCoinList : ["KRW-BTC", "KRW-ETH", "KRW-BCH", "KRW-ETC", "KRW-SAND"],
        bookMarkCoinList : ["KRW-BTC", "KRW-ETH"],
    }
})