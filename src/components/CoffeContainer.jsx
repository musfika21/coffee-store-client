import { BsCup } from 'react-icons/bs';
import { Link } from 'react-router';
import CoffeCard from './CoffeCard';

const CoffeContainer = ({ coffees, setCoffees}) => {
    // console.log(initialCoffees)

    return (
        <div className='my-15 container-bg'>
            <p className='text-[#1B1A1A] text-center'>--- Sip & Savor ---</p>
            <p className='heading-font text-[#331A15] text-3xl drop-shadow font-bold text-center my-4'>Our Popular Products</p>
            <div className='flex justify-center'>
                <Link to='/addCoffee'><button className='flex items-center gap-3 bg-[#E3B577] border-3 border-[#331A15] px-4 py-1 rounded-lg hover:bg-transparent cursor-pointer'><p className='heading-font drop-shadow text-white text-xl'>Add Coffee</p> <BsCup className='text-[#331A15]' size={25} /></button></Link>
            </div>

            {/* coffee container start */}
            <div className='max-w-6/7 mx-auto grid grid-cols-2 gap-10 mt-10'>
                {
                    coffees.map((coffee) => <CoffeCard
                        coffee = {coffee}
                        key = {coffee._id}
                        coffees = {coffees}
                        setCoffees = {setCoffees}
                    ></CoffeCard>)
                }
            </div>

        </div>
    );
};

export default CoffeContainer;