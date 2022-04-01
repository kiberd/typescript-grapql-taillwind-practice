import React, {useEffect} from 'react';


import Moives from "./Movies/Moives";

import Header from "./Upbit/Header";

import PriceContainer from "./Upbit/PriceContainer";
import PriceChart from "./Upbit/PriceChart";
import PriceSearch from "./Upbit/PriceSearch";
import PriceTable from "./Upbit/PriceTable";


interface ContainerProps {

}

const Container: React.FunctionComponent<ContainerProps> = () => {


    return (


        <div className="container mx-auto">

            {/*Header*/}
            <Header/>

            {/*MainWrapper*/}

            <div className="flex flex-row min-h-[90vh]">

                {/*Price Chart*/}
                <div className="basis-4/6">
                    <PriceChart />
                </div>

                {/*Price Panel*/}
                <div className="basis-2/6 border border-black-600 rounded-md mt-2">
                    <PriceContainer />
                </div>

            </div>
        </div>

    )

};

export default Container;


