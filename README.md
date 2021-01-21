# Uniform Teeth Homework

## Using the App

```
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technologies and Design Decisions

- `create-react-app` because it is the easiest way to start a new react project with basic config and tooling.
- `fetch` to interact with the API because it is simple to use and easily polyfilled by create-react-app.

### State Management

I used React hooks for state management. This app is simple in that it only has
two main components (input and list) that share some state. storing the shared
state at the top level is simple enough at this complexity. If this app were
planned to have more components that needed to access/change the search state
(or require new state), I would strongly consider using some state management
library like redux to avoid threading state down 
