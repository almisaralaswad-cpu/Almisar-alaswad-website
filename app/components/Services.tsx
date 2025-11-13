'use client';

import React from 'react';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import Link from 'next/link';

interface ServiceCardProps {
  image: string;
  titleId: string;
  descriptionId: string;
  isPrimary?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, titleId, descriptionId, isPrimary }) => {
  const intl = useIntl();

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-[277.5px] h-[196.5px] rounded-[22.5px] overflow-hidden">
        <Image src={image} alt={intl.formatMessage({ id: titleId })} width={277.5} height={196.5} className="object-cover" />
      </div>

      <h3 className="text-[#111D15] font-['Be Vietnam Pro'] text-[18px] font-semibold leading-[120%] text-center">
        {intl.formatMessage({ id: titleId })}
      </h3>

      <p className="text-[#666] font-['Be Vietnam Pro'] text-[12px] font-normal leading-[150%] text-center w-[277.5px]">
        {intl.formatMessage({ id: descriptionId })}
      </p>

<Link href="#contact">
  <button
    className={`flex justify-center items-center gap-[7.5px] px-[15px] py-[9px] rounded-[4.5px] font-['Be Vietnam Pro'] text-[12px] font-normal transition-colors duration-300 ${
      isPrimary
        ? 'bg-[#CF3D31] text-white hover:bg-white hover:text-black hover:border-[0.75px] hover:border-[#666]'
        : 'bg-transparent text-[#111D15] border-[0.75px] border-[#666] hover:bg-[#CF3D31] hover:text-white hover:border-none'
    }`}
  >
    {intl.formatMessage({ id: 'button.bookNow' })}
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path
        d="M10.4044 9.05407C10.4094 9.4363 10.7233 9.75018 11.1055 9.75514C11.4877 9.76011 11.7936 9.45427 11.7886 9.07204L11.7208 3.85198C11.7159 3.46975 11.402 3.15587 11.0197 3.1509L5.79968 3.08311C5.41744 3.07815 5.11161 3.38398 5.11657 3.76621C5.12154 4.14844 5.43542 4.46232 5.81765 4.46729L9.36686 4.51338L3.1266 10.7536C2.85983 11.0204 2.86552 11.4586 3.13931 11.7324C3.4131 12.0062 3.85131 12.0119 4.11807 11.7451L10.3583 5.50486L10.4044 9.05407Z"
        fill="currentColor"
      />
    </svg>
  </button>
</Link>




    </div>
  );
};

const Services: React.FC = () => {
  const intl = useIntl();

const servicesData = [
  { image: '/plumbing-and-sanitation-work.svg', titleId: 'service.plumbing.title', descriptionId: 'service.plumbing.description' },
  { image: '/professional-painting-services.svg', titleId: 'service.painting.title', descriptionId: 'service.painting.description', isPrimary: true },
  { image: '/Floor-&-Wall-Tiling-Works.svg', titleId: 'service.floor.title', descriptionId: 'service.floor.description' },
  { image: '/Plaster-Works.svg', titleId: 'service.plaster.title', descriptionId: 'service.plaster.description' },
  { image: '/Electrical-Repair-&-Maintenance.svg', titleId: 'service.electrical.title', descriptionId: 'service.electrical.description', isPrimary: true },
  { image: '/Electromechanical-Maintenance.svg', titleId: 'service.electromechanical.title', descriptionId: 'service.electromechanical.description' },
  { image: '/Ceilings-&-Partitions.svg', titleId: 'service.ceilings.title', descriptionId: 'service.ceilings.description' },
  { image: '/Professional-Wallpaper-Fixing.svg', titleId: 'service.wallpaper.title', descriptionId: 'service.wallpaper.description', isPrimary: true },
  { image: '/Carpentry-&-Wood-Flooring.svg', titleId: 'service.carpentry.title', descriptionId: 'service.carpentry.description' },
];


  return (
    <section id= "services"className="flex flex-col gap-6 items-center py-16 bg-white">
      <div className="flex justify-between items-center w-full max-w-[877.5px] px-4 md:px-0">
        <h2 className="text-[#111D15] font-['Be Vietnam Pro'] text-[33px] font-semibold leading-[120%] capitalize w-[402px]">
          {intl.formatMessage({ id: 'services.headingLeft' })}
        </h2>
        <span className="text-[#111D15] font-['Be Vietnam Pro'] text-[24px] font-semibold">
          {intl.formatMessage({ id: 'services.headingRight' })}
        </span>
      </div>

      <div className="w-full max-w-[877.5px] h-[0.75px] bg-[#83A790] mx-auto" />


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            titleId={service.titleId}
            descriptionId={service.descriptionId}
            isPrimary={service.isPrimary}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
