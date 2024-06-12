import axios from 'axios';
import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/productConstants';


export const getProducts = () => async(dispatch)=>{
    try {
        dispatch({type: ALL_PRODUCTS_REQUEST}) //solicitud de los productos que estamos buscando

        const {data} = await axios.get('api/productos') //ruta donde el back devuelve la informacion, cumplida la promesa guarda la informacion en esta constante

        //si la solicitud es exitosa y se guarda la informacion en const data, muestra la respuesta en pantalla
        dispatch({
            type:ALL_PRODUCTS_SUCCESS,
            payload: data
        })
    //atrapa el error
    }catch (error){
        dispatch({
            type:ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}

//VER DETALLE DEL PRODUCTO
export const getProductDetails = (id) => async(dispatch)=>{
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST})

        const {data} = await axios.get(`api/producto/:${id}`)

        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        })
    }catch (error){
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}   


//clear error
export const clearErrors = () => async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}

/*
conectamos el back con el front poniendo la conexion en el package.json del front
"proxy":"http://localhost:4000"
*/