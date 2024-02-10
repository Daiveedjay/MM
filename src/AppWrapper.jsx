import Notifications from "./Notifications";

export default function AppWrapper() {
  return (
    <div className=" max-w-[1440px] w-full bg-VeryLightGrayishBlue rounded-md h-full lg:max-h-[80%] flex justify-center items-center">
      <Notifications />
    </div>
  );
}
