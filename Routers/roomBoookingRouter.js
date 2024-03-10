import express from 'express';
import { bookRoom, createRoom, getAllCustomers, getCustomerBookingHistory, getRooms } from '../Controllers/roomBookingController.js';

const router = express. Router();


router.post('/room-create',createRoom);
router.post('/book-room',bookRoom);
router.get('/all-rooms', getRooms);
router.get('/all-customers', getAllCustomers);
router.get('/booking-history/:customer_name',getCustomerBookingHistory);





export default router;