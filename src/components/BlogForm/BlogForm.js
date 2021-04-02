import React from 'react';

import './BlogForm.css'

function BlogForm() {
    return(
        <section className='main-blog-form'>
            <div className='main-blog-form-content'>
                <header>
                    <h1>New blog</h1>
                </header>
                <form>
                    <label htmlFor='title'>Blog title:</label>
                    <input type='text' id='title' required/>
                    <label htmlFor='snippet'>Blog snippet:</label>
                    <input type='text' id='snippet' required/>
                    <textarea id='body' required></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </section>
    );
}

export default BlogForm;