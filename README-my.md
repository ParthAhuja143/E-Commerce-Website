Install Material UI for logos

- npm install @material-ui/core
- go to icons on material ui website
- npm install @material-ui/icons
- import the icon
- use it

---

Install React Router to load different pages

- npm install react-router-dom

---

Install React currency format to show currency format easily

- npm i react-currency-format

---

Install firebase for authentication

- npm install firebase

---

Install stripe for payment

- npm install @stripe/stripe-js
- npm i @stripe/react-stripe-js
- Create stripe account
- Get API Keys

---

To use Cloud Functions

- firebase init
- Select Functions: Configure and deploy Cloud Functions
- Do you want to install dependencies with npm now? Yes
- Now we have a functions directory in our clone(it is like a full backend)

---

How to use the functions

- Go to index.js
- build an express app on a cloud function

--- In function folder install

- npm i express
- npm i cors
- npm i stripe
- firebase emulators:start to start
- In log you'll find functions[api]: http function initialized (http://localhost:5001/clone-96988/us-central1/api).
- The server is running on that link

--- For realtime database

- go to firebase -> project (amazon-clone) -> firestore
- Click on create database in test mode
