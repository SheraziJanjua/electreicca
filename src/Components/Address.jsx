import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddressModule = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNumber: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      phoneNumber: Yup.string().required('Phone Number is required')
      .matches(/^\d+$/, 'Phone Number must contain only numbers'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      message: Yup.string().required('Message is required')
      .max(20,'onlu 20 characters are allowed'),
    }),
    onSubmit: (values) => {
      console.log('Form data', values);
    },
  });

  return (
    <section className="bg-white p-1 md:pd-8">
      <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <input 
                type="text" 
                name="name"
                placeholder="Name" 
                className={`w-full px-4 py-3 border ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-400'} rounded focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 mt-1 text-sm">{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <input 
                type="text" 
                name="phoneNumber"
                placeholder="Phone Number" 
                className={`w-full px-4 py-3 border ${formik.touched.phoneNumber && formik.errors.phoneNumber ? 'border-red-500' : 'border-gray-400'} rounded focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="text-red-500 mt-1 text-sm">{formik.errors.phoneNumber}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                className={`w-full px-4 py-3 border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-400'} rounded focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 mt-1 text-sm">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <textarea 
                name="message"
                placeholder="Message" 
                className={`w-full px-4 py-3 border ${formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-gray-400'} rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-500 mt-1 text-sm">{formik.errors.message}</div>
              ) : null}
            </div>

            <div>
              <button 
                type="submit" 
                className="py-3 px-12 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-200"
              >
                SEND
              </button>
            </div>
          </form>
        </div>

        <div className="w-full md:w-1/2 h-96">
          <div className="h-full bg-gray-300">
            <iframe 
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999924489013!2d2.2922926156742413!3d48.858373979287954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fd78e446229%3A0x6b59b83b52d25eb7!2sEiffel%20Tower%2C%20Paris%2C%20France!5e0!3m2!1sen!2s!4v1615220367081!5m2!1sen!2s" 
              className="w-full h-full border-0" 
              allowFullScreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressModule;
