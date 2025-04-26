# Car Dealership Website

Welcome to the Car Dealership Website project! This project is designed to provide a user-friendly interface for customers to explore available cars and for employees to manage the inventory effectively.

## Project Structure

The project is organized as follows:

```
car-dealership-website
├── public
│   ├── index.html          # Welcome page with contact form
│   ├── inventory.html      # Inventory page displaying cars in stock
│   └── assets
│       ├── css
│       │   └── styles.css  # CSS styles for the website
│       ├── js
│       │   └── scripts.js   # JavaScript for dynamic interactions
│       └── images          # Directory for image assets
├── src
│   ├── app.js              # Main entry point for the backend
│   ├── data
│   │   └── inventory.json   # JSON file containing inventory data
│   └── utils
│       └── helpers.js      # Utility functions for the application
├── package.json            # npm configuration file
├── README.md               # Project documentation
└── .gitignore              # Files and directories to ignore by Git
```

## Features

- **Welcome Page**: A visually appealing landing page that includes a picture, dealership information, and a contact form for inquiries.
- **Inventory Page**: A dedicated page to display the current inventory of cars with filtering options by brand (Nissan, Toyota, Honda).
- **Dynamic Interactions**: JavaScript functionality to handle form submissions and filter the inventory based on user selections.
- **Backend Setup**: A simple server setup using Node.js to serve static files and manage inventory data.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd car-dealership-website
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the website.

## Usage Guidelines

- Use the contact form on the welcome page to reach out with any inquiries.
- Navigate to the inventory page to view available cars and use the filtering options to find specific brands.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.