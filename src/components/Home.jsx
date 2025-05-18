import React, { useState } from 'react';
import Banner from './Banner';
import Section from './Section';
import { useLoaderData } from 'react-router';
import CoffeContainer from './CoffeContainer';
import Instagram from './Instagram';

const Home = () => {
    const initialCoffees = useLoaderData();
    // console.log(initialCoffees)
    const [ coffees, setCoffees ] = useState(initialCoffees)
    return (
        <>
            <Banner></Banner>
            <Section></Section>
            <CoffeContainer 
                initialCoffees={initialCoffees}
                coffees = {coffees}
                setCoffees = {setCoffees}
            ></CoffeContainer>
            <Instagram></Instagram>
        </>
    );
};

export default Home;