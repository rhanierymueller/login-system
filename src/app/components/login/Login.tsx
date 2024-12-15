import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [remember, setRemember] = useState<boolean>(false);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('email', email);
    console.log('password', password);
    console.log('remember', remember);
  };

  return (
    <div className="border border-collapse bg-white p-6 rounded-lg shadow-lg w-[400px] h-[500px]">
      <h2 className="text-xl font-bold text-gray-500">Welcome to Sneat</h2>
      <p className="text-[14px] text-gray-800 mb-4">
        Please sign-in to your account and start the adventure
      </p>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col space-y-4">
          <div>
            <label className="text-black block text-sm">Email</label>
            <input
              className="border border-gray-400 rounded-md h-8 w-full p-4 text-black text-sm"
              placeholder="Enter your e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <label className="text-black block text-sm">Password</label>
              <label className="text-black block text-xs cursor-pointer">
                Forgot password?
              </label>
            </div>
            <input
              className="border border-gray-400 rounded-md h-8 w-full p-4 text-black text-sm"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-row">
            <input
              type="checkbox"
              onChange={(e) => setRemember(e.target.checked)}
            />
            <label className="text-[13px] text-gray-800 pl-2">
              Remember me
            </label>
          </div>
        </div>
        <div className="text-center space-y-2">
          <button
            className="bg-blue-800 border w-full border-purple-700 h-8 mt-6 rounded-md"
            type="submit"
          >
            Sign
          </button>
          <p className="text-[14px] text-gray-800">
            New on our platform?
            <a
              href="#"
              className="text-blue-500 hover:underline cursor-pointer ml-1"
            >
              Create an account
            </a>
          </p>
        </div>
        <div className="flex flex-row space-x-4 mt-4 c items-center">
          <hr className="w-[50%]" />
          <label className="text-black text-sm">or</label>
          <hr className="w-[50%]" />
        </div>

        <div className="flex flex-row space-x-12 justify-center pt-8">
          <FontAwesomeIcon
            icon={faFacebook}
            size="2x"
            color="#1877F2"
            onClick={undefined}
            className="cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            color="#3f729b"
            onClick={undefined}
            className="cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            size="2x"
            color="#00acee"
            onClick={undefined}
            className="cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
