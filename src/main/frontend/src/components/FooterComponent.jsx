import React, { Component } from "react";
import { Paper } from "@mui/material";

export default class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Paper elevation={3}>
        <div>
          <footer className="footer" posision="fixed">
            <span className="text-muted">
              {" "}
              All Rights Reserved 2021 - Phillip Swart 32161506{" "}
            </span>
          </footer>
        </div>
      </Paper>
    );
  }
}

//Maybe cool footer idea???
// import React, { useState, useEffect } from "react";

// import { Navbar, Container, Col } from "react-bootstrap";

// const Footer = () => {
//   const [fullYear, setFullYear] = useState();

//   useEffect(() => {
//     setFullYear(new Date().getFullYear());
//   }, [fullYear]);

//   return (
//     <Navbar fixed="bottom" bg="dark" variant="dark">
//       <Container>
//         <Col lg={12} className="text-center text-muted">
//           <div>
//             {fullYear}-{fullYear + 1}, All Rights Reserved by Almighty Java
//           </div>
//         </Col>
//       </Container>
//     </Navbar>
//   );
// };

// export default Footer;
