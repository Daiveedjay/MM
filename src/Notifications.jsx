import Avatar1 from "./images/av1.webp";
import Avatar2 from "./images/av2.webp";
import Avatar3 from "./images/av3.webp";
import Avatar4 from "./images/av4.webp";
import Avatar5 from "./images/av5.webp";
import Avatar6 from "./images/av6.webp";
import Avatar7 from "./images/av7.webp";
import ChessImg from "./images/image-chess.webp";

export default function Notifications() {
  // ... (Previous code)

  const notificationsData = [
    {
      avatar: Avatar5,
      name: "Mark Webber",
      action: "reacted to your recent post",
      details: "My first tournament today!",
      time: "1m ago",
      hasRead: false,
    },
    {
      avatar: Avatar1,
      name: "Angela gray",
      action: "followed you",
      details: "",
      time: "5m ago",
      hasRead: false,
    },
    {
      avatar: Avatar3,
      name: "Jacob Thompson",
      action: "has joined your group",
      details: "Chess Club",
      time: "1 day ago",
      hasRead: false,
    },
    {
      avatar: Avatar7,
      name: "Rizky Hasanuddin",
      action: "sent you a private message",
      details: "",
      time: "5 days ago",
      hasRead: true,
      // extraContent:
      //   "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    },
    {
      avatar: Avatar4,
      name: "Kimberly Smith",
      action: "commented on your picture",
      details: "",
      time: "2 weeks ago",
      hasRead: true,
      // extraContent: <img className="w-12 h-12" src={ChessImg} alt="" />,
    },
    {
      avatar: Avatar6,
      name: "Nathan Peterson",
      action: "reacted to your recent post",
      details: "5 end-game strategies to increase your win rate",
      time: "2 weeks ago",
      hasRead: true,
    },
    {
      avatar: Avatar2,
      name: "Anna Kim",
      action: "left the group",
      details: "Chess Club",
      time: "1 day ago",
      hasRead: true,
    },
  ];

  const NotificationItem = ({
    avatar,
    name,
    action,
    details,
    time,
    hasRead,
  }) => (
    <div className="flex gap-4 p-4 font-medium rounded-md bg-LightGrayishBlue3 text-textColor">
      <div className="min-w-12 max-w-12">
        <img className="w-full" src={avatar} alt="" />
      </div>
      <div>
        <div>
          <span className="font-bold text-VeryDarkBlue">{name}</span> {action}{" "}
          <span className="font-bold text-textGray">{details}</span>
          {!hasRead && <HasRead />}
        </div>
        <span className="text-GrayishBlue">{time}</span>
      </div>
    </div>
  );

  // return (
  //   <div className=" lg:max-w-[50%] w-full max-h-[85%] h-full  rounded-md shadow-sm bg-appWhite p-8">
  //     <div className="flex items-center justify-between ">
  //       <h1 className="flex items-center gap-2 font-extrabold ">
  //         <span className="text-2xl ">Notifications</span>
  //         <span className=" bg-appBlue py-0.5 px-3  text-appWhite rounded-md">
  //           3
  //         </span>
  //       </h1>
  //       <p className=" text-DarkGrayishBlue">Mark all as read</p>
  //     </div>
  //     <main className="flex flex-col gap-2 my-8 ">
  //       <NotificationItem
  //         avatar={Avatar5}
  //         name="Mark Webber"
  //         action="reacted to your recent post"
  //         details="My first tournament today!"
  //         time="1m ago"
  //       />

  //       {/* /////////////////// */}

  //       <NotificationItem
  //         avatar={Avatar1}
  //         name="Angela gray"
  //         action="followed you"
  //         details=""
  //         time="1m ago"
  //       />

  //       {/*  */}

  //       <NotificationItem
  //         avatar={Avatar3}
  //         name="Jacob Thompson"
  //         action=" has joined your group"
  //         details="Chess Club"
  //         time="1 day ago"
  //         className=" text-appBlue"
  //       />

  //       {/*  */}
  //       <div className="flex gap-4 p-4 font-medium rounded-md bg-LightGrayishBlue3 text-textColor">
  //         <div className=" min-w-12 max-w-12">
  //           <img className="w-full " src={Avatar7} alt="" />
  //         </div>
  //         <div className="">
  //           <div>
  //             <span className="font-bold text-VeryDarkBlue">
  //               Rizky Hasanuddin
  //             </span>{" "}
  //             sent you a private message{" "}
  //           </div>

  //           <span className=" text-GrayishBlue">5 days ago</span>
  //           <p className="p-4 mt-2 border rounded-md border-LightGrayishBlue2">
  //             Hello, thanks for setting up the Chess Club. I&apos;ve been a
  //             member for a few weeks now and I&apos;m already having lots of fun
  //             and improving my game.
  //           </p>
  //         </div>
  //       </div>
  //       <div className="flex gap-4 p-4 font-medium rounded-md bg-LightGrayishBlue3 text-textColor">
  //         <div className="min-w-12 max-w-12">
  //           <img className="w-full " src={Avatar4} alt="" />
  //         </div>
  //         <div className="flex justify-between w-full ">
  //           <div>
  //             <div>
  //               {" "}
  //               <span className="font-bold text-VeryDarkBlue">
  //                 Kimberly Smith{" "}
  //               </span>{" "}
  //               commented on your picture{" "}
  //             </div>
  //             <span className=" text-GrayishBlue">2 weeks ago</span>
  //           </div>
  //           <div>
  //             <img className="w-12 h-12 " src={ChessImg} alt="" />
  //           </div>
  //         </div>
  //       </div>
  //       {/*  */}

  //       <NotificationItem
  //         avatar={Avatar6}
  //         name="  Nathan Peterson"
  //         action="reacted to your recent post"
  //         details="5 end-game strategies to increase your win rate"
  //         time="2 weeks ago"
  //       />
  //       {/*  */}

  //       <NotificationItem
  //         avatar={Avatar2}
  //         name="Anna Kim"
  //         action="left the group"
  //         details="Chess Club"
  //         time="2 weeks ago"
  //         className=" text-appBlue"
  //       />
  //     </main>
  //   </div>
  // );

  return (
    <div className="lg:max-w-[50%] w-full max-h-[85%] h-full rounded-md shadow-sm bg-appWhite p-8">
      <div className="flex items-center justify-between ">
        <h1 className="flex items-center gap-2 font-extrabold ">
          <span className="text-2xl ">Notifications</span>
          <span className=" bg-appBlue py-0.5 px-3  text-appWhite rounded-md">
            3
          </span>
        </h1>
        <p className=" text-DarkGrayishBlue">Mark all as read</p>
      </div>

      <main className="flex flex-col gap-2 my-8">
        {/* Loop through the data array and render NotificationItem for each entry */}
        {notificationsData.map((notification, index) => (
          <NotificationItem key={index} {...notification} />
        ))}
      </main>
    </div>
  );
}

function HasRead() {
  return (
    <span className=" absolute w-2 h-2 translate-y-[10px] translate-x-full bg-appRed rounded-full"></span>
  );
}

// const Avatar = ({ src, alt }) => (
//   <div className="w-12">
//     <img className="w-full" src={src} alt={alt} />
//   </div>
// );

// // Reusable Timestamp Component
// const Timestamp = ({ time }) => (
//   <span className="text-GrayishBlue">{time}</span>
// );

// // Reusable Notification Item Component
// const NotificationItem = ({
//   avatar,
//   name,
//   action,
//   details,
//   time,
//   extraContent,
//   className = "text-textGray",
// }) => (
//   <div className="flex gap-4 p-4 font-medium rounded-md bg-LightGrayishBlue3 text-textColor">
//     <Avatar src={avatar} alt="" />
//     <div>
//       <div>
//         <span className="font-bold text-VeryDarkBlue">{name}</span> {action}{" "}
//         <span className={`font-bold ${className} `}>{details}</span>
//       </div>
//       <Timestamp time={time} />
//       {extraContent && <div>{extraContent}</div>}
//     </div>
//   </div>
// );

// const NotificationItem = ({
//   avatar,
//   name,
//   action,
//   details,
//   time,
//   extraContent,
// }) => (
//   <div className="flex gap-4 p-4 font-medium rounded-md bg-LightGrayishBlue3 text-textColor">
//     <div className="w-12">
//       <img className="w-full" src={avatar} alt="" />
//     </div>
//     <div>
//       <div>
//         <span className="font-bold text-VeryDarkBlue">{name}</span> {action}{" "}
//         <span className="font-bold text-textGray">{details}</span>
//       </div>
//       <span className="text-GrayishBlue">{time}</span>
//       {extraContent && <div>{extraContent}</div>}
//     </div>
//   </div>
// );
