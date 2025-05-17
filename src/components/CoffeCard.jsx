import { FaPen } from 'react-icons/fa';
import { IoEye } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeCard = ({ coffee }) => {
    const { _id, name, chef, price, photo } = coffee;

    const handleDelete = (id) => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffees/${id}`, {
                    method: 'DELETE'
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log('after delete', data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success",
                            });
                        }
                    })

            }
        });
    }
    return (
        <div className='bg-[#F5F4F1]/50 flex gap-5 items-center px-8 py-3 rounded-xl base-font'>

            <div className='h=1/2'>
                <img src={photo} />
            </div>

            <div className='space-y-4'>
                <p className='font-medium'>Name: <span className='font-light'>{name}</span></p>
                <p className='font-medium'>Chef: <span className='font-light'>{chef}</span></p>
                <p className='font-medium'>Price: <span className='font-light'>{price}</span></p>
            </div>

            <div className='ml-20'>
                <Link to={`/details/${_id}`}><div className='p-3 bg-[#D2B48C] text-xl cursor-pointer text-white rounded-lg'><IoEye /></div></Link>
                <Link to={`/updateCoffee/${_id}`}><div className='p-3 bg-[#3C393B] text-lg cursor-pointer text-white rounded-lg my-5'><FaPen /></div></Link>
                <div
                    onClick={() => handleDelete(_id)}
                    className='p-3 bg-[#EA4744] text-xl cursor-pointer text-white rounded-lg'
                ><MdDelete /></div>
            </div>
        </div>
    );
};

export default CoffeCard;