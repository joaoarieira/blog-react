import React from 'react';

import "./style.css"

function Blogs() {
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
            <article>
                <header>
                    <h1>
                        Blog Title 
                    </h1>
                    <i className="far fa-trash-alt"></i>
                </header>
                <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </p>
            </article>
        </section>
    );
}

export default Blogs;