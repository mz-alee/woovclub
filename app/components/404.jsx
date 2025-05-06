"use client";
import React, { useEffect, useRef } from "react";
// import './HomePage.css';
import "./404.css";
import { toast, ToastContainer } from "react-toastify";
import Link from 'next/link';
import { poppins } from './Font';
const NotFound = () => {
  useEffect(() => {
    toast("Error 404: Brain not found... oh wait, page not found!");
    setTimeout(() => {
      
      toast("Oops! This page ghosted us.");
    }, 10000);
    
  }, []);
  return (
    <>
      <ToastContainer />
      <section class="page_404">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 ">
              <div class={`col-sm-10 col-sm-offset-1  text-center `}>
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>

                <div class={`contant_box_404 ${poppins.className} italic justify-center items-center flex flex-col gap-2`}>
                  <h3 class="h2">Look like you're lost</h3>

                  <p>the page you are looking for not avaible!</p>

                  <Link className='hover:bg-blue-500 transition-all w-fit bg-[#45b7db] rounded-2xl p-2' href="/" class="link_404">
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
