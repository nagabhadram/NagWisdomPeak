React User Directory Application

This project is a React-based user directory application that fetches user data from an API and allows users to browse, search, and sort the user list. It also provides detailed information about individual users.

Features

User List: Displays a list of users fetched from an external API.

Search: Allows searching for users by their name.

Sorting: Provides options to sort users alphabetically (A-Z and Z-A).

User Details: Displays detailed information about a selected user.

Responsive Design: Fully responsive layout that works across devices.

Technologies Used

React: Frontend library for building user interfaces.

React Router: For navigation and routing.

CSS: For styling components.

Folder Structure

src/ |-- components/ | |-- BackButton/ | | |-- BackButton.js | | |-- BackButton.css | |-- HomePage/ | | |-- HomePage.js | | |-- HomePage.css | |-- SearchBar/ | | |-- SearchBar.js | | |-- SearchBar.css | |-- SortButtons/ | | |-- SortButtons.js | | |-- SortButtons.css | |-- UserDetailPage/ | | |-- UserDetailPage.js | | |-- UserDetailPage.css | |-- UserItem/ | | |-- UserItem.js | | |-- UserItem.css | |-- UserList/ | |-- UserList.js | |-- UserList.css |-- context/ | |-- UserContext.js |-- App.js |-- App.css

Installation

Clone the repository:

git clone https://github.com/yourusername/react-user-directory.git

Navigate to the project directory:

cd react-user-directory

Install dependencies:

npm install

Start the development server:

npm start

The app will be available at http://localhost:3000.

Components

1. BackButton

A reusable button component to navigate back to the previous page.

2. HomePage

The main page that displays the user directory with search and sort functionality.

3. SearchBar

A component for filtering the user list based on search input.

4. SortButtons

Provides buttons to sort users alphabetically (A-Z and Z-A).

5. UserDetailPage

Displays detailed information about a selected user.

6. UserItem

Represents an individual user in the list.

7. UserList

Displays a list of all users as a collection of UserItem components.

8. UserContext

Provides global state management for user data, loading status, and errors.

API Used

JSONPlaceholder: A fake online REST API used for testing and prototyping. (https://jsonplaceholder.typicode.com/users)

Future Improvements

Add pagination to handle large user lists.

Implement user addition and deletion features.

Enhance error handling and display.
