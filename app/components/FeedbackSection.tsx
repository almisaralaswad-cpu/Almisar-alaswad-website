'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useIntl } from 'react-intl';

const FeedbackSection: React.FC = () => {
  const intl = useIntl();

  // Testimonials data using intl messages
  const testimonials = [
    {
      name: intl.formatMessage({ id: 'testimonial.robert.name' }),
      business: intl.formatMessage({ id: 'testimonial.robert.business' }),
      comment: intl.formatMessage({ id: 'testimonial.robert.comment' }),
      image: '/profile.svg',
    },
    {
      name: intl.formatMessage({ id: 'testimonial.jane.name' }),
      business: intl.formatMessage({ id: 'testimonial.jane.business' }),
      comment: intl.formatMessage({ id: 'testimonial.jane.comment' }),
      image: '/profile.svg',
    },
    {
      name: intl.formatMessage({ id: 'testimonial.john.name' }),
      business: intl.formatMessage({ id: 'testimonial.john.business' }),
      comment: intl.formatMessage({ id: 'testimonial.john.comment' }),
      image: '/profile.svg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () => setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const current = testimonials[currentIndex];

  // SVGs
  const LeftArrow = (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <g clipPath="url(#clip0_0_83)">
        <line y1="-0.75" x2="14.0377" y2="-0.75" transform="matrix(-1 8.74228e-08 8.74228e-08 1 18 9)" stroke="#005BAA" strokeWidth="1.5"/>
        <line y1="-0.75" x2="8.20257" y2="-0.75" transform="matrix(-0.707107 0.707107 0.707107 0.707107 10.3947 3.0293)" stroke="#005BAA" strokeWidth="1.5"/>
        <line y1="-0.75" x2="8.2308" y2="-0.75" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 8.82005 14.1072)" stroke="#005BAA" strokeWidth="1.5"/>
      </g>
      <defs>
        <clipPath id="clip0_0_83">
          <rect width="18" height="18" fill="white" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 7.86805e-07)"/>
        </clipPath>
      </defs>
    </svg>
  );

  const RightArrow = (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <g clipPath="url(#clip0_0_88)">
        <line x1="8.52372e-07" y1="8.25" x2="14.0377" y2="8.25" stroke="white" strokeWidth="1.5"/>
        <line x1="8.13562" y1="2.49897" x2="13.9357" y2="8.29906" stroke="white" strokeWidth="1.5"/>
        <line x1="8.64963" y1="13.5768" x2="14.4697" y2="7.7568" stroke="white" strokeWidth="1.5"/>
      </g>
      <defs>
        <clipPath id="clip0_0_88">
          <rect width="18" height="18" fill="white" transform="translate(18) rotate(90)"/>
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <div className="flex justify-center items-center bg-[#FFFFFF] px-6 py-16">
      <section id="testimonials" className="flex flex-col md:flex-row justify-between w-full max-w-[1000px] gap-6 md:gap-[52.5px]">
        {/* Left Column */}
        <div className="flex flex-col gap-6 w-full md:w-[375px] order-1">
          <h2 className="text-[#111D15] font-['Be Vietnam Pro'] font-semibold text-[33px] leading-[120%]">
            {intl.formatMessage({ id: 'feedback.heading' })}
          </h2>
          <p className="text-[#666] font-['Be Vietnam Pro'] font-normal text-[12px] leading-[160%]">
            {intl.formatMessage({ id: 'feedback.description' })}
          </p>

          {/* Carousel Arrows for Desktop */}
          <div className="hidden md:flex gap-3 mt-4">
            {/* Left */}
            <div
              className="flex justify-center items-center p-3 bg-white rounded-[7.099px] border-[0.75px] border-[#005BAA] cursor-pointer"
              onClick={handlePrev}
            >
              {LeftArrow}
            </div>
            {/* Right */}
            <div
              className="flex justify-center items-center p-3 bg-[#CF3D31] rounded-[7.099px] cursor-pointer"
              onClick={handleNext}
            >
              {RightArrow}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col w-full md:w-[450px] order-2">
          <div className="relative flex flex-col md:flex-row p-4 justify-center items-start gap-4 rounded-[15px] border-t-[7.5px] border-r-[7.5px] border-[#005BAA] bg-white shadow-md">
            <div className="flex-shrink-0 rounded-[7.5px] border border-[#E6E6E6] overflow-hidden">
              <Image src={current.image} alt={current.name} width={128} height={183} className="object-cover w-full" />
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-['Be Vietnam Pro'] font-medium text-[15px] text-[#111D15]">{current.name}</p>
              <p className="font-['Be Vietnam Pro'] font-normal text-[12px] text-[#666]">{current.business}</p>

              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M10.8217 7.49977L9.7192 3.86982C9.50171 3.15733 8.49672 3.15733 8.28672 3.86982L7.17674 7.49977H3.83929C3.1118 7.49977 2.8118 8.43725 3.40429 8.85725L6.13425 10.8072L5.06177 14.2647C4.84427 14.9622 5.65426 15.5247 6.23175 15.0822L8.99921 12.9822L11.7667 15.0897C12.3442 15.5322 13.1542 14.9697 12.9367 14.2722L11.8642 10.8147L14.5941 8.86475C15.1866 8.43725 14.8866 7.50727 14.1591 7.50727H10.8217V7.49977Z" fill="#FF9800"/>
                  </svg>
                ))}
              </div>

              <p className="text-[#666] font-['Be Vietnam Pro'] font-normal text-[12px] leading-[150%]">
                {current.comment}
              </p>
            </div>
          </div>

          {/* Mobile Carousel Arrows */}
          <div className="flex md:hidden gap-3 mt-4 justify-center">
            <div
              className="flex justify-center items-center p-3 bg-white rounded-[7.099px] border-[0.75px] border-[#005BAA] cursor-pointer"
              onClick={handlePrev}
            >
              {LeftArrow}
            </div>
            <div
              className="flex justify-center items-center p-3 bg-[#CF3D31] rounded-[7.099px] cursor-pointer"
              onClick={handleNext}
            >
              {RightArrow}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeedbackSection;
