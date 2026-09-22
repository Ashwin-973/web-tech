import React from "react";
import { Card, Badge, ListGroup, Button } from "react-bootstrap";

/**
 * StudentProfileCard
 * Built with react-bootstrap (Card, Badge, ListGroup, Button).
 * Accepts student data as props so it can be reused for any student.
 */
function StudentProfileCard({ student }) {
  const {
    name,
    rollNumber,
    department,
    year,
    email,
    avatarUrl,
    skills,
  } = student;

  return (
    <Card style={{ width: "22rem" }} className="mx-auto shadow-sm">
      <Card.Img
        variant="top"
        src={avatarUrl}
        alt={`${name}'s avatar`}
        style={{ height: "220px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
          {name}
          <Badge bg="primary">{year}</Badge>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {department}
        </Card.Subtitle>
        <Card.Text className="mb-2">
          <strong>Roll No:</strong> {rollNumber}
          <br />
          <strong>Email:</strong> {email}
        </Card.Text>
      </Card.Body>

      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <strong>Skills</strong>
          <div className="mt-2 d-flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} bg="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </ListGroup.Item>
      </ListGroup>

      <Card.Body className="text-center">
        <Button variant="primary" href={`mailto:${email}`}>
          Contact
        </Button>
      </Card.Body>
    </Card>
  );
}

// Default sample data so this component works standalone too.
StudentProfileCard.defaultProps = {
  student: {
    name: "Aditi Sharma",
    rollNumber: "SNU2023045",
    department: "Computer Science & Engineering",
    year: "3rd Year",
    email: "aditi.sharma@snu.edu.in",
    avatarUrl: "https://placehold.co/400x300?text=Student+Photo",
    skills: ["React", "Node.js", "Python", "SQL"],
  },
};

export default StudentProfileCard;
