import { Button, Card, CardBody, CardFooter, CardHeader } from '@material-tailwind/react';
import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import { DataContext } from '../Providers';
import NotFound from './NotFound';

export default function Dictum() {
    const { id } = useParams();
    const data = useContext( DataContext );

    const dictum = data.find( ( d ) => d.id == id );

    if( !dictum ) {
        return <NotFound />
    }

    return (
        <Card>
            <CardHeader variant='gradient' floated={false}>{ dictum.content }</CardHeader>

            <CardBody>
                <div>{ dictum.translation }</div>
                <div>{ dictum.explanation }</div>
            </CardBody>
            <CardFooter>
                <Link to="/" state={{ avoid: id }}><Button>Random</Button></Link>
            </CardFooter>
        </Card>
    );
}
