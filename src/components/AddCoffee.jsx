import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        // console.log(formData)
        const newCoffee = Object.fromEntries(formData);
        console.log(newCoffee)

        // send coffee data to the database
        fetch('http://localhost:3000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                // console.log('after adding coffee to the database',data)
            })
    }

    return (
        <div className='coffee-bg base-font'>
            {/* add coffee */}
            <div className=' max-w-6/7 mx-auto py-10'>
                <Link to='/' className='flex items-center mb-10 gap-3 hover:bg-[#D2B48C] rounded-2xl w-40 p-3'><GoArrowLeft className='h-6 w-6 text-[#331a15]' /><p className='heading-font text-[#374151] text-xl drop-shadow font-bold'>Back to home</p></Link>
                <div className='bg-[#F4F3F0] mb-20 py-17 rounded-lg'>
                    <h3 className='heading-font text-[#374151] text-4xl drop-shadow font-bold text-center mb-8'>Add New Coffee</h3>
                    <p className='text-[#1B1A1AB3] w-2/3 mx-auto text-center my-8'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                    {/* form */}
                    <div className='w-10/12 mx-auto'>
                        <form onSubmit={handleAddCoffee}>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <fieldset className="fieldset">
                                    <label className="label font-bold text-lg text-[#1B1A1ACC]" >Name</label>
                                    <input className='bg-white p-3 rounded-lg text-[#331A15] w-full hover:drop-shadow-xl hover:outline-2 hover:outline-[#E3B577]' type="text" name="name" required placeholder='Enter Coffee Name' />
                                </fieldset>

                                <fieldset className="fieldset">
                                    <label className="label font-bold text-lg text-[#1B1A1ACC]" >Chef</label>
                                    <input className='bg-white p-3 rounded-lg text-[#331A15] w-full hover:drop-shadow-xl hover:outline-2 hover:outline-[#E3B577]' type="text" name="chef" placeholder='Enter Coffee Chef' />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <label className="label font-bold text-lg text-[#1B1A1ACC]" >Supplier</label>
                                    <input className='bg-white p-3 rounded-lg text-[#331A15] w-full hover:drop-shadow-xl hover:outline-2 hover:outline-[#E3B577]' type="text" name="supplier" placeholder='Enter Coffee supplier' />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <label className="label font-bold text-lg text-[#1B1A1ACC]" >Taste</label>
                                    <input className='bg-white p-3 rounded-lg text-[#331A15] w-full hover:drop-shadow-xl hover:outline-2 hover:outline-[#E3B577]' type="text" name="taste" placeholder='Enter coffee taste' />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <label className="label font-bold text-lg text-[#1B1A1ACC]" >Category</label>
                                    <input className='bg-white p-3 rounded-lg text-[#331A15] w-full hover:drop-shadow-xl hover:outline-2 hover:outline-[#E3B577]' type="text" name="category" placeholder='Enter coffee category' />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <label className="label font-bold text-lg text-[#1B1A1ACC]" >Price</label>
                                    <input className='bg-white p-3 rounded-lg text-[#331A15] w-full hover:drop-shadow-xl hover:outline-2 hover:outline-[#E3B577]' type="text" name="price" required placeholder='Enter coffee price' />
                                </fieldset>
                            </div>
                            <fieldset className="fieldset">
                                <label className="label font-bold text-lg text-[#1B1A1ACC]" >Photo</label>
                                <input className='bg-white p-3 rounded-lg text-[#331A15] w-full hover:drop-shadow-xl hover:outline-2 hover:outline-[#E3B577]' type="text" name="photo" required placeholder='Enter photo URL' />
                            </fieldset>
                            <input type="submit" className='btn w-full border-2 border-[#331a15] bg-[#D2B48C] text-[#331a15] heading-font text-xl mt-5' value="Add Coffee" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;