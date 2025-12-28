import { useState, useEffect } from "react";
import AppStorage, { STORAGE_KEY } from "../../../storage";
import { useAuth } from "../../../contexts/AuthContext";

const BillingDetails = () => {
  const { user } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);

  useEffect(() => {
    const savedData = AppStorage.get(STORAGE_KEY.BILLING_INFO);
    if (savedData) {
      setFirstName(savedData.firstName || "");
      setCompanyName(savedData.companyName || "");
      setStreetAddress(savedData.streetAddress || "");
      setApartment(savedData.apartment || "");
      setCity(savedData.city || "");
      setPhoneNumber(savedData.phoneNumber || "");
      setEmailAddress(savedData.emailAddress || "");
      setSaveInfo(true);
    } else if (user) {
      setFirstName(user.userName || "");
      setEmailAddress(user.email || "");
      setPhoneNumber(user.phoneNumber || "");
      if (user.address && user.address.length > 0) {
        setStreetAddress(user.address[0]);
      }
    }
  }, [user]);

  useEffect(() => {
    if (saveInfo) {
      const dataToSave = {
        firstName,
        companyName,
        streetAddress,
        apartment,
        city,
        phoneNumber,
        emailAddress,
      };
      AppStorage.set(STORAGE_KEY.BILLING_INFO, dataToSave);
    } else {
      if (AppStorage.has(STORAGE_KEY.BILLING_INFO)) {
        AppStorage.remove(STORAGE_KEY.BILLING_INFO);
      }
    }
  }, [
    firstName,
    companyName,
    streetAddress,
    apartment,
    city,
    phoneNumber,
    emailAddress,
    saveInfo,
  ]);

  return (
    <section className="flex flex-col gap-8 w-full lg:w-[40%] text-black">
      <h2 className="text-2xl md:text-4xl font-medium tracking-wide">
        Billing Details
      </h2>
      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-base text-gray-500">
            First Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full h-12 bg-secondary rounded px-4 outline-none text-black"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base text-gray-500">Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full h-12 bg-secondary rounded px-4 outline-none text-black"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base text-gray-500">
            Street Address<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            className="w-full h-12 bg-secondary rounded px-4 outline-none text-black"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base text-gray-500">
            Apartment, floor, etc. (optional)
          </label>
          <input
            type="text"
            value={apartment}
            onChange={(e) => setApartment(e.target.value)}
            className="w-full h-12 bg-secondary rounded px-4 outline-none text-black"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base text-gray-500">
            Town/City<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full h-12 bg-secondary rounded px-4 outline-none text-black"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base text-gray-500">
            Phone Number<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full h-12 bg-secondary rounded px-4 outline-none text-black"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base text-gray-500">
            Email Address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            className="w-full h-12 bg-secondary rounded px-4 outline-none text-black"
            required
          />
        </div>

        <div className="flex items-center gap-4 mt-2">
          <div className="relative flex items-center justify-center">
            <input
              type="checkbox"
              id="saveInfo"
              checked={saveInfo}
              onChange={(e) => setSaveInfo(e.target.checked)}
              className="peer appearance-none w-6 h-6 border border-gray-400 rounded bg-white checked:bg-button2 checked:border-button2 cursor-pointer"
            />
            <svg
              className="absolute w-4 h-4 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <label
            htmlFor="saveInfo"
            className="text-base cursor-pointer select-none"
          >
            Save this information for faster check-out next time
          </label>
        </div>
      </form>
    </section>
  );
};

export default BillingDetails;
