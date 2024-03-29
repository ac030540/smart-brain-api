# smart-brain-api

It is backend API for the smart brain project.

The API helps in performing the following actions:    
1. Login a user
2. Registering a user
3. Getting the name of the celebrity in the image.
4. Updating the number of times the user has used the app to detect the name of the celebrity present in the image.

## Getting started with the project

- Fork the repository on GitHub.
- Navigate to the folder of the repository.
- To run this project, you should have node.js and npm installed on your system.
  If you don't have node.js and npm, you can visit [The official site of node.js](https://nodejs.org/en/)
  to install them on your system.
- Install NPM dependencies.
  ```
  npm install
  ```
- Create the .env file and copy the contents of .env.example into it by typing the following command:  
  For Linux or Mac (or Windows PowerShell):
  ```
  cp .env.example .env
  ```
  For Windows(cmd):
  ```
  copy .env.example .env
  ```
- Update the API_KEY environment variable.
- Run the development server to view the changes you are making by typing the following
  command:
  ```
  npm start
  ```
 - To perform all the backend and database related actions, you will also need to setup the backend server. Follow the steps given in the [readme](https://github.com/ac030540/hospital-appointment-booking-backend/blob/master/README.md) of the backend repository to set it up.
- Once you have both the repositories set up, you can start booking your appointments.
