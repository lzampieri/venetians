import { ThemeProvider } from '@material-tailwind/react'
import { SnackbarProvider } from 'notistack'
import Layout from './Layout';
import Example from './components/Dictum';
import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBackdrop from './components/LoadingBackdrop';
import $ from 'jquery';

export const DataContext = createContext();

export default function Providers() {
    const [data, setData] = useState(null)

    useEffect(async () => {
        if (data != null) return;
        let allDicta = await $.getJSON(route('getAllDicta'));
        console.log(allDicta);
        setData(allDicta);
    }, [])

    return (
        <ThemeProvider>
            <DataContext.Provider value={data}>
                <SnackbarProvider />
                {data == null ? (
                    <LoadingBackdrop open />
                ) : (
                    <BrowserRouter basename={process.env.MIX_REACT_BASE_PATH} >
                        <Layout>
                            <Routes>
                                <Route index element={<Example />} />
                                <Route path="/:id(\d+)" element={<Example />} />
                            </Routes>
                        </Layout>
                    </BrowserRouter>
                )
                }
            </DataContext.Provider>
        </ThemeProvider>
    )
}