const express=require("express");
const router=express.Router();
const { 
    newOrder, 
    getOneOrder, 
    myOrders, 
    allOrders,
    updateOrder,
    deleteOrder
} = require("../controllers/orderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder) //cuar una orden
router.route("/order/:id").get(isAuthenticatedUser, getOneOrder) //buscar una orden
router.route("/orders/my_orders").get(isAuthenticatedUser, myOrders) //buscar todas las ordenes desde usuario


//rutas de admin
router.route("/admin/orders").get(isAuthenticatedUser, authorizeRoles("admin"), allOrders) //ver ordenes desde admin
router.route("/admin/order/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder) //editar orden desde admin (Estado de la orden)
router.route("/admin/order/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder) //eliminar orden desde admin


module.exports=router;