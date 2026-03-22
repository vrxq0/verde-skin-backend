const express = require('express');
const router = express.Router();
const { createOrder, getOrders, updateOrderStatus } = require('../controllers/orderController');

// إنشاء طلب جديد
router.post('/', createOrder);

// جلب جميع الطلبات (للوحة التحكم)
router.get('/', getOrders);

// تحديث حالة الطلب
router.put('/:id', updateOrderStatus);

module.exports = router;