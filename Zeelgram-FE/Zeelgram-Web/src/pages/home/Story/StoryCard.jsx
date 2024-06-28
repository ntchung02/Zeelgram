import React, { useState, useEffect } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const StoryCard = ({ users, duration }) => {
  const [progress, setProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 8;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 100 / duration
      );
    }, duration * 10);

    return () => clearInterval(interval);
  }, [duration]);

  const totalPages = Math.ceil(users.length / pageSize);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * pageSize;
  const endIndex = Math.min((currentPage + 1) * pageSize, users.length);
  const visibleUsers = users.slice(startIndex, endIndex);

  return (
    <>
      <div className="w-full max-w-screen-lg rounded-xl">
        <div className="p-0 relative">
          <div className="flex items-center justify-between p-4 overflow-x-auto">
            {visibleUsers.map((u) => (
              <div
                key={u.id}
                className="flex-shrink-0 flex flex-col items-center gap-1.5 text-center"
              >
                <button className="rounded-full w-12 h-12 p-0">
                  <img
                    alt="@shadcn"
                    className="rounded-full aspect-square object-cover border-2 border-white border-opacity-25"
                    height={48}
                    src={u.profilePicture}
                    width={48}
                  />
                  <span className="sr-only">Add to friends</span>
                </button>
                <span className="text-xs font-medium leading-none">
                  {u.username}
                </span>
              </div>
            ))}
            {totalPages > 1 && (
              <div className="">
                <button
                  className="text-blue-500 absolute top-0  bottom-0 left-0 items-center"
                  onClick={handlePrevPage}
                  disabled={currentPage === 0}
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="text-blue-500 absolute top-0 bottom-0 right-0 items-center"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages - 1}
                >
                  <FaChevronRight />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryCard;
