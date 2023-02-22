import React, { useState } from "react";
import { account } from "../appwriteAuth/appwriteConfig";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { v4 as uuidv4 } from "uuid";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  //Signup
  const userSignup = async (e) => {
    e.preventDefault();
    const promise = account.create(
      uuidv4(),
      user.email,
      user.password,
      user.name

    );

    promise.then(
      function (response) {
        console.log(response);
        navigate("/profile");
      },
      //failure
      function (error) {
        console.log(error);
      }
    );
  };
  return (
    <>
      <div className="bg-mybg text-center pt-8 h-screen">
        <div>
          <h1 className="text-mainText text-5xl font-mono tex-center">
            Manage with TaskTick
          </h1>
        </div>

        <div className="flex items-center justify-center mt-10">
          <div className="min-w-fit flex-col border bg-white px-10 py-5 shadow-md rounded-[4px] ">
            <div className="mb-5 flex justify-center">
              <img className="w-20" src={logo} alt="" />
            </div>
            <form className="space-y-6" action="#" method="POST">
              <div className="flex flex-col text-sm rounded-md">
                <input
                  className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-gray-500 "
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  onChange={(e) => {
                    setUser({
                      ...user,
                      name: e.target.value,
                    });
                  }}
                />
                <input
                  className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-gray-500 "
                  type="email"
                  placeholder="Email id"
                  name="email"
                  required
                  onChange={(e) => {
                    setUser({
                      ...user,
                      email: e.target.value,
                    });
                  }}
                />
                <input
                  className="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-gray-500"
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  onChange={(e) => {
                    setUser({
                      ...user,
                      password: e.target.value,
                    });
                  }}
                />
              </div>
              <button
                onClick={userSignup}
                className="mt-5 w-full border p-2 bg-gradient-to-r from-textColor bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
                type="submit"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-5 flex justify-between text-sm text-gray-600">
              <p className="text-gray-400">Alreay Registered ?</p>

              <a href="/"> Sign In</a>
            </div>

            <div className="mt-5 flex justify-center gap-3    ">
              <p className="text-gray-400">Signin with</p>
              <img
                className="h-7 grayscale cursor-pointer hover:grayscale-0 scale-105 duration-300"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFbUlEQVRoge1ZXWwUVRT+zszs2nZbiUARui2b1lCgJAiWFAMRIoEHFYOtqSL4wAMQGyDxwUQMmiAhSh+NbRFN1AeaQGpacZUHTIjRItLQpCApPw0GdttSUihIty3dnZnjw5T+7Nz52c4WH+j3NHvvd875zt479+cMMI1pPNmgdDjhSshDaqiMSX8ZjFIGLQIwD0D2CCUGoJvAV0FoJcinM5feaKH90L3G9pTA4Ka8Al1SdgF4F0AwRfNOAEcl0mqzGrs6J6thUgn0V87NheY/SIxtAPyTDT6COAPfsqp+8nS4+06qxiknEKsIbQHzlwBmpmrrgLsM3p3TFD2WipHrBHhnqS/W21tHwPbUtbkHA0eyc3P30NetCTd8Vwnw63lZA4r8A0CveJPnEoyTAU2tpHD3oBNVcvS1s9T3WMUDAOHVAVk5wZVLHN8vxwRivb11j1X8IxDWx9T+L5xpNoiVh7YCfDR9qlIHE2/OaYwet+q3TOBBeXCWBPkKgNlTosw9+nRVXWi1xFpOISL5M/z/4gFgpiz7PrXqFI7AYEUwX2f5Ohw2KXnZGiirXoO0uAzSrLkAAL2vB3p7C9TmMLSLzV6Ej0dcVpQFmQ3/RJI7FBFbZ3k3bMRLwSL4q6ohl5SZ+/KKIOUVQVm/GVp7C+I1H0DvuelFPAD4NVWtAvBRcodpBHg/pIEL828CyBd5kpe8iKf2fgMKPO0qsnalFQ/3vQkwp6jZhK6AEglRA7TxjaYRGLoQWgmwULwULJooPhFH4lQ91D9OQI9cNTgFxVDWlsO3YQv07usYrt6RDvEAEBxK5JcCnS22CRhHYvHi5K+qHhXPfT14eHAb9BuXJ3D0jjbEO9qg/noMfO82+EGfK3WBRmOaDVSELDk6SesA2CegM1aI5MvPvzQ25xNxofgJfm5a900WBJQmt5mWUQIVi4yV1RtHnxOn6m3FTxUYWJjcJlqF5omMpcVjK476+4/CAI+mgRX0rusY2rPOlj++TTCdTNpEG1m2oA0069nRZ4522Aq1Ao3sFR6Qk9wg3AemDPrE1Wj8P+zmJRZBlEAMgtsW370NChYBAKhgAbijzWQoCi4tfAGZnzcZPvp6UhInQL/Jv4B0S2SpXx5bvZS15a4jKmvGuHp7iw3TFUzaTAkw+JrIUm0Ojz77NmyBVFjiGE0qXALfhnfGfJwJW3IHKkKO04eAq6YYpgbCeZGxdrEZWvs544fPj4x939kmIRWWIOPj7wHFZ9hfOgvt7z9tBTqBYdYm2Afk01YO4nV7wbF/Dd7Mucis/gn+7QcgFS8HZQSAjCxIxcvh334AmYdOgJ6ZYwSO3Uf88F5P4gGAiE3arA5zNwAUiJzIJSuN81D2DFdBOXYfw4d2QPM6/5kjgWXRwuRqnnkEDEK9lR+t/RwefrgJ2qW/HGNql84aXO8vLyBRvagU6e1Cs3Q1lFUbIZWUgWYbmyTfuWVcaM6EPc/5cRiWFP25rIbOruQOyztxf/n8wwS8ly4FXkDENYHG6B5Rn+WdWFf0fQBSrlVOAe5qCc3yTmyZwIyGzj4GC7N+nGCgyq7oa1vYymmKHmPgSPpluQOBa3OaIg12HMfKXLYS2cVE4vPz1OKXrHvR951IjglQA7TsRGIrGCfTo8sVfg6o6lv0G1QnomMCAEDh7sHAnNw3GPjKuzaHWODawL1IuZvKtMFPEf0VBW8TUw3SXrWjXgbvcprzyXA1AuOR0xg9rkNbREx1AIZTtRdgmIhrNEVblKp4wOtHvsr8oK5KuwFshcXZyQZREI5Ksl4r2mHdIj2fWfdDGmrLX6GTtI6A0pHqQRATPrNSJ4GvMXCeiE9nLY22puMz6zSm8aTjPy9i6LxlaK5BAAAAAElFTkSuQmCC"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
