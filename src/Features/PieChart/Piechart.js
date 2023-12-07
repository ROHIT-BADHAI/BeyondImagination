import React, { useEffect, useState } from "react";
import "../../Styles/index.css";
import Chart from "react-apexcharts";
import { useUserContext } from "../../Context/UserContext";
function Piechart() {
  const { user } = useUserContext();
  const [genderKeys, setGenderKeys] = useState(null);
  const [genderValues, setGenderValues] = useState(null);
  const [statusKeys,setStatusKeys]=useState(null);
  const [statusValues,setStatusValues]=useState(null);
  useEffect(() => {
    if (user) {
      //Gender
      let gender = new Map();
      for (let obj of user) {
        if (gender.has(obj.gender))
          gender.set(obj.gender, gender.get(obj.gender) + 1);
        else gender.set(obj.gender, 1);
      }
      setGenderKeys(Array.from(gender) );
      setGenderValues( Array.from(gender.values()) );

      //status
      let status = new Map();
      for (let obj of user) {
        if (status.has(obj.status))
          status.set(obj.status, status.get(obj.status) + 1);
        else status.set(obj.status, 1);
      }
      setStatusKeys(Array.from(status) );
      setStatusValues( Array.from(status.values()) );
    }
  }, [user]);
  return (
    <div style={{display:"flex",flexDirection:"column",marginLeft:"20%"}}>
      {genderKeys!==null && (
            <div className="pieChart">
              <Chart
                type="pie"
                width={800}
                height={270}
                series={genderValues}
                options={{
                  title: { text: `Gender (Total = ${user.length})` },
                  noData: { text: "No data found" },
                  labels: genderKeys,
                }}
              ></Chart>
            </div>
          )
      
        }



        {statusKeys!==null && (
            <div className="pieChart">
              <Chart
                type="pie"
                width={800}
                height={270}
                series={statusValues}
                options={{
                  title: { text: `User Status (Total = ${user.length})` },
                  noData: { text: "No Data Found" },
                  labels: statusKeys,
                }}
              ></Chart>
            </div>
          )
      
        }
    </div>
  );
}

export default Piechart;
