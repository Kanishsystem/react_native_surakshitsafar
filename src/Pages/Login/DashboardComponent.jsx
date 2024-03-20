import React from "react";
import Dashboard from "../PermitHolder/Dashboard";
import { MONITORING_PERMIT } from "../../Services/Imageservices";

const DashboardComponent = () => {
  const image1 = MONITORING_PERMIT;

  const data = [
    {
      Labelone: "yuva",
      Labeltwo: "rani",
      Name: "User Name",
      Holder: "senso_permit@gmail.com",
      Header: "Features",
      imagelink: image1,
      imagename: "car",
    },
    {
        
        Name: "User Name",
        Holder: "senso_permit@gmail.com",
        
        imagelink: image1,
        imagename: "car",
      },
    //   { Name: "First Name", Holder: "sensom permit" },
    //   { Name: "Email", Holder: "senso_permit@gmail.com" },
    //   { Name: "Contact No", Holder: "6350529929" },
  ];
  return (
    <>
      {data.map((datas, index) => (
        <Dashboard
          Labelone={datas.Labelone}
          Labeltwo={datas.Labeltwo}
          Title={datas.Name}
          Description={datas.Holder}
          Header={datas.Header}
          imagelink={datas.imagelink}
          imagename={datas.imagename}
        />
      ))}
    </>
  );
};

export default DashboardComponent;
