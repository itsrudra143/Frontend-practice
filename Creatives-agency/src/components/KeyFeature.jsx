const KeyFeature = () => {
  return (
    <div
      id="key"
      className="h-max w-full relative flex flex-col items-center justify-center"
    >
      <div className="relative w-full">
        <img
          src="/Images/bg-img-1.png"
          className="w-full object-cover relative sm:h-[1100px] md:h-[480px] lg:h-[900px]"
        />
      </div>
      <div className="absolute w-full h-full flex items-center justify-between xl:px-64 sm:flex-col sm:px-0 sm:justify-center sm:gap-10 md:px-5 lg:px-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl leading-9 uppercase text-white font-semibold font-gotham">
              akita inu dog
            </h1>
            <p className="text-sm leading-6 text-white font-gotham md:text-xs sm:text-xs">
              Cum sociis natoque penatibus et magnis dis parturient montes,
              <br />
              nascetur ridiculus mus. Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit. Donec sed odio dui. Vivamus
              <br />
              sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center items-start text-sm leading-6 uppercase font-medium font-gotham text-white">
            <div className="bg-[#11749e] h-[38px] w-[370px] flex items-center justify-start md:w-[320px] sm:w-[300px]">
              <h3 className="ml-4">Fully responsive design</h3>
            </div>
            <div className="bg-[#11749e] h-[38px] w-[400px] flex items-center justify-start md:w-[350px] sm:w-[340px]">
              <h3 className="ml-4">High Quality Code</h3>
            </div>
            <div className="bg-[#11749e] h-[38px] w-[428px] flex items-center justify-start md:w-[380px] sm:w-[370px]">
              <h3 className="ml-4">Different Headers & Layout</h3>
            </div>
          </div>
        </div>
        <div>
          <img src="/Images/phone-img.png" alt="" className="sm:h-[550px]" />
        </div>
      </div>
    </div>
  );
};

export default KeyFeature;
