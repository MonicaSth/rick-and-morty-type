# Rick and Morty Character Directory - Documentation

## Introduction

This web application is a small app that lists all characters from the Rick and Morty series. The goal is to demonstrate general knowledge of React and JavaScript by showcasing skills in writing clean, structured, readable, and maintainable code, fetching data from APIs, utilizing React lifecycle and component APIs, and implementing specific design patterns.

Deployed application can be seen here:
https://rick-and-morty-3741c.web.app/

## Project Setup

To get started with the project, has been used Create React App as the starting point.

1. Clone the repository from [repository URL]
2. Navigate to the project directory in the terminal.
3. Install project dependencies using `npm install` or `yarn install`.
4. Start the development server using `npm start` or `yarn start`.

## Technical Requirements

### Data Source and Fetching

- The data for the characters is fetched from the Rick and Morty API using REST endpoints.

### React Components and Styling

- React function components with React hooks is used, instead of class-based components.
- The application is using styled components for a clean and maintainable design pattern.
- Flexbox is utilized for layout design.

### Pages and Routing

- The application will use React Router for navigation between pages.
- Now we can navigate between Home Page and Character detail page

### UI Components

- Custom UI components will be implemented with styed-componet we are not using UI libraries like MaterialUI or Bootstrap.

### Search and Filtering

- The Characters List page will have a search input and a dropdown for filtering the list based on the character's name and status.
- The search input will have a debounce response time of 300ms.
- The filtering process will be based on server-side filtering.
- The filtering should occur if either the name or status of the characters changes.
- The filters can be reset manualy each of them or by reset Button.

### Characters List Page

- The Characters List page will display character cards, each containing the character's name, image (avatar), and status.
- There will be 5 cards per row with a distance of 15 pixels between them, on normal screens.
- For smaller screens, so the app can be respnsive, there will be fewver cards pe row so the user can be able to read from cards
- Clicking on a character card will navigate to the character detail page.
- The gender of each character will have a specific color (e.g., blue for male, red for female) and will be displayed as rounded badges.

### Character Detail Page

- The Character Detail page will display the character's name, image (avatar), status, species, gender, origin, location, and a list of episodes where the character appeared.
- The detail page will display the episodes' titles as an unordered list.

## Optional Enhancements

### TypeScript Integration

- TypeScript is integrated into the project to add static typing and enhance code robustness.

### State Management

- State management is implemented using the ContextAPI to manage the application's state and data flow.
- By using the Theme Context the theme can be toggled between light and dark mode.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Conclusion

This documentation provides an overview of the requirements and technical specifications for the Rick and Morty Character Directory web application. By following these guidelines, you will be able to create a clean, functional, and well-structured React application that meets the project's objectives. Remember to refer to the provided API documentation for fetching character data and the project's design patterns for UI component implementation.

Good luck, and happy coding!
