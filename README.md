Getting Started
---------------

`git clone https://github.com/KingEdwardI/react-flux-coding-challenge.git`

`cd react-flux-coding-challenge`

`npm install`

`npm start`

Building for production
-----------------------

`npm run build`

Flux Actions
------------

action creators are exported from app/actions/ into the component they will be used in.

the app dispatcher handles disptaching the action to the store. -- this could be compared to Redux reducers.

based on the type of the dispatched action, the store is manipulated accordingly in the AppStore.
