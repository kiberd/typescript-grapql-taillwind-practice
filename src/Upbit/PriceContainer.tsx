import React, {useState, useEffect, useMemo} from 'react';
import {IMessageEvent, w3cwebsocket} from "websocket";

import { useRecoilValue, useRecoilState } from "recoil";

import { coinListState } from "../recoil/coin/atom";

import PriceSearch from "./PriceSearch";
import PriceTable from "./PriceTable";

interface PriceInfo {
    code: string,
    currentPrice: number,
    changeRate: number,
    tradeVolume: number,
}

const getName = (code: string) => {

    switch (code) {
        case "KRW-BTC":
            return "비트코인"
        case "KRW-ETH":
            return "이더리움"
        case "KRW-BCH":
            return "비트코인캐시"
        case "KRW-ETC":
            return "이더리움클래식"
        case "KRW-SAND":
            return "샌드박스"

        default:
            break;
    }
}


const PriceContainer = () => {

    // const coinList = useRecoilValue(coinListState);
    const [coinList, setCoinList] = useRecoilState(coinListState);

    const [targetCoinList, setTargetCoinList] = useState<string[]>();
    const [searchKeyword, setSearchKeyword] = useState<string>();

    const [priceInfo, setPriceInfo] = useState<PriceInfo[]>();
    const [socketInit, setSocketInit] = useState(false);

    let client: w3cwebsocket;

    useEffect(() => {

        // Set inital coin list (entire)
        setTargetCoinList(coinList.entireCoinList);

        // Set inital price info map
        const priceInfoArry: PriceInfo[] = [];
        coinList.entireCoinList.map((code) => {

            const priceInfoObj: PriceInfo = {
                code: code,
                currentPrice: 0,
                changeRate: 0,
                tradeVolume: 0,
            };

            priceInfoArry.push(priceInfoObj);
        });

        setPriceInfo(priceInfoArry);

    },[]);

    useEffect(() => {


        if (priceInfo && !socketInit){

            client = new w3cwebsocket("wss://api.upbit.com/websocket/v1");
            client.binaryType = "arraybuffer";

            client.onopen = () => {
                onOpen();
            }

            client.onmessage = (e: IMessageEvent) => {
                onMessage(e);
            }

            setSocketInit(true);
        }

    } ,[priceInfo]);


    const onOpen = () => {
        const msg = JSON.stringify([
            { ticket: "TEST" }, { type: "ticker", codes: coinList.entireCoinList }
        ]);
        doSend(msg);
    };

    const doSend = (msg: string) => {
        client.send(msg);
    }

    const onMessage = (e: IMessageEvent) => {

        const enc = new TextDecoder("utf-8");
        const arr = new Uint8Array(e.data as ArrayBuffer);
        const priceData = JSON.parse(enc.decode(arr));

        const code = priceData.code;

        if (priceInfo){

            let targetIndex = 0;
            priceInfo.map((price, index) => {
                if (code === price.code) targetIndex = index;
            });

            const tempArry = [...priceInfo];
            tempArry[targetIndex].currentPrice = priceData.trade_price;
            tempArry[targetIndex].changeRate = priceData.signed_change_rate;
            tempArry[targetIndex].tradeVolume = priceData.acc_trade_price_24h;

            setPriceInfo(tempArry);

        }
    };

    function filterCoinList (priceInfo: PriceInfo[] | undefined){

        let filterdArry: PriceInfo[] = [];
        let resultArry: PriceInfo[] = [];

        targetCoinList?.map((code) => {
            priceInfo?.map((info) => {
                if (code === info.code) filterdArry.push(info);
            });
        });

        resultArry = filterdArry;

        if (searchKeyword){
            filterdArry.map((info) => {
                if (getName(info.code)?.includes(searchKeyword)) resultArry.push(info);
            });
        }

        return resultArry;
    };

    const handleSearchKeyword = (searchKeyword: string) => {
        setSearchKeyword(searchKeyword);
    }

    const columns = useMemo(() => [
            {
                Header: '한글명',
                accessor: 'code'
            },
            {
                Header: '현재가',
                accessor: 'currentPrice',
            },
            {
                Header: '전일대비',
                accessor: 'changeRate',
            },
            {
                Header: '거래대금',
                accessor: 'tradeVolume',
            }
        ], []
    );

    const data = useMemo(() => filterCoinList(priceInfo), [priceInfo]);

    return (
        <div className="flex flex-col min-h-full">
            <button onClick={() => setTargetCoinList(coinList.entireCoinList)}>EntireCoinList</button>
            <button onClick={() => setTargetCoinList(coinList.bookMarkCoinList)}>BookmarkCoinList</button>
            <PriceSearch onHandleSearchKeyword={handleSearchKeyword}/>
            <PriceTable data={data} targetCoinList={targetCoinList}/>
        </div>
    )
}

export default PriceContainer;