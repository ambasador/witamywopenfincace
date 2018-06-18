import React from 'react';
import cookie from 'react-cookies';
import Head from './head';
import Hero from './hero';

import bootstrap from './boostrap.css';
import fonts from './fonts.css';
const App = React.createClass({

    render() {
        return (
            <div className="container-fluid">
                <Head/>
                <Hero/>
            </div>
        );
    }
});

export default App;
