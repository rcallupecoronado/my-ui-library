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
-   Storybook functionality includes:
    -   Controls to modify properties such as default text and background color.
    -   All components have a default state and a disabled state.
    -   Components visually change color and the cursor indicates that the user cannot "click" on the component.
    -   All components have at least 2 tests:
        -   A test that checks that the component is visible.
        -   A test that checks that the background color changed when the component is in the 'disabled' state.

## Prerequisites

Ensure you have the following installed:

-   Node.js (v18+)
-   npm (Latest version)
-   Docker (Latest version)

## Install Dependencies

Run the following inside the `my_ui_library` folder:

```bash
cd my_ui_library
npm install