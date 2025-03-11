import React from "react";

export default function MainSection({ image, text }) {
  return (
    <>
      <section className="w-full min-h-screen flex flex-col justify-center">
        {/* الصورة كخلفية */}
        <div className="w-full h-full absolute inset-0 z-0 brightness-[0.25]">
          <img
            src={image} // غير المسار ده لصورة حقيقية
            alt="Hero Background"
            className="w-full h-full object-cover "
          />
        </div>

        {/* النص والأزرار */}
        <div className="relative z-10  flex items-center justify-center">
          <div className="w-[90%] md:w-full mx-auto my-5">
            <div className="w-full md:w-full flex  items-center justify-center text-center gap-y-4 text-white">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-center">
                {text}
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
