import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/header";
import axios from "axios";
import { BACKEND_URL } from "../../myconstant";
import About from "../components/About";
import Recomendations from "../components/Recomendations";

const Profile = () => {
  const [data, setData] = useState([]); // store data arrived from get request as OBJECT
  const [info, setInfo] = useState([]);
  const [serviceList, setServiceList] = useState([]); // for mapping services in list
  const [benifits, setBenifits] = useState([]); // for mapping benefits in list
  const { name } = useParams(); // get name from URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}`); // Fetch the json data from json server
        const responseData = response.data.charteredAccountants;
        setData(responseData); // set data

        // Find the CA info named - (name)
        const CAInfo = responseData.find(
          (accountant) =>
            accountant.name.toLowerCase() === name.toLocaleLowerCase()
        );

        if (CAInfo && CAInfo.about) {
          setInfo(CAInfo); // set info of CA
          setServiceList(CAInfo.about.services); // Set services array
          setBenifits(CAInfo.about.benefits); // set benefits array
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [name]);

  if (!info) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      {info && (
        <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-32 font-poppins">
          <About />
          <Recomendations />
        </div>
      )}
    </div>
  );
};

export default Profile;
