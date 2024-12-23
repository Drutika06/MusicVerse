import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const concerts = [
  {
    bandName: "Rock Legends Live",
    singer: "Taylor Swift & The Rockers",
    location: "Madison Square Garden, NYC",
    timing: "8:00 PM - 11:00 PM",
    price: "$100 - $300",
    imageUrls: [
      "https://mztributebands.com/wp-content/uploads//2024/02/LOVER-169-3-1.jpg",
      "https://www.shutterstock.com/image-photo/crowd-partying-stage-lights-live-600nw-2297236461.jpg",
      "https://static.toiimg.com/thumb/msid-113540999,width-1280,height-720,resizemode-4/113540999.jpg"
    ],
    description: "Join us for an electrifying night with Rock Legends Live, featuring Taylor Swift & The Rockers!",
    aboutSinger: "Taylor Swift is a legendary rock singer known for her powerful voice and electrifying stage presence."
  },
  {
    bandName: "Pop Symphony Night",
    singer: "Ed Sheeran & Symphony Orchestra",
    location: "Royal Albert Hall, London",
    timing: "7:00 PM - 10:00 PM",
    price: "$150 - $400",
    imageUrls: [
      "https://img.etimg.com/thumb/width-1600,height-900,imgsize-195720,resizemode-75,msid-116017305/magazines/panache/ed-sheeran-india-tour-2025-check-concert-ticket-prices-dates-cities-and-how-to-book.jpg",
      "https://th-i.thgim.com/public/entertainment/movies/rcq3mr/article67441699.ece/alternates/LANDSCAPE_1200/Ed%20Sheeran%20Mathematics%20Tour_India.jpg",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    description: "Experience an enchanting evening with Ed Sheeran and the Symphony Orchestra.",
    aboutSinger: "Ed Sheeran is a singer celebrated for his soulful voice and heart-touching performances."
  },
  {
    bandName: "Jazz and Blues Extravaganza",
    singer: "Ariana Grande",
    location: "Blue Note Jazz Club, NYC",
    timing: "9:00 PM - 12:00 AM",
    price: "$80 - $250",
    imageUrls: [
      "https://lh3.googleusercontent.com/proxy/rG3TSS3_a4JC3-JrIUf9Iwg_ACcZdoCTBM8sXB27-oNrMq3P9eKNHuhsuusCW3rhZvH4hPMb2mhRfGlIh2seQkwjo5byMjMU_nUgn9nXcXqYe4C0jx6mHQffivlkAm-l1t9awwlbLepiv9nUhp4ymZZup2s7L36pAZObwEQcdNlfW73cBg",
      "https://images.stockcake.com/public/7/c/f/7cf59e56-d5f4-4d4a-a9a9-43650b987532_large/rock-concert-energy-stockcake.jpg",
      "https://media.istockphoto.com/id/1806011581/photo/overjoyed-happy-young-people-dancing-jumping-and-singing-during-concert-of-favorite-group.jpg?s=612x612&w=0&k=20&c=cMFdhX403-yKneupEN-VWSfFdy6UWf1H0zqo6QBChP4="
    ],
    description: "Dive into the world of Jazz with the Ariana Grande.",
    aboutSinger: "Ariana Grande is a trailblazer in the world of Jazz, known for her innovative music and iconic performances."
  }
];

const Concert = () => {
  const mainSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000, // Slower transition for the main slideshow
  };

  const innerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Slower transition for image slideshow
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center text-gray-900 py-16 px-6"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1199243596/photo/concert-stage-on-rock-festival-music-instruments-silhouettes.jpg?s=612x612&w=0&k=20&c=BNqLID7OXEA9SI0znQNQ2K9ywQ0vdVL_0Pf0piOH8I4=')",
      }}
    >
      <div className="w-full max-w-5xl">
        <Slider {...mainSettings}>
          {concerts.map((concert, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-95 p-8 rounded-2xl shadow-lg border border-gray-300 mx-4"
            >
              {/* Slideshow of Concert Images */}
              <div className="mb-6">
                <Slider {...innerSettings}>
                  {concert.imageUrls.map((imageUrl, idx) => (
                    <div key={idx}>
                      <img
                        src={imageUrl}
                        alt="Concert"
                        className="w-full h-80 object-cover rounded-lg shadow-md"
                      />
                    </div>
                  ))}
                </Slider>
              </div>

              {/* Concert Information */}
              <h2 className="text-4xl font-semibold text-gray-800 mb-4">{concert.bandName}</h2>
              <p className="text-xl text-gray-600">By: {concert.singer}</p>
              <p className="text-lg text-gray-600 mt-4">Location: {concert.location}</p>
              <p className="text-lg text-gray-600 mt-4">Timing: {concert.timing}</p>
              <p className="text-lg text-gray-600 mt-4">Price: {concert.price}</p>

              {/* Description */}
              <p className="mt-5 text-gray-600 text-xl">{concert.description}</p>

              {/* About the Artist Section */}
              <div className="mt-8">
                <h3 className="text-3xl font-semibold text-gray-800">About the Artist</h3>
                <p className="mt-3 text-gray-600">{concert.aboutSinger}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Concert;

