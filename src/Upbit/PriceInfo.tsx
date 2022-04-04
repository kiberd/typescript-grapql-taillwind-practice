import React from "react";

const PriceInfo = () => {
	return (
		<div className="flex w-full h-1/6 justify-center items-center">
			<div className="w-full h-full border border-black-600 rounded-md mr-5 ml-5 mt-8">
				<div className="flex flex-row h-1/3 border-b">
					<div className="ml-4 mr-4 mt-3 mb-3">
						<span
							className="input-group-text flex items-center px-1 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
							id="basic-addon2"
						>
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="search"
								className="w-4"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path
									fill="currentColor"
									d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
								></path>
							</svg>
						</span>
					</div>

					{/* 아이콘 */}
					<div className="ml-4 mr-4 mb-3 mt-3.5"></div>

					{/* 시세 정보 아이콘 */}
					<div className="flex flex-row ml-auto w-2/6">
						<div className="w-2/5 text-center mt-3.5 border-b-4 border-indigo-500">
							시세
						</div>
						<div className="w-2/5 text-center mt-3.5">정보</div>
						<div className="flex justify-center items-center w-1/5 border-l">
							<div>
								<span
									className="input-group-text flex items-center px-1 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
									id="basic-addon2"
								>
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="search"
										className="w-4"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<path
											fill="currentColor"
											d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
										></path>
									</svg>
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-row h-2/3">
					{/* 실시간 가격 */}

					<div className="flex justify-center items-center">
						<div className="ml-5">
							<span className="block">
								<strong className="text-2xl">56,435,000</strong>
								<em>KRW</em>
							</span>

							<span className="block mt-1">
								<p className="inline-block">전일대비</p>
								<strong>-0.07%</strong>
								<strong>-42,000</strong>
							</span>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default PriceInfo;
