import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import logo from '../assets/logo.jpg'; 
import image from '../assets/shoes.jpg';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log('Form data', values);
    setSubmitting(false);
  };

  return (
    <div className="flex h-screen">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start md:ml-8 p-8">
        <div className="flex items-center absolute top-12 left-[40%] md:left-14">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full mr-4" /> {/* Logo image */}
          <h1 className="text-2xl font-bold">Logo</h1> {/* Logo text */}
        </div>
        
        <div className="w-full max-w-sm mt-auto mb-auto">
          <h1 className="text-2xl font-bold mb-6">Log in</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@example.com"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                  )}
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="enter your password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && (
                    <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                  )}
                </div>
                <div className="flex flex-col justify-between">
                  <button
                    className="bg-yellow-500 w-[60%] mb-4 hover:bg-yellow-600 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Login
                  </button> 
                  <a
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="#"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="mt-8">
                  <p className="text-sm">
                    Don't have an account? <a href="#" className="text-blue-500">Register here</a>
                  </p>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>

      <div
        className="w-1/2 h-full hidden md:block"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
                         
          }}
      ></div>
    </div>
  );
};

export default Login;
