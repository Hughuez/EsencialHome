import React from 'react'
import {Helmet} from 'react-helmet'; // nos ayuda a establecer las cabeceras de las paginas

const MetaData = ({title}) => {
    return(
        <Helmet>
            <title>{`${title} - EsencialHome`}</title>
        </Helmet>
    )
}

export default MetaData;