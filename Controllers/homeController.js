

export const renderHomePage = (req, res) => {
    let htmlResponse = `
        <html>
            <head>
                <title>Welcome to Bavithra's Hotel</title>
            </head>
            <body>
                <h1>Welcome to Bavithra's Hotel</h1>
                <ul>
                    <li><b>POST</b> /api/room-create - Create a new room</li>
                    <li><b>POST</b> /api/book-room - Book a room</li>
                    <li><b>GET</b> /api/all-rooms - List all rooms</li>
                    <li><b>GET</b> /api/all-customers - List all customers with booked data</li>
                    <li><b>GET</b> /api/booking-history/:customer_name - List booking history for a customer</li>
                </ul>
            </body>
        </html>
    `;

    res.status(200).send(htmlResponse);
};