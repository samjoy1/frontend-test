"use client";
import Header from "../../components/Header"
import BottomHalf from "../../components/BottomHalf";
import Footer from "../../components/Footer";
import FindAgreements from "../../components/FindAgreements";
import SeeMore from "../../components/SeeMore";

export default function LandingPage() {
  return (
    <>
    <Header />    
      <main
        className="min-h-screen bg-white text-gray-900 px-6 py-4 max-w-md mx-auto"
        style={{ fontFamily: "'TikTok Sans', sans-serif" }}
      >
        <FindAgreements />
        <SeeMore />
        <BottomHalf />
      </main>
      <Footer />
    </>
  );
}
