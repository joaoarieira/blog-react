import React, { useEffect, useState } from 'react';

import "./style.css"

import api from '../../services/api';

function Blogs() {
    const [ blogs, setBlogs ] = useState([]);

    useEffect(() => {
        api.get('/blogs').then(response => {
            setBlogs(response.data);
        });
    }, []);

    async function handleRemoveBlog(id) {
        await api.delete(`/blogs/${id}`);
        setBlogs(blogs.filter(
            blog => blog.id !== id
        ));
    }

    return(
        <section className="main-blogs">
            <header>
                <h1>
                    <i className="fas fa-pencil-alt"></i> Our articles
                </h1>
                <p>
                    Here you find all articles that we wrote.
                </p>
            </header>
            {blogs.map(blog => 
            <article key={blog.id}>
                <header>
                    <h1>
                        {blog.title} 
                    </h1>
                    <i className="far fa-trash-alt" onClick={() => handleRemoveBlog(blog.id)}></i>
                    <h2>
                        {blog.snippet}
                    </h2>
                    
                </header>
                <p>
                    {blog.text}
                </p>
            </article>)}
        </section>
    );
}

export default Blogs;