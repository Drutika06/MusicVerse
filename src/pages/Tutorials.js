import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import the Link component for navigation
import { FaShoppingCart } from "react-icons/fa"; // Import cart icon

const TutorialCard = ({ id, title, description, videoUrl, imageUrl, price, isPurchased, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg w-80 h-auto flex flex-col items-center justify-between p-4 shadow-lg hover:shadow-xl transition-shadow">
      {/* Image or Thumbnail */}
      <div
        className="w-full h-48 rounded-lg"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Tutorial Details */}
      <div className="w-full text-center space-y-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-sm text-gray-600 font-bold">Price: ${price}</p>
      </div>

      {/* Add to Cart or Watch Button */}
      <div className="w-full flex justify-center space-x-4 mt-2">
        {!isPurchased ? (
          <button
            onClick={() => onAddToCart(id)}
            className="bg-[#2C3E50] text-white rounded-full px-4 py-2"
          >
            Add to Cart
          </button>
        ) : (
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white rounded-full px-4 py-2"
          >
            Watch Tutorial
          </a>
        )}
      </div>
    </div>
  );
};

const Tutorials = () => {
  const tutorials = [
    {
      id: 1,
      title: "Guitar Lessons for Beginners",
      description: "Learn the basics of guitar playing.",
      videoUrl: "https://www.youtube.com/watch?v=example-guitar",
      imageUrl: "https://worshiptutorials.com/wp-content/uploads/2015/11/Beginner-Guitar-Course.jpg",
      price: 20,
    },
    {
      id: 2,
      title: "Piano Lessons for Beginners",
      description: "Start learning piano with these easy lessons.",
      videoUrl: "https://www.youtube.com/watch?v=example-piano",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeUvBK7X51_BKND6H08CWNWINlXtWzAInz0w&s",
      price: 25,
    },
    {
      id: 3,
      title: "Singing Tutorials",
      description: "Learn to sing with these simple tutorials.",
      videoUrl: "https://www.youtube.com/watch?v=0QDp4Qd-LM4",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0t7q7LH4kqVlmtoakq_hcLiEuUaSXDom5UMEI2ZmBjstBa12GDbO-NWvd--VdVM4Jmnw&usqp=CAU",
      price: 15,
    },
    {
      id: 4,
      title: "Veena Tutorials",
      description: "Understand the basics of Veena and musical notes.",
      videoUrl: "https://www.youtube.com/watch?v=example-theory",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MVA1tAijCecJlZlBmYyCBlms0SFDjbjtIg&s",
      price: 18,
    },
    {
      id: 5,
      title: "Tabla Playing for Beginners",
      description: "Learn the basics of tabla.",
      videoUrl: "https://www.youtube.com/watch?v=example-guitar-theory",
      imageUrl: "https://rukminim2.flixcart.com/image/850/1000/jq189e80/regionalbooks/n/w/b/learn-how-to-play-tabla-original-imafcfxncyttyvgz.jpeg?q=90&crop=false",
      price: 22,
    },
  ];

  const [cart, setCart] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  const addToCart = (id) => {
    const selectedTutorial = tutorials.find((tutorial) => tutorial.id === id);
    if (!cart.some((item) => item.id === id)) {
      setCart([...cart, selectedTutorial]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen p-6 relative"
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/07/14/86/34/360_F_714863409_lvHiqrBY90FbwuiVwFEE6DHxvIwX04fg.jpg')",
      }}
    >
      {/* Cart Icon */}
      <div className="absolute top-4 right-4">
        <button onClick={toggleCart} className="bg-white p-3 rounded-full shadow-lg">
          <FaShoppingCart size={24} />
        </button>
        {isCartOpen && (
          <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg w-96 p-4">
            <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b py-2"
                >
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* Page Header */}
      <h1 className="text-white text-4xl font-semibold text-center mb-8">
        Music Tutorials
      </h1>

      {/* Tutorials List */}
      <div className="flex flex-wrap justify-center gap-8">
        {tutorials.map((tutorial) => (
          <TutorialCard
            key={tutorial.id}
            {...tutorial}
            isPurchased={cart.some((item) => item.id === tutorial.id)}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      {/* Section for Learning about Instruments and Singing */}
      <div className="mt-10 text-center">
        <h2 className="text-white text-3xl font-semibold">Learn More About Music</h2>
        <p className="text-white text-lg mt-4">
          Explore various tutorials on different musical instruments and singing techniques to enhance your skills.
        </p>
        <div className="mt-6">
          <Link
            to="/tutorials/music-theory"
            className="bg-[#2C3E50] text-white rounded-full p-3"
          >
            Learn Music Theory & Musical Notes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
