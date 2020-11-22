# Next.js Set Up.

```npx create-next-app nextjs-blog --use-npm```

**Dynamic Routing**

```jsx
pages/posts/[id]/index.js
```

the id name of the folder is going to be a variable that next.js can swap in the value we post in.

**Use Router** Hook

```jsx

import {useRouter} from 'next/router'

const Post = () => {
    const router = useRouter() // we can access all router
    const {id} = router.query // this pulls the id when you navigate to it. Kind of like Params?

    return (
        <>
            <Header />
            <h1>Post: {id}</>
        </>
    )

}

export default Post;

```

**Defining dynamic links in Link** - [DOCS](https://nextjs.org/docs/routing/dynamic-routes)

```jsx

    // this is sending the slug as a query to the [id] page template.
    // [id] page template fetches that slug from api and pre renders it
<Link as="/post/first-post" href="/post/[id]">
    <a>First Post</a>
</Link>

```

**Get Initial Props**

Life cycle method used to fetch data before the component renders.

```jsx

Post.getInitialProps = async ({query}) => {
    // we get the props passed in and destructure query??

    const res = await fetch('http://jsonasdpoas/post/${query.id}')
    const post = res.json();
    
    return post
    // the data that comes back from this fetch gets returned and sent to the Post component.

// ==============================

const Post = ({title, body}) => (
// because there are no longer hooks being used I don't need to use return either.

        <>
            <Header />
            <h1>{title}</>
            <p>{body}</p>
        </>
    )

export default Post;

}

```

## Log in Page

```jsx

pages/login.js
pages/dashboard.js


```

```jsx

<Link href="/login">
    <a>login</a>
</Link>

```

```jsx

const Login = () => {
    const router = useRouter()
    const onLogin = (e) => {
        e.preventDefault();

        router.push('/dashboard')
    }
    
    return (
        <>
            <button onClick={onLogin} type='button'>L in</button>
        </>
    )
}

```

```jsx

const Dashboard = ({name, bio, blog}) => {

        <>
            <h1>{name}<h1/>
            <p>{`Bio: ${bio}`}<p/>
            <p>{`Blog: ${blog}`}<p/>
        </>

}

Dashboard.getInitialProps = async () => {
    const res = await fetch('https://api.github.com/users/calvin087')
    const user = await res.json()
    
    return user;
}

export default Dashboard;

```

## Styled Components

**Concerns:**
- Babel config, .babelrc file? needs to have styled components override
- _documents file has to be created based on maintainers reccomendations

Preferred method of doing css in component level. Less tech debt, separates the concerns of clashes with other css modules and conflicts.

```jsx

import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    JAVASCRIPT CAN GO HERE TOO, DYNAMIC CSS 
    display: flex;
    font-size: 50px;
    color: ${({theme}) => theme.colors.primary};
`

export default () => <Title>Mastering Next.js</Title>

```

## Creating Themes with _app Styled components

look this up

## Use Chakra styling

Takes a mobile first approach as well as using Tailwind as a base.

## Retrieving More Data

API Routes are essentially inside of pages ```pages/api/users/users.js```.

Two variables are passed in ```requests``` and ```reponse```

Using [id].js we can query the database, parse the info and return data.

```jsx

export default (req, res) => {
    const {
        query: {id}
    } = req;

    res.status(200).json({
        email: 'somthing',
        id,
        name: 'something-1'
    });
};

```

## Retrieving More Data SWR + GraphQL/Hasura

Look up the docs and how to integrate it with Next.js

GraphQL allows me to request only what i need from the api. Faster response times.

## Public Folder

https://realfavicongenerator.net/

## MDX
