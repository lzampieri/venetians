import { ThemeProvider } from '@material-tailwind/react'
import { SnackbarProvider } from 'notistack'
import Layout from './Layout';
import Dictum from './components/Dictum';
import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBackdrop from './components/LoadingBackdrop';
import $ from 'jquery';
import NotFound from './components/NotFound';
import RedirectToRandom from './components/RedirectToRandom';

export const DataContext = createContext();

export default function Providers() {
    const [data, setData] = useState(null)

    useEffect(async () => {
        if (data != null) return;
        let allDicta = await $.getJSON(route('getAllDicta'));
        setData(allDicta);
    }, [])

    let basename = new URL( route( 'react_base' ) );

    return (
        <ThemeProvider>
            <DataContext.Provider value={data}>
                <SnackbarProvider />
                {data == null ? (
                    <LoadingBackdrop open />
                ) : (
                    <BrowserRouter basename={ basename.pathname } >
                        <Layout>
                            <Routes>

                                <Route index element={<RedirectToRandom />} />

                                <Route path="/:id" element={<Dictum />} />

                                <Route path='*' element={<NotFound />} />

                            </Routes>
                        </Layout>
                    </BrowserRouter>
                )
                }
            </DataContext.Provider>
        </ThemeProvider>
    )
}