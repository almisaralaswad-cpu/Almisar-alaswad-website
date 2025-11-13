'use client';

import React from 'react';
import Image from 'next/image';
import { useIntl } from 'react-intl';

const ServicesSection: React.FC = () => {
  const intl = useIntl();

  const description = intl.formatMessage({ id: "servicesSection.description" });
  const logoAlt = intl.formatMessage({ id: "servicesSection.logoAlt" });
  const rightImageAlt = intl.formatMessage({ id: "servicesSection.rightImageAlt" });

  const features = [
    intl.formatMessage({ id: "servicesSection.feature1" }),
    intl.formatMessage({ id: "servicesSection.feature2" }),
    intl.formatMessage({ id: "servicesSection.feature3" }),
    intl.formatMessage({ id: "servicesSection.feature4" }),
    intl.formatMessage({ id: "servicesSection.feature5" }),
    intl.formatMessage({ id: "servicesSection.feature6" }),
  ];

  const isArabic = intl.locale === 'ar';

  return (
    <section
    id="services"
      className={`hidden flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 py-14 md:py-20 px-4 md:px-0 bg-white transition-none`}
    >
      {/* Left Image (keep always left) */}
      <div className="flex justify-center md:justify-start flex-shrink-0 w-[220px] h-[180px] md:w-[433px] md:h-[364px]">
        <Image
          src="/right-side.svg"
          alt={rightImageAlt}
          width={433}
          height={364}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Right Content */}
      <div
        className={`flex flex-col gap-6 w-full max-w-[465px] items-center md:items-start 
        ${isArabic ? 'text-right md:text-right' : 'text-center md:text-left'}`}
      >
        {/* Logo */}
        <div className="flex justify-center md:justify-start flex-shrink-0 w-[180px] h-[60px] md:w-[394px] md:h-[132px]">
          <Image
            src="/almisar-service-logo.svg"
            alt={logoAlt}
            width={394}
            height={132}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Description */}
        <p className="text-[#666] font-['Be Vietnam Pro'] text-[11px] md:text-[13px] font-normal leading-[150%] md:leading-[160%] max-w-[90%] md:max-w-none">
          {description}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-[#F5F4F4] rounded-[4px] px-2 py-[6px] w-[115px] md:w-[150px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="6" fill="#005BAA" />
                <path d="M4.89158 8.03205L4.8922 8.03136L3.22472 6.16229C3.16842 6.09705 3.13724 6.00965 3.13789 5.91889C3.13853 5.82814 3.17095 5.7413 3.22817 5.67708C3.28538 5.61286 3.36281 5.5764 3.44377 5.57554C3.52474 5.57469 3.60276 5.60952 3.66104 5.67252L5.32852 7.54194L8.60388 3.87129C8.63237 3.83823 8.66644 3.81187 8.70412 3.79373C8.74179 3.77559 8.78231 3.76604 8.82331 3.76564C8.86431 3.76524 8.90497 3.774 8.94292 3.7914C8.98087 3.8088 9.01535 3.8345 9.04434 3.867C9.07334 3.8995 9.09627 3.93815 9.11179 3.98068C9.12732 4.02322 9.13513 4.0688 9.13478 4.11476C9.13442 4.16072 9.1259 4.20613 9.10972 4.24836C9.09353 4.29059 9.07001 4.32878 9.04052 4.36071L5.54653 8.27676C5.48862 8.34165 5.41009 8.3781 5.32821 8.3781C5.24633 8.3781 5.1678 8.34165 5.10989 8.27676L4.89158 8.03205Z" fill="white" />
              </svg>

              <span className="text-[#111D15] font-lato text-[10px] md:text-[12px] font-semibold leading-[120%]">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Buttons Section */}
        <div className="flex flex-row gap-3 mt-4 md:mt-6">
          <button
            className="rounded-[4.5px] bg-[#CF3D31] text-white font-lato text-[13px] md:text-[15px] font-medium px-6 py-[9px] flex items-center justify-center gap-[7.5px] hover:opacity-90 transition-all"
          >
            {intl.formatMessage({ id: "servicesSection.bookNow" })}
          </button>

          <button
            className="flex items-center justify-center gap-[7.5px] border border-[#666] bg-white text-[#111D15] font-lato text-[13px] md:text-[15px] font-medium px-6 py-[9px] rounded-[4.5px] hover:bg-gray-100 transition-all"
          >
            {intl.formatMessage({ id: "servicesSection.knowMore" })}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
