
# Todo List Node.js App

This is a simple "To-Do List" application built with Node.js and Express.js. The application stores the to-do items in-memory.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Navigate to the project directory.
2. Install the dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and visit `http://localhost:3000`.

## Project Structure

- `package.json` - Defines the app's metadata and dependencies.
- `server.js` - Sets up the Express.js server, routes, and in-memory to-do list storage.
- `views/` - Contains EJS templates for the application.
  - `index.ejs` - The main view for displaying and interacting with the to-do list.

## License

This project is licensed under the MIT License.

## Acknowledgements

- Thanks to the Express.js team for the web framework.
## How to Clone the Project
```bash
git clone <REPOSITORY_URL>
cd todo-app-nodejs
npm install
```

## Naming Conventions
- Variables: `camelCase`
- Functions: `camelCase`
- Constants: `UPPER_SNAKE_CASE`
- Filenames: `kebab-case`

## API Endpoints
1. **GET** `/` - Retrieve the list of todos.
2. **POST** `/add` - Add a new todo item.
3. **POST** `/delete/:index` - Delete a todo item by its index.

## Documentation Links
- [Express.js Documentation](https://expressjs.com/)
- [EJS Documentation](https://ejs.co/)
- [Node.js Documentation](https://nodejs.org/docs/)

## Third-Party Libraries Used
- [Express.js](https://expressjs.com/) - Web framework for Node.js.
- [EJS](https://ejs.co/) - Embedded JavaScript templating.
- [Body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware.

## Existing Features
- View a list of todo items.
- Add new todo items.
- Delete existing todo items.

## Upcoming Features
- User authentication.
- Persistent storage using a database.
- Ability to edit existing todo items.

## API Routing Navigation
```
/
|-- GET: Display todo list
|-- POST: /add - Add a new todo
|-- POST: /delete/:index - Delete a todo by its index
```
## Architecture of the Application

The Todo List Node.js App is a simple web application with a minimalistic architecture, designed primarily for demonstration purposes.

### Overview:

- **Frontend**: The user interface is built using EJS (Embedded JavaScript) templates. It provides forms to add and delete to-do items and displays the current list of items.
  
- **Backend**: The server-side logic is implemented using Express.js, a lightweight web application framework for Node.js. The app listens for HTTP requests, handles them, and sends back appropriate responses.

- **Data Storage**: The application uses in-memory storage for simplicity. This means the to-do items are stored in a JavaScript array on the server. Note: The items will be lost if the server is restarted.

### Flow:

1. The user accesses the app through a web browser.
2. The browser sends an HTTP request to the server.
3. The server processes the request. If it's a request to view items, the server fetches the list from memory. If it's a request to add or delete an item, the server updates the in-memory list accordingly.
4. The server responds with the appropriate HTML page rendered using EJS templates.
5. The user interacts with the page, triggering more requests as necessary.
