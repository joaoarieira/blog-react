import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import './BlogForm.css'

import api from '../../services/api';

function BlogForm() {
    const [form, setForm] = useState({title: '', snippet: '', text: ''});
    
    const { register, handleSubmit, reset } = useForm();
    
    function handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        const newForm = form;
        newForm[name] = value;
        setForm(newForm);

        //console.log("newForm:", newForm);
        //console.log("form:", form);
    }

    const onSubmit = async (data) => {
        const response = await api.post('blogs', data);
        console.log(response.status);
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
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor='snippet'>Blog snippet:</label>
                    <input
                        type='text'
                        {...register('snippet')}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        {...register('text')}
                        onChange={handleChange}
                        required 
                    />
                    <input type='Submit' />
                </form>
            </div>
            <p>test: {JSON.stringify(form)} </p>
        </section>
    );
}

export default BlogForm;