import { useForm } from "react-hook-form";
import { SectionHeader } from "./Constants";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div id="contact" className="w-full">
      <div className="relative flex flex-col items-center justify-center w-full">
        <div className="w-full relative">
          <img
            src="/Images/form-bg.png"
            alt=""
            className="w-full object-center object-cover relative sm:h-[800px] md:h-[900px] lg:h-[900px]"
          />
        </div>
        <div className="absolute flex flex-col items-center justify-start">
          <SectionHeader
            letter="c"
            sentence="we'd love to hear about your project"
          />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 items-center justify-center w-max lg:gap-8"
          >
            <div className="flex gap-6 sm:flex-col md:flex-col">
              <input
                type="text"
                className="w-80 h-12 pl-4 bg-[rgba(0,0,0,0.1)] border-2 border-white outline-none text-white focus:outline-none lg:w-72"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
              <input
                type="email"
                className="w-80 h-12 pl-4 bg-[rgba(0,0,0,0.1)] border-2 border-white outline-none text-white focus:outline-none lg:w-72"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
              <input
                type="tel"
                className="w-80 h-12 pl-4 bg-[rgba(0,0,0,0.1)] border-2 border-white outline-none text-white focus:outline-none lg:w-72"
                placeholder="Phone"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <span className="text-red-500">Phone is required</span>
              )}
            </div>
            <div className="w-full">
              <textarea
                className="w-full h-36 pl-3 pt-3 bg-[rgba(0,0,0,0.1)] border-2 border-white outline-none text-white focus:outline-none"
                placeholder="Message"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && (
                <span className="text-red-500">Message is required</span>
              )}
            </div>
            <button
              className="text-2xl leading-6 uppercase text-white font-gotham font-medium text-center py-4 px-10 rounded-md bg-[#11749e] focus:outline-none"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="w-full sm:hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43116.820456481735!2d-74.02491651610379!3d40.700140317785966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1716033833026!5m2!1sen!2sin"
          className="w-full h-80 md:h-52"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-full text-white flex justify-between items-center px-60 py-4 sm:flex-col sm:px-0 md:px-0 md:flex-col lg:px-16">
        <p>&copy; Chitkara University - All Rights Reserved</p>
        <p>Designed By: Chitkara University</p>
      </div>
    </div>
  );
};

export default Contact;
