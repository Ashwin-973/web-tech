import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // needed for react-bootstrap styling
import CurrencyConverter from "./components/CurrencyConverter";
import PasswordValidator from "./components/PasswordValidator";
import StudentProfileCard from "./components/StudentProfileCard";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 space-y-10">
      <h1 className="text-3xl font-bold text-center text-slate-800">
        React Review — Q2, Q4, Q6
      </h1>

      <section>
        <CurrencyConverter />
      </section>

      <section>
        <PasswordValidator />
      </section>

      <section>
        <section>
      <StudentProfileCard
        student={{
          name: "Christopher Waltz",
          rollNumber: "ABC2023045",
          department: "Films",
          year: "20th year",
          email: "landa@ingloriousbasterds.com",
          avatarUrl: "https://i.pinimg.com/736x/ee/a0/52/eea052d9ce1d8b8d4e6c370d38b5864e.jpg",
          skills: ["interrogation",""],
        }}
      />
</section>
      </section>
    </div>
  );
}

export default App;