"use client";

import React from "react";
import Link from "next/link";
import Head from "next/head";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Footer from "../(Footer)/Footer";

function AboutPage() {
  const today = new Date().toDateString();

  return (
    <>
      <Head>
        <title>About - Sahul Hameed</title>
        <meta
          name="description"
          content="Sahul Hameed is a passionate software engineer specializing in Java, Python, Spring Boot, and backend systems."
        />
      </Head>

      <div className="pt-[65px] w-auto h-auto text-white m-auto flex flex-col items-center p-[10px]">
        {/* Top Navigation */}
        <div className="w-full 1250:w-[1210px] absolute min-h-[70px] flex flex-row items-center justify-start px-[10px] 600:px-[15px] 1250:px-0">
          <Link
            href="/"
            className="flex flex-row items-center justify-start text-slate-200 hover:text-sky-500 cursor-pointer"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-[5px]" />
            <span className="text-[14px]">Back</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="w-full 1250:w-[900px] h-auto m-auto mt-[25px] pb-[100px]">
          <div className="text-gray-400 text-[14px]">{today}</div>

          {/* Profile Section */}
          <div className="flex items-center gap-4 my-5 animate-slowfade">
            <img
              src="/my-photo.jpg"
              alt="Sahul Hameed"
              className="w-24 h-24 rounded-full border-2 border-sky-500"
            />
            <div className="text-slate-200 font-bold text-[24px] md:text-[32px]">
              Hey ☘️, I&apos;m Sahul Hameed
            </div>
          </div>

          {/* Bio */}
          <div className="text-gray-300 text-[16px] animate-slideright leading-relaxed">
            Hi, I’m Sahul Hameed, a passionate and self-driven software engineer
            with a strong foundation in Python, Java, Data Structures & Algorithms,
            and backend development. With a background in Computer Science and
            multiple academic credentials (B.Sc CS, BCA, Diploma in Computer Engineering),
            I’m focused on building robust, scalable applications using technologies
            like Spring Boot, REST APIs, and microservices.
            <br />
            <br />
            I am committed to continuous learning, solving real-world problems,
            and contributing to meaningful, high-impact projects. I enjoy turning
            complex challenges into clean, efficient solutions — and I love coding.
            <br />
            <br />
            Beyond tech, I believe in strong relationships, lifelong growth,
            and a balanced approach to personal and professional development.
          </div>

          {/* Skills */}
          <div className="mt-6 text-sm text-gray-300">
            <strong className="text-sky-400">Skills:</strong> Java, Spring Boot, Python, SQL, REST APIs, DSA, Git, Docker
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
