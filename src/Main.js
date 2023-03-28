import React from "react";
import './Main.css';
import Box from "./Box";

const Main = () => {
    return (
        <>
            <main>
                <Box name='Raynor' title='Marshal' age='45' />
                <Box name='Kerrigan' title='Queen' age='30' />
                <Box name='Tasadar' title='Executor' age='450' />
            </main>
        </>
    );
};

export default Main;