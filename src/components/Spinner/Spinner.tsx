import React from 'react';
import {useAppSelector} from "../../app/hooks";

const Spinner = () => {
    const isLoading = useAppSelector(state => loading)
  return (
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spinner;