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
const { default: Providers } = require('./Providers');

ReactDOM.render(
    <Providers />,
    document.getElementById("root")
);
