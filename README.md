# SpaceX Launches

A simple React App that shows all past and upcoming launches for SpaceX, using the public API v4: https://github.com/r-spacex/SpaceX-API/tree/master/docs/v4

<p align="center">
  <img width="460" height="300" src="./../xDesign/instructions/spacex.jpg">
</p>

## How to run

```
cd spacex
npm run start
```

App will launch on http://localhost:3000

## Project

- Trello kanban board: https://trello.com/b/A3NcFbjp/spacex-launches
- Tests with Jest & react-testing-library
- Styled-Components
- React & TypeScript

## Future enhancements given more time!

- greater accuracy to Sketch template (Also, https://www.sketch.com/s/09d14b3c-a48c-478a-9d4e-94cf16d6d67f/a/zx7v7Kb has a couple of inconsistencies that I would have checked with the designer about IRL)
- react-query for cleaner management of server state/reconciling parallel api calls
- better cache-management (launches renew every 2 seconds, rockets every 24 hours, so could be optimised to avoid unnecessary calls)
- Cypress e2e tests for testing integration with api and testing more of user interactions/state updates
- better responsiveness (only minimal media queries included, fonts not managed)
- better browser/device support/testing
- art design for images (default smallest one used due to time constraints/performance payoff) & image transformation to WebP (Lighthouse score lower due to image aspect-ratio)

[Lighthouse performance]('./../instructions/Lighthouse.jpg)
