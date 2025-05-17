import React from 'react';
import Banner from './Banner';
import Section from './Section';
import { useLoaderData } from 'react-router';

const Home = () => {
    const initialCoffees = useLoaderData();
    console.log(initialCoffees)
    return (
        <>
            <Banner></Banner>
            <Section></Section>
        </>
    );
};

export default Home;