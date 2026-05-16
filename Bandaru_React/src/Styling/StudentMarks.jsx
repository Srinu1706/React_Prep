import React from "react";

const StudentMarks = () => {
  const students = [
    {
      name: "Ravi",
      marks: 90,
      grade: "A",
    },
    {
      name: "Sita",
      marks: 28,
      grade: "F",
    },
    {
      name: "Arjun",
      marks: 75,
      grade: "B",
    },
  ];

  let cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    margin: "10px",
    width: "200px",
    textAlign: "center",
  };

  let containerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  };
  return (
    <div style={containerStyle}>
      {students.map((student, index) => (
        <div style={cardStyle} key={index}>
          <h3>{student.name}</h3>
          <p style={{ color: student.marks >= 35 ? "green" : "red" }}>
            Marks: {student.marks}
          </p>
          <p>{student.marks >= 35 ? "Pass" : "Fail"}</p>
          <p>Grade: {student.grade}</p>
          <p >{student.marks >85 ?"Distinction":student.marks>50?"Avergae":"Needs To Improve"}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentMarks;
