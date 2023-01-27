import React, { useState } from "react";

const BillingForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [cvc, setCVC] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // send form data to server or perform other logic
    setSubmitted(true);
  };

  const handleEdit = () => {
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bg-white m-9 p-4 rounded-lg text-center">
        <p className="text-lg font-medium mb-2">Name: {name}</p>
        <p className="text-lg font-medium mb-2">Address: {address}</p>
        <p className="text-lg font-medium mb-2">Email: {email}</p>
        <p className="text-lg font-medium mb-2">Credit Card: {creditCard}</p>
        <p className="text-lg font-medium mb-2">CVC: {cvc}</p>
        <p className="text-lg font-medium mb-2">
          Expiration Date: {expirationDate}
        </p>
        <p className="text-lg font-medium mb-2">State: {state}</p>
        <p className="text-lg font-medium mb-2">Zipcode: {zipcode}</p>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-white rounded-lg p-3 m-2"
            onClick={handleEdit}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="bg-white p-6 rounded-lg" onSubmit={handleSubmit}>
      <label className="block font-medium text-lg mb-2">
        Name:
        <input
          className="border border-gray-300 rounded-lg p-2 w-full"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="block font-medium text-lg mb-2">
        Address:
        <input
          className="border border-gray-300 rounded-lg p-2 w-full"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <label className="block font-medium text-lg mb-2">
        Email:
        <input
          className="border border-gray-300 rounded-lg p-2 w-full"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <div className="flex flex-wrap md:flex-no-wrap">
        <label className="block font-medium text-lg mb-2 w-full md:w-3/5 md:mb-0">
          Credit Card:
          <input
            className="border border-gray-300 rounded-lg p-2 w-full"
            maxLength={16}
            type="text"
            value={creditCard}
            onChange={(e) => setCreditCard(e.target.value)}
          />
        </label>
        <label className="block font-medium text-lg mb-2 w-full md:w-1/5">
          CVC:
          <input
            className="border border-gray-300 rounded-lg p-2 w-full"
            maxLength={3}
            type="text"
            value={cvc}
            onChange={(e) => setCVC(e.target.value)}
          />
        </label>
        <label className="block font-medium text-lg mb-2 w-full md:w-1/5">
          Exp Date:
          <input
            className="border border-gray-300 rounded-lg p-2 w-full"
            type="month"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </label>
      </div>
      <label className="block font-medium text-lg mb-2">
        Zipcode:
        <input
          className="border border-gray-300 rounded-lg p-2 w-full"
          type="text"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
      </label>
      <label className="block font-medium text-lg mb-2">
        State:
        <input
          className="border border-gray-300 rounded-lg p-2 w-full"
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </label>
      <button className="bg-indigo-500 text-white rounded-lg p-2 mt-4">
        Submit
      </button>
    </form>
  );
};

export default BillingForm;
