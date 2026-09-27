import { useState } from 'react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Interactive Smartboards & Visual Simulations',
      category: 'Modern Infrastructure',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD4mgEwoD9lfgEfQQrflRhC011ZRXBWA8npkIk09jyUIy8y8DEAn_mKCv04bOTUfkmOy9Q71LjS06HDVLbF9In6XF0666vYAbMuhZzit5c7SzpbFM1avPWSv_5jeRM1ymSYpiSvNQ4F_9VhGe8B6tii1n7uIFwD0c68UrQ0r4BjjoB1jtQtKdTPB1sQhoRPAtU2qwZBmJp1AJ2W67KeQQe6Paqy1X98KdE-WJsPDuZ-duQYbovgFdnEdg',
    },
    {
      id: 2,
      title: 'Dedicated 1-on-1 Doubt Clearing Counters',
      category: 'Personal Guidance',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDoRyCnsGLrcWlnDHxScV2We4qOD9hndSIvB6zo9LprT6aEUbJknTrutopPI5VBFcpbXJ3G1zC5FmLj5cVje4n1HGx7eNqsrAmURCoKJFBlcLs-JIqgCbc0cZGHH6kgLYh4iO4dcBKxC9B3AoPN22HKj0GEtTy2efnXjOzAnujxuETrDS42jHqtWpHRPk4mm4A8m_UblJs1UfHdM3HwpK8KQRqPh5ubD13pMkR6RJ63s8mKx97Db6ZMqA',
    },
    {
      id: 3,
      title: 'Board Mock Exam Hall with Strict Invigilation',
      category: 'Exam Simulation',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCcyLiRpetlb2v1eA3-JCPY4FKFYfWzHXwBhCzkRJFmQtgN2AWjS89WVpZk_kppINcBqMC-wDTJI7zLIF9gOHJQ7eFXST7qiLc2dHwPjmGiXqDjW4hiCdzHbQ84z28BSkLVKM_b-oByNOHmHsl6tRUvjQFjhbWJ1g9qntn44mWApIZP1U4sePmGsvJGzKfg1cW2-NmY2qdkkKsX6qUFpYIoLDeXIipswmAHX-P2BeJ1mJlQBoR66Oz2xQ',
    },
  ];

  return (
    <section className="w-full bg-surface py-space-xl lg:py-24" id="gallery">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
          <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">
            Inside Sahjanand Educational Zone
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-primary font-bold tracking-tight mt-2">
            A High-Focus, Well-Equipped Study Sanctuary
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
            Designed purposefully for ergonomic comfort, high-clarity audiovisual projection, and zero distractions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="relative rounded-2xl overflow-hidden group shadow-sm h-64 bg-surface-container cursor-pointer border border-surface-container/60"
            >
              <img
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                src={item.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-space-md">
                <span className="font-label-sm text-label-sm text-tertiary-fixed font-bold uppercase">
                  {item.category}
                </span>
                <p className="font-headline-sm text-headline-sm text-on-primary font-bold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Lightbox preview */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xl p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-primary/80 text-on-primary hover:bg-primary cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
              />
              <div className="p-4">
                <span className="text-secondary font-label-sm uppercase font-bold">{selectedImage.category}</span>
                <h3 className="text-primary font-headline-sm text-xl font-bold mt-1">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

