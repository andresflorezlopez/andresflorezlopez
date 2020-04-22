This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I did not have really much time. This project has a server side rendering and client side rendering functionliaties. The first one allow to handle a right SEO
and the second one allow us to have a hot reloading function.

The boot-loaders work as a horizontal providers. In this group we can find Redux, but we sould add every component/provider that any component can use it

The root-component stars all boot-loaders that were desinged to support the app.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```
├── build
│   └── static
│       ├── css
│       ├── js
│       └── media
├── dist
├── public
├── server
├── server-build
└── src
    ├── assets
    │   └── images
    │       ├── characters
    │       └── hero
    ├── components
    │   ├── screens
    │   └── ui
    │       ├── character-card
    │       ├── character-grid
    │       ├── container
    │       ├── footer
    │       ├── header
    │       ├── hero-slider
    │       ├── icon
    │       ├── main-container
    │       ├── speak-out
    │       └── suggestion-box
    ├── config
    ├── lib
    │   └── boot-loaders
    └── redux
        ├── reducers
        └── sagas

33 directories
```