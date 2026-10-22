import { useState } from "react";
import StudentForm from "./components/StudentForm.jsx";
import StudentList from "./components/StudentList.jsx";

export default function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="container">
      <h1>Student Management</h1>

      <h2>Register Student (POST)</h2>
      <StudentForm onAdded={() => setRefreshKey((k) => k + 1)} />

      <h2>Student List (GET)</h2>
      <StudentList refreshKey={refreshKey} />
    </div>
  );
}
