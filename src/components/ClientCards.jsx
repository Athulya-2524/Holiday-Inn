import React from 'react';

function ClientCards() {
  const galleryImages = [
    'https://blog.aci.aero/wp-content/uploads/2019/06/shutterstock_1300287319.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/0d/fa/f8/4a/happy-customers-enjoying.jpg',
    'https://thumbs.dreamstime.com/b/hotel-customers-summer-vacations-two-waiter-serving-them-drinks-ocean-background-80696854.jpg',
    'https://tse1.mm.bing.net/th/id/OIP.NVJr5DT7k08Qng59nB2PhgHaE8?pid=Api&P=0&h=180',
    'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX7355853.jpg',
    'https://www.royalshell.com/wp-content/uploads/2017/11/RoyalShell-Family-Customer-Service-e1510170234707-1.jpg',
    'https://www.bareinternational.com/wp-content/uploads/2018/02/AdobeStock_122236056-1030x687.jpeg',
    'https://tse3.mm.bing.net/th/id/OIP.bzupFUb1tkTkom7miEOuPAHaE8?pid=Api&P=0&h=180',
    'https://previews.123rf.com/images/dolgachov/dolgachov1609/dolgachov160901673/62087095-summer-holidays-travel-tourism-vacation-and-people-concept-happy-family-over-hotel-resort-swimming-p.jpg',
    'https://tse1.mm.bing.net/th/id/OIP.8wpw8pdTnY3ZeJkXWF0SaAHaE8?pid=Api&P=0&h=180',
    'https://tse1.mm.bing.net/th/id/OIP.Oe1xzqQAT-YhlmxV_8gKJwHaE7?pid=Api&P=0&h=180',
    'https://tse1.mm.bing.net/th/id/OIP.9WF5-Cpwt8ceUEDmrHIIVgHaE8?pid=Api&P=0&h=180'
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">Our Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {galleryImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery image ${index + 1}`}
            className="rounded-lg object-cover w-full h-48 shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        ))}
      </div>
    </section>
  );
}

export default ClientCards;
