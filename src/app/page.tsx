"use client";
import React, { useEffect, useState } from 'react';
import Home from '../components/Home/Home';
import LoadingSpinner from '../components/Common/LoadingSpinner';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return <LoadingSpinner loading={loading} />;
  }

  return (
    <div>
      <Home />
    </div>
  );
};

export default HomePage;
