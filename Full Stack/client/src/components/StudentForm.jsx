import { useState } from "react";
import { createStudent } from "../api/studentApi.js";

const EMPTY = { name: "", email: "", course: "", age: "" };

export default function StudentForm({ onAdded }) {
  const [form, setForm] = useState(EMPTY);
  const [message, setMessage] = useState(null); // { type: "success" | "error", text }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { status } = await createStudent(form);
      setMessage({ type: "success", text: `Student registered successfully! (HTTP ${status})` });
      setForm(EMPTY);
      onAdded();
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="course" placeholder="Course" value={form.course} onChange={handleChange} />
      <input name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} />
      <button type="submit">Register</button>
      {message && <p className={`msg ${message.type}`}>{message.text}</p>}
    </form>
  );
}
