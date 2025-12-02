'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useIntl } from 'react-intl';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const intl = useIntl();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    const timestamp = new Date().toLocaleString();

    emailjs
      .send(
        'service_faijbk2',
        'template_89et7mk',
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: timestamp,
          to_email: 'almisaralaswad@gmail.com',
        },
        'd8o5ODD7WvOd-hHRa'
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error(error);
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-white py-16 px-6 md:px-10 lg:px-0 md:py-12 min-h-screen overflow-auto"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-12 md:gap-8 lg:gap-12">

        {/* LEFT SIDE */}
        <div
          className="flex-1 flex flex-col gap-6 md:gap-4"
          data-aos="fade-right"
        >
          <h2 className="text-2xl md:text-[26px] lg:text-3xl font-bold text-[#111D15]">
            {intl.formatMessage({ id: 'contact.findUs' })}
          </h2>

          {/* Contact Cards */}
          <div className="flex flex-col gap-4 md:gap-3">

            {/* Phone */}
            <div
              className="flex items-center gap-4 bg-white rounded-lg shadow px-4 py-3 md:py-2"
              data-aos="zoom-in"
            >
              <div className="bg-[#005BAA] w-10 h-10 flex items-center justify-center rounded-full text-white">
                <Phone size={16} />
              </div>
              <div className="text-sm text-[#111D15]">
                <p className="font-medium">{intl.formatMessage({ id: 'contact.callUs' })}</p>
                <p className="text-gray-500 text-xs">
                  {intl.formatMessage({ id: 'contact.callNumber' })}
                </p>
              </div>
            </div>

            {/* Email */}
            <div
              className="flex items-center gap-4 bg-white rounded-lg shadow px-4 py-3 md:py-2"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <div className="bg-[#005BAA] w-10 h-10 flex items-center justify-center rounded-full text-white">
                <Mail size={16} />
              </div>
              <div className="text-sm text-[#111D15]">
                <p className="font-medium">{intl.formatMessage({ id: 'contact.emailNow' })}</p>
                <p className="text-gray-500 text-xs">
                  {intl.formatMessage({ id: 'contact.emailAddress' })}
                </p>
              </div>
            </div>

            {/* Address */}
            <div
              className="flex items-center gap-4 bg-white rounded-lg shadow px-4 py-3 md:py-2"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="bg-[#005BAA] w-10 h-10 flex items-center justify-center rounded-full text-white">
                <MapPin size={16} />
              </div>
              <div className="text-sm text-[#111D15]">
                <p className="font-medium">{intl.formatMessage({ id: 'contact.addressTitle' })}</p>
                <p className="text-gray-500 text-xs">
                  {intl.formatMessage({ id: 'contact.address' })}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div
          className="flex-1 flex flex-col gap-4 md:gap-3"
          data-aos="fade-left"
        >
          <h2 className="text-2xl md:text-[26px] lg:text-3xl font-bold text-[#111D15]">
            {intl.formatMessage({ id: 'contact.keepInTouch' })}
          </h2>

          <p className="text-gray-600 text-sm mb-4">
            {intl.formatMessage({ id: 'contact.description' })}
          </p>

          <form
            onSubmit={sendEmail}
            className="flex flex-col gap-4 md:gap-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={intl.formatMessage({ id: 'contact.form.name' })}
              className="border border-gray-300 rounded-lg px-4 py-2 text-black placeholder:text-grey-400"
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={intl.formatMessage({ id: 'contact.form.email' })}
              className="border border-gray-300 rounded-lg px-4 py-2 text-black placeholder:text-grey-400"
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={intl.formatMessage({ id: 'contact.form.message' })}
              className="border border-gray-300 rounded-lg px-4 py-2 h-24 resize-none text-black placeholder:text-grey-400"
              required
            />

            <button
              type="submit"
              className="bg-[#CF3D31] text-white font-medium py-2 rounded-md hover:opacity-90 transition-all"
            >
              {intl.formatMessage({ id: 'contact.form.submit' })}
            </button>

            {status && (
              <p className="text-sm mt-2 text-green-600">{status}</p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactPage;
