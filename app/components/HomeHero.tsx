'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useIntl } from 'react-intl';

const HomeHero: React.FC = () => {
  const intl = useIntl();

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex justify-center items-center -mt-10 md:-mt-16"
      style={{
        backgroundImage: "url('/bg-image.webp')",
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-[90%] max-w-6xl">
        
        {/* Left Section */}
        <div className="flex flex-col gap-10">
          
          {/* Text + Buttons */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h1 className="text-[#111D15] text-[28px] md:text-[36px] font-bold leading-snug max-w-[500px] font-['Be Vietnam Pro']">
              {intl.formatMessage({ id: "hero.title" })}
            </h1>

            {/* Buttons */}
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                href="#contact"
                className="rounded-[4.5px] bg-[#CF3D31] flex justify-center items-center gap-[7.5px] px-6 py-3 text-white font-['Be Vietnam Pro'] text-[12px] font-semibold"
              >
                {intl.formatMessage({ id: "hero.getStarted" })}
              </Link>

              <Link
                href="#services"
                className="flex justify-center items-center gap-[7.5px] px-6 py-3 border-[0.75px] border-[#666] rounded-[4.5px] text-[#111D15] font-['Be Vietnam Pro'] text-[12px] font-semibold"
              >
                {intl.formatMessage({ id: "hero.viewServices" })}
              </Link>
            </div>
          </div>

          {/* Lower Image */}
          <div className="w-full max-w-[408px] aspect-[204/65] mx-auto md:mx-0">
        <Image
            src="/your-lower-image.svg"
            alt={intl.formatMessage({ id: "hero.imageAlt" })}
            width={408}
            height={130}
            className="object-contain w-full h-full"
            priority
        />
        </div>

        </div>

        {/* Right Section (Hidden on small & medium screens) */}
<div
  className="rounded-[15px] border-t-[7.5px] border-r-[7.5px] border-[#CF3136] overflow-hidden"
  style={{
    width: "390px",
    height: "393px"
  }}
>
  <Image
    src="/side-hero.svg"
    alt="Image"
    width={390}
    height={393}
    className="object-cover w-full h-full"
  />
</div>

      </div>
    </div>
  );
};

export default HomeHero;
