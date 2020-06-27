import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function BlogPost() {
    const [ posts, setPosts ] = useState([])
    let { slug } = useParams()

    // console.log(slug);
    
    function findPostBySlug(slug) {
        return posts.find(i => i.slug === slug)
    }

    let dave = findPostBySlug(slug)
    console.log(dave);
    

    useEffect(() => {
        async function loadposts() {
            const response = await fetch(`http://calvint1.sg-host.com/wp-json/wp/v2/books`)
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

      </div>
    );
}

export default BlogPost