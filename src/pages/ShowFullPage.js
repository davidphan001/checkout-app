import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import UpcomingShows from "./UpcomingShows";

export default function ShowFullPage() {
  const { id } = useParams();
  let [count, setCount] = useState(1);
  function incrementCount() {
    if (count < 8) {
      count = count + 1;
      setCount(count);
    } else {
      alert("Cannot add anymore!");
    }
  }
  function decrementCount() {
    if (count !== 1) {
      count = count - 1;
      setCount(count);
    } else {
      alert("Cannot remove anymore!");
    }
  }
  return (
    <>
      <section className="py-32 max-width flex flex-col-reverse md:grid md:grid-cols-2 md:gap-10">
        <article className="mt-8 md:mt-0">
          <h1 className="heading mb-8">{UpcomingShows[id].title}</h1>
          <h2 className="font-bold opacity-80 text-lg lg:text-2xl mb-10 text-white">
            Year: {UpcomingShows[id].year}
          </h2>
          <h2 className="font-bold opacity-80 text-lg lg:text-2xl mb-10 text-white">
            Ticket Cost: ${UpcomingShows[id].value} Per Person
          </h2>
          <h2 className="font-bold opacity-80 text-lg lg:text-2xl mb-10 text-white">
            <button onClick={decrementCount} className="btn">
              -
            </button>
            <span className="m-10 text-4xl">{count}</span>
            <button onClick={incrementCount} className="btn">
              +
            </button>
          </h2>
          <Link
            to={{
              pathname: `/checkout-app/Checkout/${id}`,
              search: "?count=" + count,
            }}
            className="btn"
          >
            Add Ticket
          </Link>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <ul className="text-sm text-white opacity-75 capitalize flex flex-col items-start justify-start gap-3"></ul>
          </div>
          <p className="opacity-75 text-white mt-5 mb-8">
            {UpcomingShows[id].description}
          </p>
          <ul className="mt-8 flex items-center justify-start gap-4">
            <li>
              <Link
                to={`/checkout-app`}
                className="text-white opacity-75 text-sm hover:opacity-100"
              >
                &larr; Back
              </Link>
            </li>
          </ul>
        </article>
        <article>
          <img
            src={UpcomingShows[id].image}
            alt="ep1"
            className="h-126 object-cover"
          ></img>
        </article>
      </section>
    </>
  );
}
