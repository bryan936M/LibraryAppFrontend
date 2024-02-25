import React from 'react'
import BookListing from "./BookListing";
import ReadingList from "./ReadingList";

type Props = {};

const Main = (props: Props) => {
  return (
    <div className="flex-1 md:w-6/12 md:p-4 bg-white rounded-xl">
      <div className="flex flex-col w-full">
        <BookListing />
        <ReadingList />
      </div>
    </div>
  );
};

export default Main