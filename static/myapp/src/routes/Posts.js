import React from 'react';
import { Link } from 'react-router-dom';
import { RouteWithSubRoutes } from './RouteConfig';

const Posts = ({routes}) => {
    console.log(routes);
    return (
        <div>
            <h1>SUB ROUTE</h1>
            <ul>
                <li><Link to="/posts/sub1">sub-test1</Link></li>
                <li><Link to="/posts/sub2">sub-test2</Link></li>
            </ul>
            {routes.map((route,i)=>(
                <RouteWithSubRoutes key={i} {...route}/>
            ))}
        </div>
    );
};

export default Posts;
