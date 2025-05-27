import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

import img from '../../assets/images/old-building.jpg';

// создаём 48 одинаковых фото (можешь заменить на реальные)
const mockImages = Array.from({ length: 48 }, (_, i) => ({
  id: i + 1,
  src: img,
}));

const pageSize = 12;

function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(mockImages.length / pageSize);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPaginatedImages = () => {
    const start = (currentPage - 1) * pageSize;
    return mockImages.slice(start, start + pageSize);
  };

  const renderPagination = () => {
    const pages = [];

    pages.push(1);
    if (currentPage > 3) pages.push('...');
    if (currentPage > 2) pages.push(currentPage - 1);
    if (currentPage !== 1 && currentPage !== totalPages) pages.push(currentPage);
    if (currentPage < totalPages - 1) pages.push(currentPage + 1);
    if (currentPage < totalPages - 2) pages.push('...');
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  return (
    <>
      <Navbar />
      <section className='min-h-[800px] px-6 pt-30 max-w-[1280px] mx-auto'>
        <div className='text-center'>
          <p className='text-[#591516]'>23 апреля</p>
          <h3 className='text-[30px] font-[600]'>
            Встреча выпускников.<br />
            Первое заседание клуба «Три коня»
          </h3>
        </div>

        {/* Grid Gallery */}
        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {getPaginatedImages().map((img) => (
            <div key={img.id} className="aspect-square overflow-hidden">
              <img
                src={img.src}
                alt={`gallery ${img.id}`}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 my-10 text-[#262626]">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 hover:text-[#591516] disabled:opacity-40"
          >
            &lt;
          </button>

          <ul className="flex items-center gap-2 text-sm">
            {renderPagination().map((item, index) =>
              item === '...' ? (
                <li key={`dots-${index}`}>…</li>
              ) : (
                <li
                  key={`page-${item}`} // уникальный ключ
                  onClick={() => handlePageChange(item)}
                  className={`w-6 h-6 flex items-center justify-center cursor-pointer rounded ${currentPage === item
                    ? 'text-[#591516] font-semibold border border-[#591516]'
                    : ''
                    }`}
                >
                  {item}
                </li>
              )
            )}
          </ul>


          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 hover:text-[#591516] disabled:opacity-40"
          >
            &gt;
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Gallery;
