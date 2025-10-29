import "./header.css";

const Header = () => {
  return (
    <>
      <div className="h-16 bg-black mb-4 text-white flex items-center px-4 py-10 justify-center">
        <div className=" text-center text-4xl">Mealify</div>
        <div className=" text-right px-5">Login/Signup</div>
      </div>
    </>
  );
};

export default Header;
