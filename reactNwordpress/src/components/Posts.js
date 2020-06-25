import React, { useEffect, useState } from 'react'

function Posts() {
    const [ posts, setPosts ] = useState([])
    
    useEffect(() => {
        async function loadposts() {
            const response = await fetch('http://calvint1.sg-host.com/wp-json/wp/v2/posts')
            if(!response.ok) {
                console.log("not wokring");
                return
            }

            const posts = await response.json()
            setPosts(posts)
        }
        loadposts()
    }, [])

    return (
        <div>
            {posts.map((post, index) => (
                <div key={index}>
                    <h2>{post.title.rendered}</h2>
                    <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                </div>
            ))}
        </div>
    )
}

export default Posts