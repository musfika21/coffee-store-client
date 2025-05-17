import React from 'react';
import Banner from './Banner';
import Section from './Section';
import { useLoaderData } from 'react-router';
import CoffeContainer from './CoffeContainer';

const Home = () => {
    const initialCoffees = useLoaderData();
    // console.log(initialCoffees)
    return (
        <>
            <Banner></Banner>
            <Section></Section>
            <CoffeContainer initialCoffees={initialCoffees}></CoffeContainer>
        </>
    );
};

export default Home;