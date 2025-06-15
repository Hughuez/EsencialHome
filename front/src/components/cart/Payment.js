import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import uuid from "react-native-uuid";
import { clearErrors, createOrder } from '../../actions/orderActions';
import MetaData from '../layaout/MetaData';
import { useAlert } from 'react-alert';
import CheckoutSteps from './CheckOutSteps';

export const Payment = () => {
    const navigate = useNavigate();
    const alert = useAlert();
    const dispatch = useDispatch();
    const id = uuid.v4();
    const { cartItems, shippingInfo } = useSelector(state => state.cart);
    const { error } = useSelector(state => state.newOrder);
    const [paymentMethod, setPaymentMethod] = useState("Tarjeta");
    const [cardType, setCardType] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardDate, setCardDate] = useState("");
    const [cardCVC, setCardCVC] = useState("");
    
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, alert, error]);

    let items = cartItems.map(elem => ({
        nombre: elem.nombre,
        cantidad: elem.quantity,
        imagen: elem.imagen,
        precio: elem.precio,
        producto: elem.product
    }));

    const order = { items, envioInfo: shippingInfo };
    const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

    if (orderInfo) {
        order.precioItems = orderInfo.precioItems;
        order.precioEnvio = orderInfo.precioEnvio;
        order.precioImpuesto = orderInfo.precioImpuesto;
        order.precioTotal = orderInfo.precioTotal;
        order.pagoInfo = { id: id, estado: "Aceptado" };
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(createOrder(order));
            localStorage.removeItem("cartItems");
            alert.success("Orden registrada correctamente");
            navigate("/success");
            window.location.reload(false);
        } catch (error) {
            alert.error("No se logró registrar la compra");
        }
    };

    return (
        <Fragment>
            <MetaData title={'Pago'} />
            <CheckoutSteps shipping confirmOrder payment />

            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mb-4">Seleccione método de pago</h1>
                        <div className="form-group">
                            <label>
                                <input 
                                    type="radio" 
                                    name="paymentMethod" 
                                    value="Tarjeta" 
                                    checked={paymentMethod === "Tarjeta"} 
                                    onChange={(e) => setPaymentMethod(e.target.value)} 
                                />
                                Tarjeta de (crédito / débito)
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    name="paymentMethod" 
                                    value="PSE" 
                                    checked={paymentMethod === "PSE"} 
                                    onChange={(e) => setPaymentMethod(e.target.value)} 
                                />
                                PSE (Transferencia bancaria)
                            </label>
                        </div>

                        {paymentMethod === "Tarjeta" && (
                            <Fragment>
                                <div className="form-group">
                                    <label htmlFor="card_type">Tipo de tarjeta</label>
                                    <select 
                                        id="card_type" 
                                        className="form-control" 
                                        value={cardType} 
                                        onChange={(e) => setCardType(e.target.value)}
                                    >
                                        <option value="">Seleccione</option>
                                        <option value="Crédito">Crédito</option>
                                        <option value="Débito">Débito</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="card_num_field">Número de tarjeta</label>
                                    <input 
                                        type="number" 
                                        id="card_num" 
                                        className="form-control" 
                                        value={cardNumber} 
                                        onChange={(e) => setCardNumber(e.target.value)} 
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="card_num_field">Fecha vencimiento mmaa</label>
                                    <input 
                                        type="number" 
                                        id="card_num" 
                                        className="form-control" 
                                        value={cardDate} 
                                        onChange={(e) => setCardDate(e.target.value)} 
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="">CVC</label>
                                    <input 
                                        type="number" 
                                        id="card_cvc" 
                                        className="form-control" 
                                        value={cardCVC} 
                                        onChange={(e) => setCardCVC(e.target.value)} 
                                    />
                                </div>
                            </Fragment>
                        )}

                        <button id="pay_btn" type="submit" className="btn btn-block py-3">
                            Pagar ${` - ${orderInfo?.precioTotal || ''}`}
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};