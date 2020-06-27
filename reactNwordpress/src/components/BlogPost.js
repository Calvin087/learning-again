import React, { useEffect, useState, Fragment } from 'react'
import { Link, useParams } from 'react-router-dom'
import base from '../styles/base.css'

function Blog() {
    const [posts, setPosts] = useState([])
    const { slug } = useParams()
    const post = posts.filter(post => post.slug === slug)
    
    const siteURL = "http://calvint1.sg-host.com/wp-json/wp/v2/books?_embed"

    useEffect(() => {
        async function loadposts() {
            const response = await fetch(siteURL)
            if (!response.ok) {
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
            <div className="blog-post">
                {post.map((post, index) => (
                    <Fragment key={post.id} >
                    
                    <div className="header-background">
                    
                        <h1 className="blog-post-h1">{post.title.rendered}</h1>
                    
                        <div className="header">            
                                    <p className="header-left" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                                    <img className="header-right" src={post.acf.featured_image_png} />
                        </div>
                        
                    </div>

                        <p className="blog-content" dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>

                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default Blog
    // < img className = "blog-feature-img" src = { post._embedded['wp:featuredmedia'][0].source_url } /> {/* Apparently this is bracket notation */ }