import { useState } from "react";
import CommonButton from "../../components/common/CommonButton";

const AccountPage = () => {
  const [firstName, setFirstName] = useState("Md");
  const [lastName, setLastName] = useState("Rimel");
  const [email, setEmail] = useState("rimel1111@gmail.com");
  const [address, setAddress] = useState("Kingston, 5236, United State");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="w-full flex justify-center pt-20 pb-24">
      <div className="w-[1170px] flex flex-col gap-20">
        <div className="flex w-full gap-[100px]">
          {/* Sidebar */}
          <div className="flex flex-col gap-6 w-[250px]">
            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-base text-black">
                Manage My Account
              </h3>
              <div className="flex flex-col gap-2 pl-9">
                <span className="text-red-500 cursor-pointer">My Profile</span>
                <span className="text-gray-500 cursor-pointer hover:text-black">
                  Address Book
                </span>
                <span className="text-gray-500 cursor-pointer hover:text-black">
                  My Payment Options
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-base text-black">My Orders</h3>
              <div className="flex flex-col gap-2 pl-9">
                <span className="text-gray-500 cursor-pointer hover:text-black">
                  My Returns
                </span>
                <span className="text-gray-500 cursor-pointer hover:text-black">
                  My Cancellations
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-base text-black">My WishList</h3>
            </div>
          </div>

          {/* Main Content - Edit Profile Form */}
          <div className="flex-1 shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] p-20 rounded bg-white">
            <h2 className="text-xl font-medium text-red-500 mb-4">
              Edit Your Profile
            </h2>

            <form className="flex flex-col gap-6">
              <div className="flex gap-12 w-full">
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-base text-black">First Name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full h-[50px] bg-secondary rounded px-4 outline-none text-black placeholder:text-gray-400"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-base text-black">Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full h-[50px] bg-secondary rounded px-4 outline-none text-black placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="flex gap-12 w-full">
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-base text-black">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-[50px] bg-secondary rounded px-4 outline-none text-black placeholder:text-gray-400"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-base text-black">Address</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full h-[50px] bg-secondary rounded px-4 outline-none text-black placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-2">
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-base text-black">
                    Password Changes
                  </label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full h-[50px] bg-secondary rounded px-4 outline-none text-black placeholder:text-gray-400"
                    placeholder="Current Password"
                  />
                </div>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full h-[50px] bg-secondary rounded px-4 outline-none text-black placeholder:text-gray-400"
                  placeholder="New Password"
                />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full h-[50px] bg-secondary rounded px-4 outline-none text-black placeholder:text-gray-400"
                  placeholder="Confirm New Password"
                />
              </div>

              <div className="flex justify-end items-center gap-8 mt-4">
                <button type="button" className="text-black hover:text-red-500">
                  Cancel
                </button>
                <CommonButton
                  label="Save Changes"
                  onClick={() => {}}
                  className="!w-[214px] !h-[56px]"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
