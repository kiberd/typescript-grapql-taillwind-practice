import React, {useEffect} from 'react';


import Moives from "./Movies/Moives";

import Header from "./Upbit/Header";


interface ContainerProps {

}

const Container: React.FunctionComponent<ContainerProps> = () => {


    return (


        <div className="container mx-auto">

            {/*Header*/}
            <Header />

            {/*MainWrapper*/}

            <div className="flex flex-row min-h-[90vh]">

                {/*Price Chart*/}
                <div className="basis-4/6 min-h-full">02</div>

                {/*Price Panel*/}
                <div className="basis-2/6 min-h-full">

                    {/*Price Panel Container*/}
                    <div className="flex flex-col min-h-full">

                        {/*Price Info*/}
                        <div className="basis-2/6 bg-indigo-500">
                            <div className="min-h-full">
                                ddd
                            </div>

                        </div>

                        {/*Pirce Table*/}
                        <div className="basis-4/6 bg-cyan-500">

                        </div>

                    </div>


                </div>

            </div>
        </div>

    )

};

export default Container;


