import React from "react";
import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, photo, name, Taste, price } = coffee;

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-between items-center mx-4 w-full">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>Teste: {Taste}</p>
            <p>Price: {price}</p>
          </div>
          <div className="join join-vertical space-y-2">
            <button className="btn join-item">
              <FaEye size={20} />
            </button>
            <button className="btn join-item">
              <MdEdit size={20} />
            </button>
            <button onClick={() => handleDelete(_id)} className="btn join-item">
              <MdDelete size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
