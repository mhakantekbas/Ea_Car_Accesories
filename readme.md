# Ea Car Accossories eCommerce Platform (v2)

> eCommerce platform built with the MERN stack & Redux.

<!-- toc -->22
![1](https://github.com/mhakantekbas/Ea_Car_Accesories/assets/77413887/e622876d-fb8d-43f7-8b8e-14f42144c08d)
![2](https://github.com/mhakantekbas/Ea_Car_Accesories/assets/77413887/faeaed93-e331-4b62-96c2-7a005110fe86)
![3](https://github.com/mhakantekbas/Ea_Car_Accesories/assets/77413887/4b281f5d-3699-404d-ab2f-e090b587c18c)
![4](https://github.com/mhakantekbas/Ea_Car_Accesories/assets/77413887/82894fc1-ec69-41e1-9366-dcfd58558255)
![5](https://github.com/mhakantekbas/Ea_Car_Accesories/assets/77413887/79a8149d-103b-4eef-ae9d-a51490d75f6e)
![6](https://github.com/mhakantekbas/Ea_Car_Accesories/assets/77413887/0e768bdc-f424-401c-b22b-499f9907e23c)
![7](https://github.com/mhakantekbas/Ea_Car_Accesories/assets/77413887/01371f34-720c-4cb6-aef8-e647204f48c0)


- [Features](#features)
- [Usage](#usage)
  - [Env Variables](#env-variables)
  - [Install Dependencies (frontend & backend)](#install-dependencies-frontend--backend)
  - [Run](#run)
- [Build & Deploy](#build--deploy)
  - [Seed Database](#seed-database)

* [Bug Fixes, corrections and code FAQ](#bug-fixes-corrections-and-code-faq)
  - [BUG: Warnings on ProfileScreen](#bug-warnings-on-profilescreen)
  - [BUG: Changing an uncontrolled input to be controlled](#bug-changing-an-uncontrolled-input-to-be-controlled)
  - [BUG: All file types are allowed when updating product images](#bug-all-file-types-are-allowed-when-updating-product-images)
  - [BUG: Throwing error from productControllers will not give a custom error response](#bug-throwing-error-from-productcontrollers-will-not-give-a-custom-error-response)
    - [Original code](#original-code)
  - [BUG: Bad responses not handled in the frontend](#bug-bad-responses-not-handled-in-the-frontend)
    - [Example from PlaceOrderScreen.jsx](#example-from-placeorderscreenjsx)
  - [BUG: After switching users, our new user gets the previous users cart](#bug-after-switching-users-our-new-user-gets-the-previous-users-cart)
  - [BUG: Passing a string value to our `addDecimals` function](#bug-passing-a-string-value-to-our-adddecimals-function)
  - [BUG: Token and Cookie expiration not handled in frontend](#bug-token-and-cookie-expiration-not-handled-in-frontend)
  - [BUG: Calculation of prices as decimals gives odd results](#bug-calculation-of-prices-as-decimals-gives-odd-results)
  - [FAQ: How do I use Vite instead of CRA?](#faq-how-do-i-use-vite-instead-of-cra)
    - [Setting up the proxy](#setting-up-the-proxy)
    - [Setting up linting](#setting-up-linting)
    - [Vite outputs the build to /dist](#vite-outputs-the-build-to-dist)
    - [Vite has a different script to run the dev server](#vite-has-a-different-script-to-run-the-dev-server)
    - [A final note:](#a-final-note)
  * [License](#license)

<!-- tocstop -->

## Features

- Full featured shopping cart
- Product reviews and ratings
- Contact us page
- Send email through contact us page
- About us page
- List Products by their category page
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Create a PayPal account and obtain your `Client ID` - [PayPal Developer](https://developer.paypal.com/)

### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
PAGINATION_LIMIT = 8
```

Change the JWT_SECRET and PAGINATION_LIMIT to what you want

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@email.com (Admin)
123456

john@email.com (Customer)
123456

jane@email.com (Customer)
123456
```

---

