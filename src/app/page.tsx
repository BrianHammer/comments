"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-very-light-gray w-full h-screen">
      {/* Container */}
      <div className="w-full flex flex-col gap-6 px-6 py-8">
        {/** Card */}
        <div className="bg-white p-4 flex flex-col gap-4 rounded-lg">
          {/** Header */}
          <div className="flex flex-row items-center gap-4 text-lg">
            <Image
              alt="pfp"
              height={40}
              width={40}
              src="/images/avatars/image-amyrobson.png"
            />

            <h4 className="font-heavy text-dark-blue">amyrobson</h4>

            <p className="">1 month ago</p>
          </div>

          {/** Paragraph */}
          <p className="font-light text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
            magni veniam quis dolore quasi exercitationem aut. Placeat, beatae
            corrupti, error quam sapiente.
          </p>

          {/** Footer buttons */}
          <div className="flex flex-row justify-between items-center">
            {/** Counter button */}
            <div className="flex flex-row h-10 w-24 rounded-lg bg-very-light-gray text-light-grayish-blue">
              <button
                onClick={() => console.log("Increment me!")}
                className="h-full w-full"
              >
                +
              </button>
              {/** This is used to center the text */}
              <span className="h-full w-full text-center flex justify-center items-center">
                <span className="text-moderate-blue">12</span>
              </span>
              <button
                onClick={() => console.log("Decrement me!")}
                className="h-full w-full"
              >
                -
              </button>
            </div>
            {/** Reply button
             * TODO: Export icons as a component
             *
             */}
            <button className="flex flex-row gap-2 justify-center items-center text-moderate-blue">
              <span>
                <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                    fill="#5357B6"
                  />
                </svg>
              </span>
              <span>Reply</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
