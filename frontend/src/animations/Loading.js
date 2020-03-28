import React, {Fragment} from 'react';
import Lottie from 'lottie-react-web';


export default function Loading({animation}) {
    return (
        <Fragment>
            <Lottie  options={{animationData: animation}}></Lottie>
        </Fragment>
    )
}
