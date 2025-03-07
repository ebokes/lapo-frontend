import Image from "next/image";

interface ActionButtonType {
  id: number;
  icon: any;
  name: string;
  bg: string;
  onClick?: () => void;
}
const ActionButtons = ({ icon, name, bg, onClick }: ActionButtonType) => {
  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer ${bg} gap-4 py-4 items-center px-10 rounded-[4px]`}
    >
      <Image
        src={icon}
        alt="icon"
        width={50}
        height={50}
        style={{ width: "3rem" }}
      />
      <p className="text-white1">{name}</p>
    </div>
  );
};
export default ActionButtons;
