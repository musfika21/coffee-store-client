import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    
    const handleSignUp = (e) =>{
        e.preventDefault();
        // const name = e.target.name.value;
        // const email = e.target.email.value;


        // or
        const form = e.target;
        const formData = new FormData(form);

        //  user's object for the database
        // const newUser = Object.fromEntries(form);
        // destructure of the object
        const { email, password, ...userProfile} = Object.fromEntries(formData);


        // const email = formData.get('email');
        // const password = formData.get('password');
        console.log(email, password, userProfile)

        // create user in the firebase
        createUser(email, password)
        .then((result) =>{
            // console.log(result.user)

            // save profile info in the database
            

        })
        .catch((error) =>{
            console.log(error.message)
        })
    }

    return (
        <div className='coffee-bg base-font py-13'>
            <div className=' max-w-2/3 mx-auto bg-[#F4F3F0] py-13 rounded-lg'>
                <h3 className='heading-font text-[#374151] text-4xl drop-shadow font-bold text-center mb-8'>Sign Up Now</h3>
                <div className='max-w-10/12 mx-auto'>
                    <form onSubmit={handleSignUp}>
                        <div className='grid grid-cols-2 gap-4'>
                            <fieldset className="fieldset">
                                <label className="label font-bold text-lg text-[#1B1A1ACC]" >Name</label>
                                <input className='bg-white p-3 rounded-lg text-[#331A15] w-full hover:drop-shadow-xl hover:outline-2 hover:outline-[#E3B577]' type="text" name="name" required placeholder='Enter Your Name' />
                            </fieldset>

                            <fieldset className="fieldset">
                                <label className="label font-bold text-lg text-[#1B1A1ACC]" >Email</label>
                                <input className='bg-white p-3 rounded-lg text-[#331A15] w-full hover:drop-shadow-xl hover:outline-2 hover:outline-[#E3B577]' type="email" name="email" placeholder='Enter Your Email' />
                            </fieldset>

                            <fieldset className="fieldset">
                                <label className="label font-bold text-lg text-[#1B1A1ACC]" >Address</label>
                                <input className='bg-white p-3 rounded-lg text-[#331A15] w-full hover:drop-shadow-xl hover:outline-2 hover:outline-[#E3B577]' type="text" name="address" required placeholder='Enter Your Address' />
                            </fieldset>

                            <fieldset className="fieldset">
                                <label className="label font-bold text-lg text-[#1B1A1ACC]" >Contact No</label>
                                <input className='bg-white p-3 rounded-lg text-[#331A15] w-full hover:drop-shadow-xl hover:outline-2 hover:outline-[#E3B577]' type="text" name="numbers" required placeholder='Enter Your Contact No.' />
                            </fieldset>

                            <fieldset className="fieldset">
                                <label className="label font-bold text-lg text-[#1B1A1ACC]" >Password</label>
                                <input className='bg-white p-3 rounded-lg text-[#331A15] w-full hover:drop-shadow-xl hover:outline-2 hover:outline-[#E3B577]' type="password" name="password" placeholder='Enter Password' />
                            </fieldset>

                            <fieldset className="fieldset">
                                <label className="label font-bold text-lg text-[#1B1A1ACC]" >Confirm Password</label>
                                <input className='bg-white p-3 rounded-lg text-[#331A15] w-full hover:drop-shadow-xl hover:outline-2 hover:outline-[#E3B577]' type="password" name="confirmPassword" placeholder='Confirm Password' />
                            </fieldset>
                        </div>
                        <fieldset className="fieldset">
                            <label className="label font-bold text-lg text-[#1B1A1ACC]" >Photo</label>
                            <input className='bg-white p-3 rounded-lg text-[#331A15] w-full hover:drop-shadow-xl hover:outline-2 hover:outline-[#E3B577]' type="text" name="photo" placeholder='Enter photo URL' />
                        </fieldset>
                        <input type="submit" className='btn w-full border-2 border-[#331a15] bg-[#D2B48C] text-[#331a15] heading-font text-xl mt-5' value="Sign Up" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;