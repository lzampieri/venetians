import { Button, Card, CardBody, CardFooter, CardHeader, IconButton } from '@material-tailwind/react';
import { Casino, NavigateBefore, NavigateNext } from '@material-ui/icons';
import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import { DataContext } from '../Providers';
import NotFound from './NotFound';

export default function Dictum() {
    const { id } = useParams();
    const data = useContext( DataContext );

    const dictum_idx = data.findIndex( ( d ) => d.id == id );
    const dictum = data[ dictum_idx ]

    if( !dictum ) {
        return <NotFound />
    }

    return (
        <Card className="flex flex-col justify-start p-6 gap-4 max-w-[95%] md:max-w-[40%]">
            <div className="text-3xl md:text-5xl upfont">{ dictum.content }</div>
            <hr />
            <div className="text-lg md:text-2xl font-thin upfont">{ dictum.translation }</div>
            <div >{ dictum.explanation }</div>
            <div className="w-full flex flex-row justify-center gap-4">
                { dictum_idx > 0 ? (
                    <Link to={ "/" + data[ dictum_idx - 1 ].id } > <IconButton> <NavigateBefore /> </IconButton> </Link>
                ) : (
                    <IconButton disabled> <NavigateBefore /> </IconButton>
                )}
                <Link to="/"><IconButton><Casino /></IconButton></Link>
                { dictum_idx + 1 < data.length ? (
                    <Link to={ "/" + data[ dictum_idx + 1 ].id } > <IconButton> <NavigateNext /> </IconButton> </Link>
                ) : (
                    <IconButton disabled> <NavigateNext /> </IconButton>
                )}
            </div>
        </Card>
    );
}
