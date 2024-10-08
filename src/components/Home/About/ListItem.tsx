import React from 'react';

interface ListItemProps {
  text: string;
}

const ListItem: React.FC<ListItemProps> = ({ text }) => {
  return (
    <li className="flex items-center space-x-2 mt-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
      <span className="text-gray-500">{text}</span>
    </li>
  );
};

export default ListItem;
