import { Button, Card, CardBody, CardFooter, CardHeader } from '@material-tailwind/react';
import React, { useContext } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { DataContext } from '../Providers';
import NotFound from './NotFound';

function generateId( data ) {
    return data[ Math.floor( Math.random() * data.length ) ].id;
}

export default function RedirectToRandom() {
    const { state } = useLocation();
    const data = useContext( DataContext );

    if( data.length == 0 )
        return <NotFound />

    let rand_id = generateId( data );
    if( state )
        while( rand_id == state.avoid ) rand_id = generateId( data );

    return <Navigate to={ "/" + rand_id } replace />;
}
