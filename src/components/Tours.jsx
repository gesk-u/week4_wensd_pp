import { useState } from 'react';
import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
    const [toursData, setToursData] = useState(tours);

    const handleTourDelete = (tourId) => {
      const updatedTours = toursData.filter((tour) => tour.id !== tourId)
      setToursData(updatedTours)
    }
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursData.map((tour) => {
          return <Tour
           key={tour.id}
            {...tour}
            handleTourDelete = {handleTourDelete}
             />;
        })}
      </div>
    </section>
  );
};
export default Tours;

