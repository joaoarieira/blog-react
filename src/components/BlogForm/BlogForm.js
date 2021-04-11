import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import './BlogForm.css'

import api from '../../services/api';
import { Redirect } from 'react-router';

function BlogForm() {
    const [blogs, setBlogs] = useState([]);
    
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = async (data) => {
        const response = await api.post('blogs', data);
        const blog = response.data;
        setBlogs([...blogs, blog]);
        console.log(blogs);
        reset();
    };

    return(
        <section className='main-blog-form'>
            <div className='main-blog-form-content'>
                <header>
                    <h1>New blog</h1>
                </header>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor='title'>Blog title:</label>
                    <input 
                        type='text'
                        placeholder='example@mail.com'
                        {...register('title')}
                        required
                    />
                    <label htmlFor='snippet'>Blog snippet:</label>
                    <input
                        type='text'
                        {...register('snippet')}
                        required
                    />
                    <textarea
                        {...register('text')}
                        required 
                    />
                    <input type='Submit' />
                </form>
            </div>
        </section>
    );
}

export default BlogForm;