import React, {useEffect} from 'react';


interface PriceTableProps {
    data: PriceInfo[] | undefined,
    targetCoinList: string[] | undefined,
}

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

const PriceTable: React.FunctionComponent<PriceTableProps> = ({data, targetCoinList}) => {

    return (
        <table className="table-auto">
            <thead>
            <tr>
                <th>한글명</th>
                <th>현재가</th>
                <th>전일대비</th>
                <th>거래대금</th>
            </tr>
            </thead>

            <tbody>

            {data?.map((info:PriceInfo) => (
                <tr>
                    <td>
                        {getName(info.code)}
                    </td>
                    <td>
                        {info.currentPrice.toLocaleString()}
                    </td>
                    <td>
                        {(info.changeRate * 100).toFixed(2)}%
                    </td>
                    <td>
                        {Math.floor(info.tradeVolume * 0.000001).toLocaleString()}백만
                    </td>
                </tr>

            ))}




            </tbody>
        </table>
    )
}
export default PriceTable;