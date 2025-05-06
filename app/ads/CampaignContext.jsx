"use client"
import React, { createContext, useContext, useState } from 'react';

export const CampaignContext= createContext();

export const useCampaignContext = () => {
  // idr ham context s data get kr rhy h or ye aik custom hook h jisko ham hr component mn use kr payn gy 
  return useContext(CampaignContext);
};

export const CampaingProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  
  const updateFormData = (data) => {
    setFormData(prevData => ({ ...prevData, ...data }));
    // console.log("context data",data);
    
  };
  const name = 'ali'
  return (
    <CampaignContext.Provider value={{ name,formData, updateFormData }}>
      {children}
    </CampaignContext.Provider>
  );
};
