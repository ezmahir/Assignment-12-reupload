import ErrorImg from "../../assets/error.webp";
const Errorpage = () => {
  return (
    <div>
      <div className="text-center my-16 space-y-10">
        <h1 className="font-black text-7xl">OOPS...</h1>
        <p className="font-light text-5xl">Status Code: 404</p>
        <p className="font-extralight text-xl">
          The Page you are looking for is not available right now
        </p>
        <img className="mx-auto rounded-full h-96" src={ErrorImg} alt="" />
      </div>
    </div>
  );
};

export default Errorpage;
