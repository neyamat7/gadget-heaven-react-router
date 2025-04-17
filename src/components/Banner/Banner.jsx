import overlapImg from "../../assets/banner.jpg";
// import "./Banner.css";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="banner-container bg-[#9538E2] max-w-screen-2xl mx-auto pt-24 rounded-xl pb-[220px]">
        <div className="max-w-screen-xl mx-auto px-5">
          <div className="flex flex-col text-center items-center gap-4 text-white">
            <h1 className="text-5xl">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className=" w-full md:w-4/5 lg:max-w-3/5">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="btn rounded-xl text-[#9538E2] font-bold">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <div className="w-9/12 h-[600px] p-5 rounded-xl bg-transparent border border-white mx-auto -mt-[200px]">
          <img className="h-full w-full rounded-xl" src={overlapImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
