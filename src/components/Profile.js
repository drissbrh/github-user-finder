import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Row, Input, Col } from "reactstrap";
import loupe from "./media/loupe.png";

import "./profile.css";
import axios from "axios";
import { ProfileInfo } from "./ProfileInfo";

export const Profile = () => {
  const [value, setValue] = useState("");
  const [git, setGit] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: "GET",
      url: `https://api.github.com/users/${value}`,
    };
    axios.request(options).then((res) => setGit(res.data));
    setValue("");
  };
  return (
    <>
      <h1>
        <strong>GitHub Profile Finder</strong>
      </h1>
      <form onSubmit={handleSubmit}>
        <Container className="mt-5 container1">
          <Row style={{ justifyContent: "center" }} className="mb-5">
            <div className="d-flex container2 mt-5">
              <img src={loupe} alt="." className="search" />
              <Input
                type="text"
                placeholder="Search for a GitHub user ..."
                className="inpu"
                onChange={handleChange}
              />
              <Button id="btnn" className="btn" color="dark">
                search
              </Button>
            </div>
            {git ? (
              <>
                <ProfileInfo git={git} />
              </>
            ) : (
              <div className="container4">
                <h4>Get the user details</h4>
              </div>
            )}
          </Row>
        </Container>
      </form>
    </>
  );
};
