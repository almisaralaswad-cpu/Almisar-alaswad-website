'use client';

import React from 'react';
import Link from 'next/link';
import { useIntl } from 'react-intl';

const Footer = () => {
  const intl = useIntl();

  const headingStyle = "text-white text-[15px] font-bold";
  const linkStyle = "text-white text-xs font-medium hover:text-gray-300 transition-colors";
  const beVietnamFont = { fontFamily: '"Be Vietnam", sans-serif' };

  return (
    <footer className="w-full bg-[#111D15]">
      <div className="max-w-[1080px] mx-auto px-4 h-auto md:h-[333px] flex flex-col">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between w-full flex-grow pt-10 gap-10">

          {/* Logo */}
          <div className="flex-shrink-0 flex justify-center md:justify-start">
            <Link href="/">
              <img
                src="/almisar-alaswad-logo.svg"
                alt="MyLogo"
                className="w-[120px] h-[120px] md:w-[190px] md:h-[197px]" // smaller on mobile
              />
            </Link>
          </div>

          {/* Columns */}
          <div className="flex flex-col w-full- md:flex-row md:flex-wrap md:gap-16 gap-8">

            {/* Upper Columns: Company + Know More */}
            <div className="flex flex-row sm:flex-row w-fit justify-between gap-8 md:gap-16">

              {/* Column 1: Company */}
              <div className="flex flex-col gap-[27px]" style={beVietnamFont}>
                <h3 className={headingStyle}>{intl.formatMessage({ id: "footer.company" })}</h3>
                <div className="flex flex-col gap-[18px]">
                  <Link href="#about" className={linkStyle}>{intl.formatMessage({ id: "footer.aboutUs" })}</Link>
                  <Link href="#services" className={linkStyle}>{intl.formatMessage({ id: "footer.services" })}</Link>
                  <Link href="/team" className={linkStyle}>{intl.formatMessage({ id: "footer.ourTeam" })}</Link>
                </div>
              </div>

              {/* Column 2: Know More */}
              <div className="flex flex-col gap-[27px]" style={beVietnamFont}>
                <h3 className={headingStyle}>{intl.formatMessage({ id: "footer.knowMore" })}</h3>
                <div className="flex flex-col gap-[18px]">
                  <Link href="/support" className={linkStyle}>{intl.formatMessage({ id: "footer.support" })}</Link>
                  <Link href="/privacy" className={linkStyle}>{intl.formatMessage({ id: "footer.privacy" })}</Link>
                  <Link href="/terms" className={linkStyle}>{intl.formatMessage({ id: "footer.terms" })}</Link>
                </div>
              </div>

            </div>

            {/* Newsletter - full width on mobile */}
            <div className="flex flex-col gap-[19.5px] w-full sm:w-auto mt-6 sm:mt-0" style={beVietnamFont}>
              <h3 className={headingStyle}>{intl.formatMessage({ id: "footer.newsletter" })}</h3>
              <form className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
                <input 
                  type="email" 
                  placeholder={intl.formatMessage({ id: "footer.emailPlaceholder" }) || "Email Goes here"}
                  className="
                    bg-[#111D15] w-full sm:w-[218.25px] px-[12px] py-[7.5px] 
                    rounded-[4.5px]
                    border border-[0.75px] border-[#808080]
                    text-xs font-normal text-white
                    placeholder:text-[#9E9E9E]
                    focus:outline-none focus:border-white
                  "
                  style={beVietnamFont}
                />
                <button 
                  type="submit"
                  className="
                    bg-[#CF3D31] text-white text-xs font-bold
                    rounded-[4.5px] px-[21px] py-[12px]
                    hover:bg-opacity-90 transition-all
                  "
                  style={beVietnamFont}
                >
                  {intl.formatMessage({ id: "footer.send" })}
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full pb-6 mt-10">
          <div className="w-full max-w-[877.5px] h-[0.75px] bg-[#D9D9D9] mx-auto" />
          <p className="text-white text-xs font-medium text-center pt-6" style={beVietnamFont}>
            {intl.formatMessage({ id: "footer.copyright" })}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
