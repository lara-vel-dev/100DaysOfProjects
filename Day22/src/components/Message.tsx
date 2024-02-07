import { auth } from "../services/firebase";

const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `absolute mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Message = (props : any) => {
  const messageClass = 
  props.message.uid === auth.currentUser.uid
  ? `${style.sent}`
  : `${style.received}`

  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <p className={style.name}>{props.message.name}</p>
        <p>{props.message.text}</p>
      </div>
    </div>
  );
};


export default Message;
