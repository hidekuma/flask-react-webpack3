import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';

import './index.scss';
import App from './App';
import $ from 'jquery';

//favicon urls
import WebFavicon from './images/favicons/favicon.ico';

ReactDOM.render(
    <div>
        <Favicon url={WebFavicon} />
        <App/>
    </div>,
    document.getElementById('root')
);

