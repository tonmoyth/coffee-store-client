import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from '../Pages/CoffeeCard';

const Home = () => {

    const coffees = useLoaderData();
    return (
        <div className='w-11/12 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;