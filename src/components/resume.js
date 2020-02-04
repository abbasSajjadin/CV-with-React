import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import logo from "../img/abbasOfficial.jpg";


class Resume extends Component {
  render() {
    return (
      <div className="container">
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={logo}
                alt="noPic"
                style={{ height: "200px", width: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Abbas Sajjadian</h2>
            <h4 style={{ color: "grey" }}>Front End Developer</h4>
            <hr style={{ borderTop: "3px solid #8b0000", width: "50%" }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <hr style={{ borderTop: "3px solid #8b0000", width: "50%" }} />
            <h5>Address</h5>
            <p>Via xxx xxx, 16</p>
            <h5>Phone</h5>
            <p>+38 338 xxx xxxx</p>
            <h5>Email</h5>
            <p>abbas.sajjadian@gmail.com</p>
            <hr style={{ borderTop: "3px solid #8b0000", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2010}
              endYear={2015}
              major="Computer Software Engineering"
              schoolName="Pishtazan"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Education
              startYear={2016}
              endYear="precent"
              major="Computer Software Enginnering"
              schoolName="Politecnico di Torino"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: "3px solid #ff726f" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2015}
              endYear={2016}
              jobName="Front End Developer - Part-time"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Front End Develoepr - Part-time"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: "3px solid #ff726f" }} />
            <h2>Skills</h2>
            <Skills skill="Javascript" progress={80} />
            <Skills skill="HTML/CSS" progress={60} />
            <Skills skill="NodeJS" progress={40} />
            <Skills skill="React" progress={20} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
