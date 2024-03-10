

export const renderHomePage = (req, res) => {
    const routes = [
        { method: 'POST', path: '/room-create', description: 'Create a new room' },
        { method: 'POST', path: '/book-room', description: 'Book a room' },
        { method: 'GET', path: '/all-rooms', description: 'List all rooms' },
        { method: 'GET', path: '/all-customers', description: 'List all customers with booked data' },
        { method: 'GET', path: '/booking-history/:customer_name', description: 'List booking history for a customer' }
    ];

    res.status(200).send({ 
        message: "Welcome to Bavithra's hotel",
        routes: routes
    });
};