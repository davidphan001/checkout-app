import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import UpcomingShows from "./UpcomingShows";
import BillingForm from "../components/BillingForm";

export default function Checkout() {
  const { id } = useParams();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const count = params.get("count");
  const ticketCost = parseFloat(UpcomingShows[id].value * count).toFixed(2);
  const feeOne = 4.08;
  const feeTwo = 2.95;
  const processFee = parseFloat(feeOne * count).toFixed(2);
  let totalAmount =
    parseFloat(ticketCost) + parseFloat(processFee) + parseFloat(feeTwo);
  return (
    <>
      <section className="py-32 px-5 max-width flex flex-col-reverse md:grid md:grid-cols-2 md:gap-10">
        <article className="mt-8 md:mt-0">
          <h1 className="heading mb-8">Checkout</h1>
          <h2 className="font-bold opacity-80 text-lg lg:text-xl mb-5 text-white">
            Mobile Entry - Free
          </h2>
          <h2 className="font-bold opacity-80 text-lg lg:text-xl mb-5 text-white">
            Tickets Available by Wed Feb 1, 2023
          </h2>
          <h2 className="font-bold opacity-80 text-lg lg:text-xl mb-5 text-white">
            These mobile tickets will be transferred directly to you from a
            trusted seller. We'll email you instructions on how to accept them
            on the original ticket provider's mobile app.
          </h2>
          <h1 className="font-bold opacity-80 text-lg lg:text-2xl mb-5 text-white">
            Payment
          </h1>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <ul className="text-sm text-white opacity-75 capitalize flex flex-col items-start justify-start gap-3"></ul>
          </div>
          <p className="opacity-75 text-white mt-5 mb-8">
            Use Credit / Debit Card
          </p>
          {<BillingForm />}
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
          <div className="flex items-center justify-between">
            <h1 className="heading mb-8">Total</h1>
            <h2 className="text-right font-bold opacity-80 text-xl lg:text-xl mb-5 text-white">
              ${parseFloat(totalAmount).toFixed(2)}
            </h2>
          </div>
          <h2 className="font-bold opacity-80 text-lg lg:text-xl mb-5 text-white">
            Tickets
          </h2>
          <div className="flex items-center justify-between">
            <h2 className="text-left font-bold opacity-80 text-xl lg:text-xl mb-5 text-white">
              Resale Tickets: ${UpcomingShows[id].value} x {count}
            </h2>
            <h2 className="text-right font-bold opacity-80 text-xl lg:text-xl mb-5 text-white">
              ${ticketCost}
            </h2>
          </div>
          <h2 className="font-bold opacity-80 text-xl lg:text-2xl mb-5 text-white">
            Notes From Seller
          </h2>
          <h2 className="font-bold opacity-80 text-lg lg:text-xl mb-5 text-white">
            xfr XFER Proof of at least one dose of COVID-19 vaccination for ages
            5 to 11 and guests ages 12 and up will be required to show proof of
            two COVID-19 vaccine doses or one dose of the Johnson & Johnson
            vaccine. Masks must be worn.
          </h2>
          <h2 className="font-bold opacity-80 text-xl lg:text-2xl mb-5 text-white">
            Fee
          </h2>
          <div className="flex items-center justify-between">
            <h2 className="text-left font-bold opacity-80 text-xl lg:text-xl mb-5 text-white">
              Service Fee: {feeOne} x {count}
            </h2>
            <h2 className="text-right font-bold opacity-80 text-xl lg:text-xl mb-5 text-white">
              ${processFee}
            </h2>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-left font-bold opacity-80 text-xl lg:text-xl mb-5 text-white">
              Order Processing Fee:
            </h2>
            <h2 className="text-right font-bold opacity-80 text-xl lg:text-xl mb-5 text-white">
              ${feeTwo}
            </h2>
          </div>
          <h2 className="text-left font-bold opacity-80 text-xl lg:text-xl mb-5 text-white">
            *All Sales are Final - No Refunds
          </h2>
          <button
            className="btn hover:bg-slate-500"
            onClick={() => alert("Thank you for testing the demo!")}
          >
            Place Order
          </button>
        </article>
      </section>
    </>
  );
}
