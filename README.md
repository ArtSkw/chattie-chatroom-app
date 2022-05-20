# Chattie - chatroom app

The chat app uses VueJS (v3) for front-end + Firestore Cloud for all back-end logic from Firebase.

Currently the app connects with the initial database stored on Firestore Cloud, although you can switch and configure your own databse in `src/firebase/config.js` - check [Firestore documentation](https://firebase.google.com/docs/firestore/quickstart) for more details.

Here you can check the app preview: [Chattie - chatroom app](https://chattie-chatroom-app.web.app/)

![Chat app screenshot](https://i.ibb.co/7yQgh0B/chattie-screenshot.png)

## 🛠 Setup

1. Make sure you have Node.js v14.16.0 and yarn v1.22.10 or above installed.
2. Clone this repo using: `git clone https://github.com/ArtSkw/chattie-chatroom-app.git`.
3. Move to the project folder: `cd chattie-app`.
4. Run `yarn` to initiate the package manager.


## 💻 Available Scripts

In the project folder you can run:

### `yarn / yarn install`

Initializes the package manager & installs all required dependencies.
<br>

### `yarn serve`

Runs the app in the development mode + enables the hot-reload as well.
<br>
Open [http://localhost:8080/ ](http://localhost:8080/) to view it in your browser.

### `yarn build`

Builds the app for deployment in the 'dist' folder.
<br>
All assets get optimized & minified for production.


## Questions?
Feel free to reach me out via art.skwar@gmail.com