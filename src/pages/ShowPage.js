import React from "react";
import { Link } from "react-router-dom";
import UpcomingShows from "./UpcomingShows";

export default function ShowPage() {
  return (
    <>
      <section className="py-32">
        <h1 className="heading text-center mb-10">Upcoming Shows</h1>

        <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-3 px-5">
          {UpcomingShows.map(({ id, title, image, description }) => (
            <article key={id}>
              <img src={image} alt={title} className="h-96 object-cover" />
              <div className="bg-zinc-900 p-5">
                <h2 className="text-white text-lg mb-3 font-bold tracking-wide">
                  {title}
                </h2>
                <p className="text-white opacity-75 mb-8">{`${description.substring(
                  0,
                  200
                )}...`}</p>
                <Link to={`/${id}`} className="btn">
                  See Tickets
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
