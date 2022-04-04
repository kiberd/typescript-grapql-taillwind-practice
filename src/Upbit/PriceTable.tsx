import React, { useEffect, useState } from "react";

import { useSort } from "../Hooks";

interface PriceTableProps {
	data: PriceInfo[] | undefined;
	isLoading: boolean;
}

interface PriceInfo {
	code: string;
	currentPrice: number;
	changeRate: number;
	tradeVolume: number;
}

const getName = (code: string) => {
	switch (code) {
		case "KRW-BTC":
			return "비트코인";
		case "KRW-ETH":
			return "이더리움";
		case "KRW-BCH":
			return "비트코인캐시";
		case "KRW-ETC":
			return "이더리움클래식";
		case "KRW-SAND":
			return "샌드박스";
		case "KRW-ZIL":
			return "질리카";
		case "KRW-WAVES":
			return "웨이브";
		case "KRW-IQ":
			return "에브리피디아";
		case "KRW-SAND":
			return "웨이브";
		case "KRW-IOST":
			return "아이오에스티";
		case "KRW-HUM":
			return "휴먼스케이프";
		case "KRW-FCT2":
			return "피르마체인";
		case "KRW-JST":
			return "저스트";
		case "KRW-XRP":
			return "리플";
		case "KRW-STRAX":
			return "스트라티스";
		case "KRW-TRX":
			return "트론";
		case "KRW-POWR":
			return "파워렛져";
		case "KRW-PLA":
			return "플레이댑";
		case "KRW-VET":
			return "비체인";
		case "KRW-SRM":
			return "세럼";
		case "KRW-KNC":
			return "카이버네트워크";
		case "KRW-OMG":
			return "오미세고";
		case "KRW-SC":
			return "시아코인";
		case "KRW-NEAR":
			return "니어프로토콜";
		case "KRW-CRE":
			return "캐리프로토콜";
		case "KRW-MBL":
			return "무비블록";
		case "KRW-MED":
			return "메디블록";
		case "KRW-CBK":
			return "코박토큰";
		case "KRW-RFR":
			return "리퍼리움";
		case "KRW-UPP":
			return "센티넬프로토콜";
		case "KRW-STPT":
			return "에스티피";
		case "KRW-GLM":
			return "골렘";
		case "KRW-ORBS":
			return "옵저버";
		case "KRW-POLY":
			return "폴리메쓰";
		case "KRW-HIVE":
			return "하이브";
		default:
			break;
	}
};



	// const columns = useMemo(
	// 	() => [
	// 		{
	// 			Header: "한글명",
	// 			accessor: "code",
	// 		},
	// 		{
	// 			Header: "현재가",
	// 			accessor: "currentPrice",
	// 		},
	// 		{
	// 			Header: "전일대비",
	// 			accessor: "changeRate",
	// 		},
	// 		{
	// 			Header: "거래대금",
	// 			accessor: "tradeVolume",
	// 		},
	// 	],
	// 	[]
	// );



const PriceTable: React.FunctionComponent<PriceTableProps> = ({
	data,
	isLoading,
}) => {
	const { sortedRows, order, createSortHandler } = useSort(
		data,
		"desc",
		"tradeVolume"
	);


	return (
		<div className="w-full h-full overflow-auto">
			{isLoading ? (
				<div>Loading</div>
			) : (
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>


                        {/* {columns.map((column, index) => (
                            <TableHeaderNameCell>
                                <TableSortLabel
                                    key={index}
                                    direction={"asc"}
                                    onClick={createSortHandler(column.accessor)}>
                                        <span>{column.Header}</span>
                                </TableSortLabel>
                            </TableHeaderNameCell>
                        ))} */}




							<th scope="col" className="px-6 py-3">
								한글명
								<svg
									stroke="currentColor"
									fill="currentColor"
									strokeWidth="0"
									viewBox="0 0 320 512"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
									className="inline ml-2 mb-2 cursor-pointer"
									onClick={createSortHandler("code")}
								>
									<path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
								</svg>
							</th>

							<th scope="col" className="px-4 py-3">
								현재가
								<svg
									stroke="currentColor"
									fill="currentColor"
									strokeWidth="0"
									viewBox="0 0 320 512"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
									className="inline ml-2 mb-2 cursor-pointer"
									onClick={createSortHandler("currentPrice")}
								>
									<path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
								</svg>
							</th>
							<th scope="col" className="px-4 py-3">
								전일대비
								<svg
									stroke="currentColor"
									fill="currentColor"
									strokeWidth="0"
									viewBox="0 0 320 512"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
									className="inline ml-2 mb-2 cursor-pointer"
									onClick={createSortHandler("changeRate")}
								>
									<path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
								</svg>
							</th>
							<th scope="col" className="px-4 py-3">
								거래대금
								<svg
									stroke="currentColor"
									fill="currentColor"
									strokeWidth="0"
									viewBox="0 0 320 512"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
									className="inline ml-2 mb-2 cursor-pointer"
									onClick={createSortHandler("tradeVolume")}
								>
									<path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
								</svg>
							</th>
						</tr>
					</thead>
					<tbody>
						{sortedRows?.map((info: PriceInfo) => (
							<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
								>
									{getName(info.code)}
								</th>
								<td className="px-4 py-3">
									{info.currentPrice.toLocaleString()}
								</td>
								<td className="px-4 py-3">
									{(info.changeRate * 100).toFixed(2)}%
								</td>
								<td className="px-4 py-3">
									{Math.floor(
										info.tradeVolume * 0.000001
									).toLocaleString()}
									백만
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default React.memo(PriceTable);
