import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Login = () => {
  return (
    <div className="border border-collapse bg-white p-6 rounded-lg shadow-lg w-[400px] h-[500px]">
      <h2 className="text-xl font-bold text-gray-500">Welcome to Sneat</h2>
      <p className="text-[14px] text-gray-800 mb-4">
        Please sign-in to your account and start the adventure
      </p>
      <form>
        <div className="flex flex-col space-y-4">
          <div>
            <label className="text-black block text-sm">Email</label>
            <input
              className="border border-gray-400 rounded-md h-8 w-full p-4 text-black text-sm"
              placeholder="Enter your e-mail"
            ></input>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <label className="text-black block text-sm">Password</label>
              <label
                className="text-black block text-xs cursor-pointer"
                onClick={undefined}
              >
                Forgot password?
              </label>
            </div>
            <input
              className="border border-gray-400 rounded-md h-8 w-full p-4 text-black text-sm"
              placeholder="Enter your password"
            ></input>
          </div>
          <div className="flex flex-row">
            <input type="checkbox"></input>
            <label className="text-[13px] text-gray-800 pl-2">
              Remember me
            </label>
          </div>
        </div>
        <div className="text-center space-y-2">
          <button className="bg-blue-800 border w-full border-purple-700 h-8 mt-6 rounded-md">
            Sign
          </button>
          <p className="text-[14px] text-gray-800">
            New on our platform? Create an account
          </p>
        </div>
        <div className="flex flex-row space-x-4 mt-4 c items-center">
          <hr className="w-[50%]" />
          <label className="text-black text-sm">or</label>
          <hr className="w-[50%]" />
        </div>

        <div className="flex flex-row space-x-12 justify-center pt-8">
          <FontAwesomeIcon icon={faFacebook} size="2x" color="#1877F2" />
          <FontAwesomeIcon icon={faInstagram} size="2x" color="#3f729b" />
          <FontAwesomeIcon icon={faTwitter} size="2x" color="#00acee" />
        </div>
      </form>
    </div>
  );
};

export default Login;
