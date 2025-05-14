import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffees = Object.fromEntries(formData.entries());

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffees),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Added successfully",
            text: "You clicked the button!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="p-24 w-11/12 mx-auto">
      <div className="flex flex-col text-center space-y-4">
        <h1 className="text-6xl">Add Coffee</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <div className="my-4">
        <form onSubmit={handleForm}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Name</legend>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">price</legend>
              <input
                type="text"
                name="price"
                className="input w-full"
                placeholder="price"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Supplier</legend>
              <input
                type="text"
                name="Supplier"
                className="input w-full"
                placeholder="Supplier"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Taste</legend>
              <input
                type="text"
                name="Taste"
                className="input w-full"
                placeholder="Taste"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Category</legend>
              <input
                type="text"
                name="Category"
                className="input w-full"
                placeholder="Category"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Details</legend>
              <input
                type="text"
                name="Details"
                className="input w-full"
                placeholder="Details"
              />
            </fieldset>
          </div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo</legend>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Photo URL"
            />
          </fieldset>
          <input
            className="btn btn-primary w-full my-4"
            type="submit"
            value="Add Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
