

let rooms = [
    {
        room_id : 1,
        room_name: 'r-1',
        room_status: 'available',
        seats: 4,
        price_per_hours: 2000
    },
    {
        room_id : 2,
        room_name: 'r-2',
        room_status: 'available',
        seats: 4,
        price_per_hours: 2300
    },
    {
        room_id : 3,
        room_name: 'r-3',
        room_status: 'not available',
        seats: 4,
        price_per_hours: 1900
    },
]

let bookingRoom = [];

 
export const createRoom = (req, res) => {
    const { room_name, seats, price_per_hours } = req.body;
    
    const room_id = rooms.length + 1;

    const newRoom = {
        room_id: room_id,
        room_name: room_name,
        room_status: 'available',
        seats: seats,
        price_per_hours: price_per_hours
    };

    rooms.push(newRoom);

    res.status(201).json({ message: "Room created successfully", room: newRoom });
};

export const bookRoom = (req,res) => {
    let {customer_name, date, start_time, end_time, room_id} = req.body;

    let room = rooms.find((room) => room.room_status === "available" && room.room_id === room_id);
    if(!room) {
        return res.status(404).json({message: "Room is not available"});
    }
    else {
        let bookingDate = bookingRoom.filter((room) => room.booking_date === date)

        if(bookingDate.length > 0){
            return res.status(400).json({message: "Date is not available"})
        } else {
            let booking = {
                customer_name,
                start_time,
                end_time,
                room_id,
                Date: date,
                booking_id : bookingRoom.length + 1,
                status: "booked"
            }

            bookingRoom.push(booking)
            return res.status(200).json({message: "Room booked successfully", BookingRoom: bookingRoom})
        }
    }
}

export const getRooms = (req,res) => {
    let roomsWithBookings = rooms.map(room => {
        let bookingsForRoom = bookingRoom.filter(booking => booking.room_id === room.room_id);
        let bookedStatus = bookingsForRoom.length > 0;
        return {
            room_name: room.room_name,
            booked_status: bookedStatus,
            bookings: bookingsForRoom.map(booking => ({
                customer_name: booking.customer_name,
                date: booking.Date,
                start_time: booking.start_time,
                end_time: booking.end_time
            }))
        };
    });
    res.status(200).json({message: "Succesfully fetched all the rooms with bookings",roomsWithBookings});
};

export const getAllCustomers = (req, res) => {
    
    const customerList = bookingRoom.map((booking) => {
        const room = rooms.find(room => room.room_id === booking.room_id);
        if (room) {
            return {
                customer_name: booking.customer_name,
                room_name: rooms.room_name,
                date: booking.Date,
                start_time: booking.start_time,
                end_time: booking.end_time
            }
        }
    });
    
    return res.status(200).json({message: "successfully fetches all customer with booking details", customerList});
};

export const getCustomerBookingHistory = (req, res) => {
    const { customer_name } = req.params;

    const customerBookingHistory = bookingRoom.filter((booking) => {
        return booking.customer_name === customer_name;
    });

    res.status(200).json({ 
        message: "successfully fetched", 
        customer_name,
        booking_count : bookingRoom.length,
        bookings: customerBookingHistory
     });
};


