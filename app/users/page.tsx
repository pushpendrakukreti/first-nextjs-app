import React from "react";
import styles from "./page.module.css";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users',
    // { cache: 'no-store' }
    { next: { revalidate: 10 } }
  );
  const users: User[] = await res.json();

  return (
    <>
      <h1 className="mx-4 my-6 text-3xl font-bold">Users</h1>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <table className={`table table-zebra ${styles.tableUser}`}>
        <thead>
          <tr className="text-xl">
            <th>User Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
