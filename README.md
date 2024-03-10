# Hall Booking Application

This is a Node.js application for managing hall bookings. It provides APIs for creating rooms, booking rooms, listing all rooms with booking data, listing all customers with booking data, and fetching booking history for a customer.

## Setup

1. **Clone the repository:**
   ```bash
   git clone <https://github.com/bavi2477/Day-38-Task.git>

2. **Install dependencies**
   ```bash
   npm install

3. **Run the Application**
   ```bash
   npm start

### Usage

#### Routes

- **POST /api/room-create**

  - Creates a new room with the provided details.
  
  - **Request body:**
  
    ```json
    {
        "room_name": "Room 1",
        "seats": 10,
        "price_per_hour": 1000
    }
    ```

- **POST /api/book-room**

  - Books a room with the provided details.
  
  - **Request body:**
  
    ```json
    {
        "customer_name": "John Doe",
        "date": "2024-03-08",
        "start_time": "10:00 AM",
        "end_time": "12:00 PM",
        "room_id": 1
    }
    ```

- **GET /api/all-rooms**

  - Lists all rooms with booking data.
  
- **GET /api/all-customers**

  - Lists all customers with booking data.

- **GET /api/booking-history/:customer_name**

  - Lists booking history for a customer and total counts.

## Dependencies

- **express:** ^4.17.1
- **cors:** ^2.8.5

