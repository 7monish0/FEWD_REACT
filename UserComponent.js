import React, { useEffect, useState } from "react";
const UserComponent = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("Component Mounted");
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
        console.log("User data loaded");
      });
    return () => {
      console.log("Component Unmounted");
    };
  }, []);
  useEffect(() => {
    if (user) {
      console.log("User state updated");
    }
  }, [user]);
  return (
    <div>
      <h2>User Info</h2>
      {loading ? <p>Loading...</p> : <p>Name: {user.name}</p>}
    </div>
  );
};

export default UserComponent;
