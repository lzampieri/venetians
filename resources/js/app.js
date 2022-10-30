/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */


require('./bootstrap');

/**
 * Load and activate the router
 */
const ReactDOM = require( 'react-dom' );
const { BrowserRouter } = require('react-router-dom');
const { default: Example } = require('./components/Example');
const { default: Layout } = require('./Layout');

ReactDOM.render(
    <BrowserRouter basename={ process.env.MIX_REACT_BASE_PATH } >
        <Layout>
            <Example />
        </Layout>
    </BrowserRouter>,
    document.getElementById("root")
);
