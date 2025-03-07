import React from "react";
import { MdClose } from "react-icons/md";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  title?: any;
  children: React.ReactNode;
  icon?: any;
  footer?: React.ReactNode;
  bg?: string;
  mx?: string;
  header?: React.ReactNode;
  noLine?: boolean;
  mt?: string;
}

const Modal = ({
  isOpen = false,
  onClose,
  title,
  footer,
  children,
  bg,
  mx,
  header,
  noLine,
  mt,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="inset-0 w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto flex items-center justify-center bg-black bg-opacity-70">
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-md"
        onClick={onClose}
      />
      <div
        className={`relative ${
          bg ?? "bg-white"
        } rounded-2xl shadow-lg w-full sm:w-[45rem] max-w-5xl mx-6`}
      >
        <div className="flex justify-between items-center p-9">
          <div>
            <h1 className="text-3xl font-semibold">{title}</h1>
            <div>{header}</div>
          </div>
          <MdClose
            color="black"
            fontSize={"2rem"}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={onClose}
          />
        </div>
        {!noLine && <hr />}
        <div
          className={`${mt || "mt-7"} mb-12 ${
            mx || "mx-6 lg:mx-10"
          } flex flex-col`}
        >
          {children}
        </div>
        {footer && (
          <>
            <hr />
            <div className={`my-7 ${mx || "mx-6 lg:mx-10"}`}>{footer}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
