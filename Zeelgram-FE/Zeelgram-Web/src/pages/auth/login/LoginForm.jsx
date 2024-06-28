import { useState, useEffect } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import bg1 from "../../../assets/images/loginBg1.png";
import bg2 from "../../..//assets/images/loginBg2.png";
import bg3 from "../../..//assets/images/loginBg3.png";
import iPFrame2 from "../../../assets/images/frame.png";
import logoText from "../../..//assets/images/InsText.png";
import downloadAS from "../../..//assets/images/downloadAppStore.png";
import downloadGP from "../../..//assets/images/downloadGooglePlay.png";

import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthProvider";

const SignInForm = () => {
  const images = [bg1, bg2, bg3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const auth = useAuth();

  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.loginAction(formValues);
  };


  return (
    <>
      <div className="mt-10 flex justify-center ">
        <div className="image-container relative mt-2 hidden lg:flex">
          <img src={iPFrame2} alt="" className="image-fade h-auto w-[500px]" />
          <img
            src={images[currentImageIndex]}
            alt=""
            className="image-fade absolute left-[165px] top-6 h-auto w-[275px]"
          />
        </div>
        {/* Form */}
        <div className="mt-6 block">
          <form
            onSubmit={handleSubmit}
            className=" flex-col px-16 ring-1 ring-gray-300"
            noValidate
          >
            <div className="flex justify-center py-6">
              <img src={logoText} alt="" className="my-4 w-[175px]" />
            </div>

            <input
              type="text"
              className="block h-[40px] w-[260px] rounded-sm bg-gray-50 px-2 text-xs placeholder-gray-500 ring-1 ring-gray-200"
              placeholder="Phone number, username or email"
              name="username"
              value={formValues.username}
              onChange={handleInput}
            />
            {formErrors.username && (
              <span className="error">{formErrors.username}</span>
            )}
            <input
              type="password"
              className="mt-2 h-[40px] w-[260px] rounded-sm  bg-gray-50 px-2 text-xs placeholder-gray-500 ring-1 ring-gray-200"
              placeholder="Password"
              name="password"
              value={formValues.password}
              onChange={handleInput}
            />
            <button
              type="submit"
              className="mt-4 block w-[260px] rounded-md bg-[#0295F6]  py-1.5 text-center text-sm font-medium text-white hover:opacity-70"
            >
              Log in
            </button>

            <div className="my-4 flex items-center">
              <hr className="flex-grow border-t border-gray-200" />
              <span className=" px-4 text-sm font-medium text-gray-500">
                OR
              </span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="text-center">
              <button className="text-sm font-semibold text-[#385185]">
                <FaSquareFacebook className="mb-1 inline h-5 w-6" /> Log in with
                Facebook
              </button>
              <br />
              <button className="my-6 text-xs text-[#00376B]">
                Forgot password?
              </button>
            </div>
          </form>

          {/* Box 2 */}
          <div className=" mt-4 justify-center py-6 text-center text-sm ring-1 ring-gray-300">
            Don&apos;t have an account?&nbsp;
            <span className="font-semibold text-[#0095F6]">
              <Link to="/signup">Sign up</Link>
            </span>
          </div>

          {/* App download */}
          <div className=" mt-2 px-16 py-6 text-center text-sm ">
            <p>Get the app.</p>
            <div className="mt-4 flex gap-x-2">
              <a href="https://itunes.apple.com/app/instagram/id389801252?ct=igweb.loginPage.badge&mt=8&pt=428156&vt=lo">
                <img src={downloadAS} alt="" className="w-[136px]" />
              </a>{" "}
              <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D2EF76FB1-184C-42C4-B676-06971B6EBB81%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge">
                <img src={downloadGP} alt="" className="w-[136px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
