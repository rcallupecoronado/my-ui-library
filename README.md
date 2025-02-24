# My UI Component Library

This repository contains a UI component library built with React and Storybook. It includes a variety of reusable components designed to be used in web applications.

## Components

The library includes the following components:

-   Button
-   Label
-   Text
-   Table
    -   TableHeader
    -   TableRow
    -   TableCell
    -   TableFooter
-   Dropdown
-   RadioButton
-   Img
-   HeroImage
-   Card

## Requirements

-   Each component folder contains the following files:
    -   `Component_name.tsx`
    -   `Component_name.stories.tsx`
    -   `Component_name.types.tsx`
    -   `Component_name.tests.tsx`
    -   `index.ts`
-   Styled Components are used for styling.
-   All components are responsive.
-   Storybook functionality will include:
    -   Controls to modify properties such as default text and background color.
    -   All components will have a default state and a disabled state.
    -   Components will visually change color and the curser will indicate that the user cannot “click” on the component.
    -   All components will have at least 2 tests:
        -   A test that checks that the component is visible.
        -   A test that checks that the background color changed when the component is in the ‘disabled’ state.

##  Prerequisites
Ensure you have the following installed:

Node.js (v18+)
npm (Latest version)
Docker (Latest version)       

## Install Dependencies
Run the following inside the my_ui_library folder:

cd my_ui_library
npm install


## Start Storybook
To preview the component library:
npm run storybook

## Then open storybook http://127.0.0.1:6006 in your browser.



## Getting Started

To run the component library locally using Docker, follow these steps:


## **Build the Docker image:**

    ```bash
    docker build -t callupe_roger_coding_assignment12 .
    ```

##  **Run the Docker container:**

    ```bash
    docker run -d -p 8083:8083 --name callupe_roger_coding_assignment12 callupe_roger_coding_assignment12
    ```

##  **Open the application in your browser:**

    Navigate to `http://localhost:8083` or `http://127.0.0.1:8083` in your web browser.

## Docker Information

-   **Container Name:** `callupe_roger_coding_assignment12`
-   **Port:** 8083
-   **Working Directory:** `/callupe_roger_ui_garden`

## Stop the Running Container

docker stop callupe_roger_coding_assignment12
## Remove the Container

docker rm callupe_roger_coding_assignment12

## 🛠 GitHub Repository
 Push to GitHub
 Run the following inside the library folder:

git init
git add .
git commit -m "Component UI Library"
git branch -M main
git remote add origin https://github.com/<your-github-username>/component-library.git
git push -u origin main

## Then, check your repository at:
🔗 https://github.com/<your-github-username>/component-library

##  Final Notes
✅ Storybook works at http://127.0.0.1:6006/
✅ Dockerized app is running at http://127.0.0.1:8083/
✅ All tests have passed