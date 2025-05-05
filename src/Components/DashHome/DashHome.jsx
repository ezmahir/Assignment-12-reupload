import pointImg from "../../assets/point.png";
const DashHome = () => {
  return (
    <div>
      <div className="flex justify-center my-20">
        <i>
          <p className="text-2xl font-light">
            Please Select a route from the left to got to your desired path!!
          </p>
          <div className="flex justify-center my-10">
            <img className="w-40 h-40" src={pointImg} alt="" />
          </div>
        </i>
      </div>
    </div>
  );
};

export default DashHome;
