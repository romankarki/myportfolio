import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//import emailjs from "emailjs-com";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#008080", //your color
    },
  },
});
function Form() {
  const [mail, setMail] = useState({
    template_params: {
      reply_to: "randomguy",
      from_name: "randomguy",
      to_name: "roman",
      message_html: "hi this is the message from the state ",
    },
    show: false,
    valid: false,
  });

  const onClickOfButton = (event) => {
    event.preventDefault();
    console.log("clicked");
    const service_id = "default_service";
    const template_id = "template_C21ekA58";
    setMail({ show: true });
    // console.log(window.emailjs);
    window.emailjs.send(service_id, template_id, mail.template_params);
  };

  const inputChangedHandler = (event, inputIdentifier) => {
    console.log(inputIdentifier);
    const updatedForm = {
      ...mail.template_params,
    };
    let updatedElement = {
      ...updatedForm[inputIdentifier],
    };
    updatedElement = event.target.value;
    updatedForm[inputIdentifier] = updatedElement;
    setMail({ template_params: updatedForm, show: false });
  };
  let todisplay;
  {
    mail.show
      ? (todisplay = (
          <>
            <h1 style={{ color: "teal", padding: "3rem 3rem" }}>Thank you!</h1>
            <h1
              style={{ color: "teal", marginTop: "1rem", paddingLeft: "3rem" }}
            >
              I'll respond you at my earliest convenience
            </h1>
          </>
        ))
      : (todisplay = (
          <>
            <h2 style={{ textAlign: "center" }}>
              <span style={{ color: "teal" }}>Contact</span> Me
            </h2>

            <div className="form">
              <ThemeProvider theme={theme}>
                <TextField
                  label="Your Name Here"
                  variant="outlined"
                  fullWidth
                  style={{ borderColor: "teal !important" }}
                  margin="normal"
                  onChange={(event) => inputChangedHandler(event, "from_name")}
                />
                <TextField
                  label="Your Email Here"
                  variant="outlined"
                  fullWidth
                  style={{ borderColor: "teal !important" }}
                  margin="normal"
                  onChange={(event) => inputChangedHandler(event, "reply_to")}
                />

                <TextField
                  variant="outlined"
                  rows="4"
                  fullWidth
                  label="Your Message Here"
                  placeholder="Your Message"
                  multiline
                  margin="normal"
                  color="primary"
                  onChange={(event) =>
                    inputChangedHandler(event, "message_html")
                  }
                />
              </ThemeProvider>

              <Button
                variant="contained"
                style={{
                  backgroundColor: "teal",
                  color: "white",
                  width: "20%",
                  marginTop: "1rem",
                }}
                onClick={(event) => {
                  onClickOfButton(event);
                }}
              >
                Submit
              </Button>
            </div>
          </>
        ));
  }
  return <div className="contact__form">{todisplay}</div>;
}

export default Form;
