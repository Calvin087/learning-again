import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function SinglePost() {
    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        const slug = posts.slug;
        async function loadposts() {
            const response = await fetch(`http://calvint1.sg-host.com/wp-json/wp/v2/books?slug=${slug}`)
            if(!response.ok) {
                console.log("not wokring");
                return
            }

            const posts = await response.json()
            setPosts(posts[0])
            console.log(posts.id)
        }
        loadposts()
    }, [])

    return (
        <div>

        </div>
    )
}

export default SinglePost