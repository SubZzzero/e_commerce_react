
# E-Commerce React Application

![Image alt](https://github.com/SubZzzero/e_commerce_react/blob/main/main_e.png)

A modern e-commerce frontend application built with **React**, **Redux Toolkit**, and **Material UI**.

The project is designed to **run immediately after cloning the repository**, without requiring a backend.
At the same time, it supports **optional integration with a Strapi REST API**.

---

## Features

- Product catalog
- Category-based filtering
- Product details page
- Slide-out shopping cart
- Add and remove products from cart
- Change product quantity
- Cart persistence between page reloads (`Redux-persist`)
- Automatic total price calculation
- Duplicate protection (one product = one cart row)
- Redux-based state management
- Responsive layout
- Optional Strapi REST API integration
- Automatic fallback to static data when backend is unavailable

---

## Tech Stack

- **React**
- **Redux Toolkit**
- **Redux Persist**
- **React Router**
- **Material UI**
- **Strapi (optional backend)**


## Getting Started

Follow these steps to run the project locally.

---

### Prerequisites:

- Node.js v18 or higher
- npm

### Installation

git clone https://github.com/SubZzzero/e_commerce_react.git

cd e_commerce_react/client

npm install

npm run dev


## Backend (Strapi)

This project uses **Strapi (v5)** as a headless CMS for managing products and images.

The backend is **optional** and is not required to run the frontend application.
It is included only to demonstrate integration with a real CMS and REST API.

If you want to run the backend locally, please follow the official Strapi documentation:

https://docs.strapi.io

## Important Notice (CORS Error)

CORS errors are expected and can be safely ignored.
They are caused only by the missing backend and do not indicate a frontend issue.



## Data Model

```js
{
  id: number;
  documentId: string;
  name: string;
  price: number;
  category: "newArrivals" | "bestSellers" | "topRated";
  shortDescription: RichTextBlock[];
  longDescription: RichTextBlock[];
  image: {
    url: string;
    formats?: {
      small?: { url: string };
      medium?: { url: string };
    };
  };
}



