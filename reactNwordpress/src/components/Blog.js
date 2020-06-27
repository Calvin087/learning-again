import React, { useEffect, useState, Fragment } from 'react'
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

        <div className="blog-body wrap">
            {posts.map((post, index) => (
                <div className="blog-body-item">
                    <Link to={`/post/${post.slug}`} key={post.id}>
                    <img className="blog-body-item-img" src={post._embedded['wp:featuredmedia'][0].source_url} /> {/* Apparently this is bracket notation */}
                    <p>{post.title.rendered}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Blog
    