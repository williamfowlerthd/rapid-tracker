import React, { useState } from 'react';
import './App.css';
import { Form, Button } from 'semantic-ui-react';
import EmailList from './EmailList';
import IpAddressList from './IpAddressList';
import NavBar from './NavBar';
const axios = require('axios');


const App = () => {
  const [email, setEmail] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [emailResponse, setEmailResponse] = useState();
  const [ipResponse, setIpResponse] = useState();

  async function verifyEmail() {
    const response = await axios({
      "method": "GET",
      "url": "https://mailcheck.p.rapidapi.com/",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "mailcheck.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_EMAIL_API_KEY,
      },
      "params": {
        "disable_test_connection": "false",
        "domain": email
      }
    })
    setEmailResponse(response.data)
  }

  async function geoLocateIp() {
    const response = await axios({
      "method": "GET",
      "url": "https://ip-geo-location.p.rapidapi.com/ip/" + ipAddress,
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "ip-geo-location.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_EMAIL_API_KEY,
      }, "params": {
        "format": "json"
      }
    });
    setIpResponse(response.data);
  }



  const captureEmail = (event) => { setEmail(event.target.value.trim()) }
  const captureIpAddress = (event) => { setIpAddress(event.target.value.trim()) }

  const submitClick = (e) => {
    e.preventDefault();
    verifyEmail();
  }

  const submitClick2 = (e) => {
    e.preventDefault();
    geoLocateIp();
  }

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <NavBar />
      <Form style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: 150 }}>
        <input style={{ width: "15em", borderRadius: 5, height: 57, marginBottom: 10, marginRight: 5, fontSize: 18 }}
          type="text"
          placeholder="Verify Email"
          value={email}
          onChange={captureEmail} />
        <Button className="HomeSearchButton"
          value="Submit"
          onClick={submitClick}
          style={{ padding: "10px 10px", color: "green" }}>
          <span style={{ fontSize: 16, }}>Search</span>
        </Button>
      </Form>
      <Form style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: 25 }}>
        <input style={{ width: "15em", borderRadius: 5, height: 57, marginBottom: 10, marginRight: 5, fontSize: 18 }}
          type='text'
          placeholder='Geolocate IP'
          onChange={captureIpAddress} />
        <Button className="HomeSearchButton"
          style={{ padding: "10px 10px", color: "red" }}
          type="submit"
          value="Submit"
          onClick={submitClick2} >
          <span style={{ fontSize: 16, }}>Search</span>
        </Button>
      </Form>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: 25 }}>
        <EmailList
          emailResponse={emailResponse}
          email={email}
        />
        <IpAddressList
          ipResponse={ipResponse}
          ipAddress={ipAddress}
        />
      </div>
    </div>
  );
}

export default App;
