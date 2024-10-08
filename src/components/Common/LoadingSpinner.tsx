
import React from 'react';
import { ClipLoader } from 'react-spinners';

const LoadingSpinner: React.FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <ClipLoader loading={loading} size={50} color="#4F46E5" />
    </div>
  );
};

export default LoadingSpinner;
