'use client';

import React from 'react';
import Image from 'next/image';
import { useIntl } from 'react-intl';

const AboutUs: React.FC = () => {
  const intl = useIntl();

  return (
    <section id="about" className="flex flex-col bg-white w-full px-4">

  {/* First Section */}
  <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-36 py-20">

    {/* Left Card */}
    <div className="flex flex-col items-center gap-4 w-full lg:w-[277.5px] flex-shrink-0">
      <div className="w-full max-w-[277.5px] h-[196.5px] rounded-[22.5px] overflow-hidden">
        <Image
          src="/air-quality.svg"
          alt={intl.formatMessage({ id: 'service.airQuality.title' })}
          width={277.5}
          height={196.5}
          className="object-cover w-full h-full"
        />
      </div>

      <h3 className="text-[#111D15] text-[18px] font-semibold text-center">
        {intl.formatMessage({ id: 'service.airQuality.title' })}
      </h3>

      <p className="text-[#666] text-[12px] text-center max-w-[277.5px]">
        {intl.formatMessage({ id: 'service.airQuality.description' })}
      </p>

      <button className="bg-[#CF3D31] text-white rounded-[4.5px] px-[15px] py-[9px] text-[12px] hover:bg-white hover:text-black hover:border hover:border-[#666] transition">
        {intl.formatMessage({ id: 'button.bookNow' })}
      </button>
    </div>

    {/* Middle Divider — Only show on desktop */}
    <div className="hidden lg:block h-[214px] w-[1px] bg-[#83A790]" />

    {/* Right Content */}
    <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:max-w-[348px]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
        <Image
          src="/small-logo.svg"
          alt={intl.formatMessage({ id: 'service.expertTeam.title' })}
          width={34}
          height={29}
          className="opacity-70"
        />

        <h2 className="text-[#111D15] text-[24px] font-semibold text-center lg:text-left">
          {intl.formatMessage({ id: 'service.expertTeam.title' })}
        </h2>
      </div>

      <p className="text-[20px] leading-[150%] text-[rgba(0,0,0,0.9)] text-center lg:text-left max-w-[348px]">
        {intl.formatMessage({ id: 'service.expertTeam.description' })}
      </p>
    </div>

  </div>

  {/* Second Section */}
  <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-36 py-20">

    {/* Text Left */}
    <div className="flex flex-col items-center lg:items-start gap-4 w-full max-w-[395px] text-center lg:text-left">
      <span className="text-[#111D15] text-[12px]">
        {intl.formatMessage({ id: 'aboutUs.smallHeading' })}
      </span>

      <h2 className="text-[#111D15] text-[33px] font-semibold leading-[120%]">
        {intl.formatMessage({ id: 'aboutUs.mainHeading' })}
      </h2>

      <p className="text-[#666] text-[15px] leading-[150%] max-w-[387px]">
        {intl.formatMessage({ id: 'aboutUs.description' })}
      </p>

      <button className="bg-[#CF3136] text-white rounded-[4.5px] px-[27px] py-[12px] text-[12px] font-semibold">
        {intl.formatMessage({ id: 'aboutUs.buttonText' })}
      </button>
    </div>

    {/* Right Image — desktop only */}
    <div className="hidden lg:flex w-full max-w-[348px]">
      <Image
        src="/service-right.svg"
        alt={intl.formatMessage({ id: 'aboutUs.rightImageAlt' })}
        width={348}
        height={348}
        className="object-contain w-full h-auto"
      />
    </div>

  </div>

</section>

  );
};

export default AboutUs;
