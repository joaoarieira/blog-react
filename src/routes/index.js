import React from 'react';
import { Switch, Route} from 'react-router-dom';

import About from '../pages/About';
import Blogs from '../pages/Blogs';
import Main from '../pages/Main';
import NewBlog from '../pages/NewBlog';


function Routes() {
    return(
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/about" component={About} />
            <Route path="/new-blog" component={NewBlog} />
            <Route path="/blogs" component={Blogs} />
        </Switch>
    );
}

export default Routes;