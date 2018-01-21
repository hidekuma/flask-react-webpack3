/*
Dbody Route Config File
Ver. 1.0.0
*/
import React from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom';

//Routes
import Home from './Home';
import About from './About';
import Posts from './Posts';
import Mypage from './Mypage';
import Login from './Login';

//SubRoutes
import Sub1 from './sub/Sub1';
import Sub2 from './sub/Sub2';

import Notfound from './Notfound';
//Dbody route config
const routes = [
    {
        exact : true,
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts',
        component: Posts,
        routes : [
            {
                path: '/posts/sub1',
                component: Sub1
            },
            {
                path: '/posts/sub2',
                component: Sub2
            }
        ]
    },
    {
        path: '/me',
        component: Mypage
    },
    {
        path: '/login',
        component: Login
    },
    {
        component: Notfound
    }
  ]

const RouteWithSubRoutes = (route) => {
    return (
        <Route exact={route.exact} path={route.path} render={props => (
            <route.component {...props} routes={route.routes}/>
        )}/>
    )
}

const RouteConfig = () => {
    return (
        <Switch>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))}
        </Switch>
    )
}

//export default RouteConfig
export {
    routes,
    RouteConfig,
    RouteWithSubRoutes,
    Notfound
}
