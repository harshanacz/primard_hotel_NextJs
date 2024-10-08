import React from 'react';
import Image from 'next/image';

const reviews = [
    {
        id: 1,
        name: "Emily Thompson",
        position: "Guest from USA",
        rating: 5,
        country: "https://i.ibb.co/zFWvYjq/france-flag-png-xl.jpg",
        date: "12th Aug",
        image: "https://i.ibb.co/0YXQd60/thumb-1920-687027.png",
        review: "Hotel Primard offers a charming stay with exceptional service. The rooms are elegant, the staff is incredibly friendly, and the views of the French countryside are breathtaking. Will definitely come back again!",
    },
    {
        id: 2,
        name: "Hiroshi Tanaka",
        position: "Guest from Japan",
        rating: 5,
        country: "https://i.ibb.co/zFWvYjq/france-flag-png-xl.jpg",
        date: "25th July",
        image: "https://i.ibb.co/zFWvYjq/france-flag-png-xl.jpg",
        review: "Staying at Hotel Primard was a wonderful experience. The atmosphere is calm and relaxing, and the attention to detail is superb. We had the best holiday here and highly recommend this hotel to anyone visiting France.",
    },
    {
        id: 3,
        name: "Marie Dubois",
        position: "Guest from France",
        rating: 5,
        country: "https://i.ibb.co/zFWvYjq/france-flag-png-xl.jpg",
        date: "25th Dec",
        image: "https://i.ibb.co/zFWvYjq/france-flag-png-xl.jpg",
        review: "A magical stay at Hotel Primard! The hotel’s decor is exquisite, the food delicious, and the spa facilities were exactly what we needed. I’ll cherish the memories made here, and I look forward to my next stay.",
    },
];

const CustomerReviewsSection = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-yellow-100 to-white text-yellow-800">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 text-black">
                    Hear from Our Happy Customers
                </h2>
                <p className="text-lg md:text-xl text-gray-600">
                    We value our customers&apos; feedback. Here&apos;s what they have to say.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 lg:px-0 max-w-6xl mx-auto">
                {reviews.map((review, index) => (
                    <div 
                        data-aos="flip-left"
                        key={review.id}
                        className={`relative bg-white p-8 rounded-lg shadow-lg border border-purple-200 transform transition-transform hover:scale-105 ${
                            index >= 3 && reviews.length === 5 ? 'lg:col-span-2 justify-self-center' : ''
                        }`}
                    >
                        <Image
                            src={review.image || "https://via.placeholder.com/100"}
                            alt={review.name}
                            className="w-16 h-16 rounded-full absolute -top-8 left-8 border-4 border-purple-100"
                            width={64} 
                            height={64} 
                        />
                        <div className="mt-3 ml-4">
                            <h3 className="text-2xl font-semibold text-black">{review.name}</h3>
                            <p className="text-sm text-gray-500">{review.position}</p>

                            <p className="mt-2 text-gray-700 leading-relaxed text-2xl md:text-xl">{review.review}</p>

                            <p className="text-xs text-gray-400 mt-4">
                                {review.date} | 
                                <Image
                                    src={review.country}
                                    alt="Country Flag"
                                    className="inline-block w-6 h-4 ml-2"
                                    width={24} 
                                    height={16}
                                />
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CustomerReviewsSection;
