"use client";

import { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import * as emailjs from "@emailjs/browser";
// import { toast, Toaster } from "sonner";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     phoneNumber: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string().required("Required"),
  //     phoneNumber: Yup.number().optional(),
  //     email: Yup.string().email("Invalid email address").required("Required"),
  //     subject: Yup.string().required("Required"),
  //     message: Yup.string().required("Required"),
  //   }),
  //   onSubmit: (values, { resetForm }) => {
  //     setLoading(true);

  //     toast.success("Your message has been sent.");

  //     emailjs.init({
  //       publicKey: "1y5t7W-3fdC3xEFji",
  //       blockHeadless: true,
  //       limitRate: {
  //         id: "app",
  //         throttle: 10000,
  //       },
  //     });

  //     emailjs.send("service_jse0iq9", "template_zfr345k", values).then(
  //       () => {
  //         toast.success("Your message has been sent.");
  //         resetForm();
  //         setLoading(false);
  //       },
  //       () => {
  //         toast.error(
  //           "Uh oh! Something went wrong, please check your connection and try again!"
  //         );
  //         setLoading(false);
  //       }
  //     );
  //   },
  // });

  return (
    <form
      id="contactForm"
      className="contactForm"
      action="#"
      name="contactForm"
      method="post"
    >
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Full name"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.name}
              required
            />
            <div className="help-block with-errors">
              {/* {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : " "} */}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              id="phone_number"
              name="phoneNumber"
              className="form-control"
              placeholder="Phone Number"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.phoneNumber}
            />
            <div className="help-block with-errors"></div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Email Address"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.email}
              required
            />
            <div className="help-block with-errors"></div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              id="subject"
              name="subject"
              className="form-control"
              placeholder="Subject"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.subject}
              required
            />
            <div className="help-block with-errors"></div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <textarea
              name="message"
              id="message"
              className="form-control"
              rows={3}
              placeholder="Message"
              required
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.message}
            ></textarea>
            <div className="help-block with-errors"></div>
          </div>
        </div>
        <div className="col-xl-12">
          <div className="form-group text-center mb-0">
            <button
              // onClick={() => formik.handleSubmit()}
              className="theme-btn style-two"
              disabled={loading}
            >
              {loading ? (
                /* From Uiverse.io by ashish-yadv */
                <div className="loader">
                  <li className="ball"></li>
                  <li className="ball"></li>
                  <li className="ball"></li>
                </div>
              ) : (
                <>
                  send message
                  <i className="far fa-long-arrow-right"></i>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* <Toaster /> */}
    </form>
  );
};

export default ContactForm;
