# HNG Stage 1 Task - Number Classification API

## Description

A simple RESTful API built with NestJS that classifies a number based on several mathematical properties, such as Prime, Perfect, and Armstrong, and provides a fun mathematical fact about the number.

## Features

- Classify a number as Prime or Not Prime.
- Classify a number as Perfect or Not Perfect.
- Check if the number is an Armstrong number.
- Calculate the digit sum of the number.
- Retrieve a fun mathematical fact about the number from the [Numbers API](https://numbersapi.com/).

The API is deployed to a publicly accessible endpoint and handles Cross-Origin Resource Sharing (CORS) appropriately.

---

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Setup Instructions](#setup-instructions)
3. [API Documentation](#api-documentation)
4. [Deployment](#deployment)
5. [Backlinks](#backlinks)

---

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **TypeScript**: A strongly typed superset of JavaScript.
- **Axios**: For making HTTP requests to the Numbers API to fetch fun facts.
- **GitHub**: For version control and hosting the codebase.
- **Render**: For deploying the API.

---

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager)
- Git

### Steps to Run Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/edwinedjokpa/hng-internship-stage-one.git
   cd your-repo
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the Application**:
   ```bash
   npm run start:dev
   ```
   The API will be accessible at `http://localhost:3000/api`.

---

## API Documentation

### Endpoints

- **GET /api/classify-number**:

```bash
curl -X GET http://localhost:3000/api/classify-number?number=371
```

### Response (200 OK)

The API returns a JSON object with the following structure:

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is a narcissistic number."
}
```

### Response (400 Bad Request)

If the number is not provided or is not a valid number, the API returns a 400 Bad Request response with an error message.

```json
{
  "number": "abc",
  "error": true
}
```

## Example Usage

1. Request

```bash
   curl "http://localhost:3000/api/classify-number?number=371"
```

2. Response

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is a narcissistic number."
}
```

### Deployment

## The API is deployed on Render, and you can access it at [https://hng-internship-stage-one.onrender.com/api](https://hng-internship-stage-one.onrender.com/api).

## Backlinks

- [Node.js Developers](https://hng.tech/hire/nodejs-developers)

---
