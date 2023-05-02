import Form from "../components/form/Form";
import Coba from "../components/form/Coba";
import Navbar from "../components/navbar/Navbar";
import Topbar from "../components/topbar/Topbar";


import React from "react";
import Bottom from "../components/bottom/Bottom";

export default function Home() {

  return (
    <div>
        <Topbar />
        <Navbar />
        <Form />
        <Bottom />
    </div>
  )
}