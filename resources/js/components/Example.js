import { Button, Card, CardBody, CardFooter, CardHeader } from '@material-tailwind/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { useLocation } from 'react-router-dom';

export default function Example() {
    const location = useLocation();
    return (
        <Card>
            <CardHeader variant='gradient' floated={false}>Example Component</CardHeader>

            <CardBody>
                <div>I'm an example component!</div>
            </CardBody>
            <CardFooter>
                <Button>{ location.pathname }</Button>
            </CardFooter>
        </Card>
    );
}
