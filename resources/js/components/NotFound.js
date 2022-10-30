import { Button, Card, CardBody, CardFooter, CardHeader } from '@material-tailwind/react';
import React, { useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { DataContext } from '../Providers';

export default function NotFound() {

    return (
        <Card>
            <CardHeader variant='gradient' floated={false}>Not found</CardHeader>
        </Card>
    );
}
