# Firebase

## Set up

- Create new project
- Add new web app </>
- ```npm i firebase```

```
|-lib
    |-firebase.js

|-env.local
```

### Keys needed
Three things we need to set up Firebase. Exposing these keys to Client Side.

```
|-env.local
```
```js
NEXT_PUBLIC_FIREBASE_API_KEY=asasd
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=asdasd
NEXT_PUBLIC_FIREBASE_PROJECT_ID=asdasd
```

### Firebase Set up

If we haven't already initialised the application, then we want to do that. We don't want to do it multiple times.

**Initialise application with keys**

```
|-firebase.js
```
```js

import * as firebase from 'firebase/app'
import 'firebase/auth'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    })
}


```

### Auth Set up

```
|-lib
    |-auth.js
```

**COPY AND PASTE EVERYTHING FROM AUTH.JS for all prods**
- Basically created a context state
- Function called usePovideAuth
- Define sign in and sign out
- Export/Return those to be available to everyone through conext providor

**Github Setup**
- Firebase Auth with [Github](https://github.com/settings/applications/new)
- Fill in deets
- CallbackURL
  - Google auth sign in methods > Github > enable > copy URL
- Register App
- Copy Client ID and Client Secrets back into Google Auth 

**SDK Setup**


**Making Auth Context Available to All**
- Need to make a [Custom App](https://nextjs.org/docs/advanced-features/custom-app)
  - _app.js, wraps the app for global CSS / Shared logic / Context
  - The ProvideAuth ```Context``` that we just created is now wrapping the whole app

```
|-pages
    |-_app.js
```

```js
import { ProvideAuth } from "../lib/auth";

function MyApp({ Component, pageProps }) {
    return (
        <ProvideAuth>
            <Component {...pageProps} />
        </ProvideAuth>
    );
}

export default MyApp;
```

```
|-pages
    |-index.js
```

We then give index.js access to the useAuth() hook that was created.

```js
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { auth } from "firebase";
import { useAuth } from "../lib/auth";

const Home = () => {
    const auth = useAuth();

    return (
        <div className={styles.container}>....

        <button onClick={(e) => auth.signinWithGithub()}>
                    Sign In
        </button>

        <button onClick={(e) => auth.signinout()}>
                    Sign out
        </button>
```

? optional chaining allows you to safely acess nested properties