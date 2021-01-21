# Uniform Teeth Homework

## Using the App

```
docker run -ti --rm -p 8080:8080 cvstom/interview:latest autocomplete
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
(or require new state), I would consider using some other state management
library like redux since it gives a declarative format to state changes that do
not have to worry about the state structure.

### Search Filtering

I decided to filter the results in a way that requires exact matches in either
the name or email. This could be updated to include some fuzzy searching, like
`kt` could search `/k.*t/` and would provide results like `Kate` or `Krystal`.
These could be prioritized at the end of the results.

### Styling

I just used a stylesheet per component. In a larger app, I would have
prioritized a solution like styled components or scss for easy variable storage,
etc.
