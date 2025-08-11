"use client";
import React from 'react';
import { useSelector } from 'react-redux';
import LoadingSpinner from './LoadingSpinner';

const PageLoader = () => {
  const { pageLoading, pageLoaderText } = useSelector(state => state.page);

  if (!pageLoading) return null;

  return (
    <LoadingSpinner 
      fullScreen={true}
      text={pageLoaderText || "Loading..."}
      size="lg"
    />
  );
};

export default PageLoader;
