import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import base from '../styles/base.css'

function Blog() {
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
            <div className="blog-post-parent">
                {posts.map((post, index) => (
                    <Link to={`/post/${post.slug}`} key={post.id}>
                        <h2>{post.title.rendered}</h2>
                        <img style={{ width: "200px" }} src={post.acf.featured_image_png} />
                        <img style={{ width: "200px" }} src={post._embedded['wp:featuredmedia'][0].source_url} /> {/* Apparently this is bracket notation */}
                        <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Blog
    