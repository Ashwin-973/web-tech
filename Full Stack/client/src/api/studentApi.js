const BASE_URL = "/api/students";

// Fallback messages used when the server does not send one
const STATUS_MESSAGES = {
  400: "Bad request - please check the data you entered.",
  404: "Requested resource was not found.",
  409: "This student already exists.",
  500: "Server error - please try again later.",
};

async function request(options) {
  let res;
  try {
    res = await fetch(BASE_URL, options);
  } catch {
    // fetch only rejects on network failure (server down, no internet)
    throw new Error("Cannot reach the server. Is the backend running?");
  }

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const message = data?.message || STATUS_MESSAGES[res.status] || "Unexpected error occurred.";
    throw new Error(`${message} (HTTP ${res.status})`);
  }
  return { status: res.status, data };
}

// Q1 - GET
export const fetchStudents = () => request();

// Q2 - POST (student details sent as JSON body)
export const createStudent = (student) =>
  request({
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
