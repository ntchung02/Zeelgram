import BirthdayCupcake from "../../../../assets/images/BirthdayCupcake.png";
import downloadAS from "../../../../assets/images/downloadAppStore.png";
import downloadGP from "../../../../assets/images/downloadGooglePlay.png";
import { Link } from "react-router-dom";
import BirthDayOption from "./BirthDayOption";
import SignUpContext from "../SignUpProvider";
import { useContext, useState } from "react";
import { formatDate } from "../../../../utils/DateTimeUtils";

const BirthDayForm = ({ onSubmit }) => {
  const { input, setInput } = useContext(SignUpContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const birthday = formatDate(selectedDate);
    setInput((prevState) => ({
      ...prevState,
      birthday,
    }));
    onSubmit();
  };

  const [selectedDate, setSelectedDate] = useState({
    month: "",
    day: "",
    year: "",
  });

  const handleSelectChange = (key, value) => {
    setSelectedDate((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <>
      <div className="mt-10 flex justify-center">
        {/* Images */}
        <div className=" mt-2 ">
          <form
            action=""
            className="w-[350px] flex-col justify-center text-center ring-1 ring-gray-300"
          >
            <div className="flex justify-center py-6 ">
              <img
                src={BirthdayCupcake}
                alt="logo"
                className="mt-2 w-[144px] "
              />
            </div>
            <h1 className=" mb-4 text-center text-sm font-semibold text-gray-900">
              Add Your Birthday
            </h1>
            <div className="justify-center">
              <p className="my-2 text-sm text-gray-500">
                This won&apos;t be a part of your public profile.
                <br />
                <span className="text-[#0095F6]">
                  Why do I need to provide my birthday?
                </span>
              </p>
            </div>
            {/* Input */}
            <BirthDayOption
              handleSelectChange={handleSelectChange}
              selectedDate={selectedDate}
            />

            <div className="text-center">
              <p className="my-6 text-xs text-gray-500">
                You need to enter the date you were born
              </p>
              <p className=" px-6 text-xs text-gray-500">
                Use your own birthday, even if this account is for a business, a
                pet, or something else
              </p>
              <button
                className="mb-2 mt-4 w-[260px] justify-center rounded-md bg-[#0295F6]  py-1.5 text-center text-sm font-medium text-white hover:opacity-70"
                onClick={handleSubmit}
              >
                Next
              </button>
              <button className="mb-4 w-[260px] justify-center rounded-md py-1.5  text-center text-sm font-semibold text-[#0295F6]  hover:opacity-70">
                Go Back
              </button>
            </div>
          </form>
          {/* Box 2 */}
          <div className="mt-4  w-[350px] justify-center py-6 text-center text-sm ring-1 ring-gray-300">
            Have an account?&nbsp;
            <span className="font-semibold text-[#0095F6]">
              <Link to="/accounts/login">Login</Link>
            </span>
          </div>
          {/* App download */}
          <div className=" mt-2 px-6 py-6 text-center text-sm">
            <p>Get the app.</p>
            <div className="mt-4 flex gap-x-2">
              <Link to="https://itunes.apple.com/app/instagram/id389801252?ct=igweb.loginPage.badge&mt=8&pt=428156&vt=lo">
                <img src={downloadAS} alt="App Store" className="w-[136px]" />
              </Link>
              <Link to="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D2EF76FB1-184C-42C4-B676-06971B6EBB81%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge">
                <img src={downloadGP} alt="App Store" className="w-[136px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BirthDayForm;
