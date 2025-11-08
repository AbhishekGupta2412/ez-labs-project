# EZ Labs - Front-End Intern Test Submission

This is a single-page application (SPA) built with React.js as a submission for the EZ Labs Front-End Intern test.

The project features a fully responsive, multi-section homepage built from a Figma design. The core of the project is a functional "Contact Us" form that integrates with the provided API, including front-end validation and success/error handling.

**Live Demo Link:** `[Link to your deployed Netlify site]`

---

## Features

This project successfully implements all requirements from the project brief:

- **React SPA:** The entire application is a Single-Page Application built using React.
- **Figma Design:** The UI is a recreation of the provided Figma design, with a focus on layout, fonts, and colors.
- **Responsive Design:** The application is fully responsive and was checked against the following resolutions:
  - 480p (Mobile)
  - 720p (Tablet)
  - 1080p (Desktop)
  - 1440p (Large Desktop)
- **API Integration:** The contact form is connected to the live API endpoint:
  - **URL:** `https://vernanbackend.ezlab.in/api/contact-us/`
  - **Method:** `POST`
- **Front-End Validation:**
  - Empty form submission is not allowed (Name, Email, and Message are required).
  - Email format is validated using a regex.
- **API Response Handling:**
  - On a successful submission (API returns 200/201), the message "Form Submitted" is displayed, and the form fields are cleared.
  - If the API returns an error, an "An error occurred" message is shown.

## Tech Stack

- **React:** Used for building the component-based UI.
- **JavaScript (ES6+):** For all application logic.
- **HTML5 & CSS3:** For page structure and styling (including Flexbox and Grid for responsiveness).
- **Axios:** Used to handle the `POST` request to the API.
- **Postman:** Used to test the API endpoint. The collection dump is included in this repository.

---

## How to Run This Project Locally

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/YOUR_USERNAME/ez-labs-project.git](https://github.com/YOUR_USERNAME/ez-labs-project.git)
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd ez-labs-project
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Run the application:**
    ```bash
    npm start
    ```
    The app will open automatically in your browser at `http://localhost:3000`.

## API Testing

This repository includes a Postman collection named `EZ-Labs-Test.postman_collection.json` in the root folder. You can import this file into Postman to see the test request used to validate the API endpoint.
