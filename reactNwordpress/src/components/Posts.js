import React, { useEffect, useState } from 'react'

function Posts() {
    const [ posts, setPosts ] = useState([])
    const siteURL = "http://calvint1.sg-host.com/wp-json/wp/v2/books?_embed"
    
    useEffect(() => {
        async function loadposts() {
            const response = await fetch(siteURL)
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
                    
                    <img src={post._embedded['wp:featuredmedia'][0].source_url} /> {/* Apparently this is bracket notation */}
                    <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                </div>
            ))}
        </div>
    )
}

export default Posts