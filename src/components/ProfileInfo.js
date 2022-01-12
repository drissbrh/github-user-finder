import React from "react";

import pin from "./media/pin.png";
import link from "./media/link.png";
import twitter from "./media/twitter.png";
import house from "./media/house.png";
import { Container, Row } from "reactstrap";

export const ProfileInfo = ({ git }) => {
  return (
    <>
      <Container className="d-flex mt-5 container21">
        <img src={git.avatar_url} alt="" id="profile" />
        <Row>
          <strong>
            <p>{git.login}</p>
          </strong>
          <p style={{ color: "#ccc" }}>@{git.login}</p>
          <p>Joined {git.created_at.slice(0, 10).replace(/-/g, "/")}</p>
        </Row>
      </Container>
      <div className="myBio mt-4 mb-3">
        <p
          style={{
            justifyContent: "left",
          }}
          className="biog"
        >
          "{git.bio}"
        </p>
      </div>
      <div className="d-flex container3">
        <section>
          <p>repos</p>
          <strong>{git.public_repos}</strong>
        </section>
        <section>
          <p>Followers</p>
          <strong>{git.followers}</strong>
        </section>
        <section>
          <p>Following</p>
          <strong>{git.following}</strong>
        </section>
      </div>

      <div className="mt-5 mb-4">
        <section className="d-flex links">
          <img src={pin} className="icon" alt="" />
          <p>{git.location}</p>
        </section>
        <section className="d-flex links">
          <img src={link} className="icon" alt="" />
          <p>{git.blog}</p>
        </section>
        <section className="d-flex links">
          <img src={twitter} className="icon" alt="" />
          <p>{git.twitter_username}</p>
        </section>
        <section className="d-flex links">
          <img src={house} className="icon" alt="" />
          <p>{git.company}</p>
        </section>
      </div>
    </>
  );
};
