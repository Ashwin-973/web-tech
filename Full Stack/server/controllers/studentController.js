import students from "../data/students.js";

// GET /api/students  ->  200 OK + array of students
export const getStudents = (req, res) => {
  res.status(200).json(students);
};

// POST /api/students  ->  201 Created | 400 Bad Request | 409 Conflict
export const addStudent = (req, res) => {
  const { name, email, course, age } = req.body ?? {};

  if (!name || !email || !course || !age) {
    return res.status(400).json({ message: "All fields (name, email, course, age) are required." });
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ message: "Please provide a valid email address." });
  }
  if (!Number.isInteger(Number(age)) || Number(age) < 15 || Number(age) > 100) {
    return res.status(400).json({ message: "Age must be a whole number between 15 and 100." });
  }
  if (students.some((s) => s.email.toLowerCase() === email.toLowerCase())) {
    return res.status(409).json({ message: "A student with this email already exists." });
  }

  const student = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name: name.trim(),
    email: email.trim(),
    course: course.trim(),
    age: Number(age),
  };
  students.push(student);
  res.status(201).json(student);
};
