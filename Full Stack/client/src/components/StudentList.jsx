import { useEffect, useState } from "react";
import { fetchStudents } from "../api/studentApi.js";

export default function StudentList({ refreshKey }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    fetchStudents()
      .then(({ data }) => setStudents(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [refreshKey]); // re-fetch whenever a new student is added

  if (loading) return <p>Loading students...</p>;
  if (error) return <p className="msg error">{error}</p>;
  if (students.length === 0) return <p>No students found.</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Course</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.name}</td>
            <td>{s.email}</td>
            <td>{s.course}</td>
            <td>{s.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
