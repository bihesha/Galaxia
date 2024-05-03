import React from 'react';
import Astroanut1 from '../../Images/Astroanut1.jpg';
import Astroanut2 from '../../Images/Astroanut2.png';
import Astroanut3 from '../../Images/Astroanut3.jpg';
import Astroanut4 from '../../Images/Astroanut4.jpg';
import Astroanut5 from '../../Images/Astroanut5.jpg';
import Astroanut6 from '../../Images/Astroanut6.jpg';
import Astroanut7 from '../../Images/Astroanut7.jpg';
import Astroanut8 from '../../Images/Astroanut8.jpg';

const astronauts = [
  { image: Astroanut1, name: "YURI GAGARIN", description: "Yuri Alekseyevich Gagarin (9 March 1934 – 27 March 1968) was a Soviet pilot and cosmonaut who, aboard the first successful crewed spaceflight, became the first human to journey into outer space. Travelling on Vostok 1, Gagarin completed one orbit of Earth on 12 April 1961, with his flight taking 108 minutes." },
  { image: Astroanut2, name: "JOHN GLENN", description: "John Herschel Glenn Jr. (July 18, 1921 – December 8, 2016) was an American Marine Corps aviator, astronaut, businessman, and politician. He was the third American in space, and the first American to orbit the Earth, circling it three times in 1962.  he flew into space again at the age of 77." },
  { image: Astroanut3, name: "NEIL ARMSTRONG", description: "Neil Alden Armstrong (August 5, 1930 – August 25, 2012) was an American astronaut and aeronautical engineer who in 1969 became the first person to walk on the Moon. He was also a naval aviator, test pilot, and university professor. Wapakoneta, Ohio, U.S. Fairfield, Ohio, U.S." },
  { image: Astroanut4, name: "SALLY RIDE", description: "Sally Kristen Ride (May 26, 1951 – July 23, 2012) was an American astronaut and physicist. Born in Los Angeles, she joined NASA in 1978, and in 1983 became the first American woman and the third woman to fly in space, after cosmonauts Valentina Tereshkova in 1963 and Svetlana Savitskaya in 1982." },
  { image: Astroanut5, name: "CHRISTA MCAULIFFE", description: "A high school teacher, Christa McAuliffe made history when she became the first American civilian selected to go into space in 1985. On January 28, 1986, McAuliffe boarded the Challenger space shuttle in Cape Canaveral, Florida. The shuttle exploded shortly after lift-off, killing everyone on board." },
  { image: Astroanut6, name: "MAE JEMISON", description: "As a doctor, engineer, and NASA astronaut, Mae Jemison has always reached for the stars. In 1992, Jemison became the first African American woman to travel in space. She has also written several books and appeared on many television programs including an episode of Star Trek: The Next Generation." },
  { image: Astroanut7, name: "CHRIS HADFIELD", description: "Chris Austin Hadfield OC OOnt MSC CD (born August 29, 1959) is a Canadian retired astronaut, engineer, fighter pilot, musician, and writer. The first Canadian to perform extravehicular activity in outer space, he has flown two Space Shuttle missions and also served as commander of the International Space Station (ISS)." },
  { image: Astroanut8, name: "SCOTT & MARK KELLY", description: "Brothers compete. So in 2016, when astronaut Scott Kelly returned to Earth after spending a year on the International Space Station (ISS), it must have really annoyed his identical twin brother — retired astronaut Mark Kelly — that Scott was temporarily two inches taller than when he left." }
];

const Card = ({ image, name, description }) => {
  return (
    <div className="max-w-xs m-4 rounded shadow-lg">
      <img className="w-screen md:w-full h-80" src={image} alt="Astronaut" />
      <div className="px-6 py-4">
        <div className="mb-2 font-mono text-xl font-bold">{name}</div>
        <div className="h-auto">
          <p className="text-justify text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <>
        <div className="pt-5 mb-4 font-mono text-3xl font-bold text-center md:text-5xl">Most Famous Astronauts</div>
        <div className="flex flex-wrap justify-center mb-28">
        {astronauts.map((astronaut, index) => (
            <Card key={index} image={astronaut.image} name={astronaut.name} description={astronaut.description} />
        ))}
        </div>
    </>
  );
}
