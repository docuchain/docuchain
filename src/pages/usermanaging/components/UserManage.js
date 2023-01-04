import React, { useEffect, useState } from "react";
const UserManage = () => {
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    try {
      const res = await fetch(
        "https://docuchain-72799-default-rtdb.asia-southeast1.firebasedatabase.app/arr.json"
      );
      const result = await res.json();
      setData([...result]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <div>hello usermanage</div>
      <table>
        <thead>
          <tr>
            <th>authority</th>
            <th>email</th>
            <th>gender</th>
            <th>Ipaddress</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element) => (
            <tr key={element.id}>
              <td>{element.authorrity}</td>
              <td>{element.email}</td>
              <td>{element.gender}</td>
              <td>{element.ip_address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManage;
