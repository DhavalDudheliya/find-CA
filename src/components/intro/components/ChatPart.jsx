import React from "react";

const ChatPart = () => {
  return (
    <>
      <div className="flex-1">
        <div className="flex flex-row justify-end">
          <div className="flex flex-col w-fit text-[9px] md:text-[14px] lg:text-[14px]">
            <div className="flex justify-end">
              <div className="font-open-sans rounded-t-mini rounded-br-10xs rounded-bl-mini bg-fs-chat-banner-purple py-2 px-4 w-fit my-1">
                Hey, check out loreumipsum services
              </div>
            </div>
            <div className="flex justify-end">
              <div className="font-open-sans rounded-t-mini rounded-br-10xs rounded-bl-mini bg-fs-chat-banner-purple py-2 px-4 w-fit my-1">
                I learned from their videos, got my first job.
              </div>
            </div>
            <div className="flex justify-end">
              <div className="font-open-sans rounded-t-mini rounded-br-10xs rounded-bl-mini bg-fs-chat-banner-purple py-2 px-4 w-fit my-1">
                You won't be disappointed with their services.
              </div>
            </div>
            <div className="flex justify-end">
              <div className="font-open-sans rounded-t-mini rounded-br-10xs rounded-bl-mini bg-fs-chat-banner-blue py-2 px-4 w-fit my-1 mt-6">
                I got a perfect analysis report from them too
              </div>
            </div>
            <div className="flex justify-end">
              <div className="font-open-sans rounded-t-mini rounded-br-10xs rounded-bl-mini bg-fs-chat-banner-blue py-2 px-4 w-fit mt-1">
                Oh, that's great.
              </div>
            </div>
            <div className="">
              <img
                className="h-56 md:h-72 lg:h-96 overflow-hidden max-h-full object-cover"
                alt=""
                src="/find-CA/teacher@2x.png"
              />
            </div>
          </div>
          <div className="">
            <img
              className="h-56 md:h-72 lg:h-96 overflow-hidden max-h-full object-cover"
              alt=""
              src="/find-CA/student@2x.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPart;
