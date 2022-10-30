import React from 'react';
import ReactDOM from 'react-dom';
import { useLocation } from 'react-router-dom';

export default function Example() {
    const location = useLocation();
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                        { location.pathname }
                    </div>
                </div>
            </div>
        </div>
    );
}
