import React from 'react';
import './App.css';

const Email = (props) => {
  console.log(props)
  return (
    <div className="email-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "white" }}>
      <h2 style={{ color: "white", textAlign: "center", marginTop: 10, marginBottom: 20 }}>{props.email}</h2>
      <p>valid: {props.emailResponse.valid.toString()}</p>

      <p>block: {props.emailResponse.block.toString()}</p>

      <p>disposable: {props.emailResponse.disposable.toString()}</p>

      <p>domain: {props.emailResponse.domain}</p>

      <p>text: {props.emailResponse.text}</p>

      <p>reason: {props.emailResponse.reason === null ? ' ' : props.emailResponse.reason}</p>

      <p>risk: {props.emailResponse.risk}</p>

      <p>mx_host: {props.emailResponse.mx_host}</p>

      <p style={{ textAlign: "center" }}>{props.emailResponse.mx_info}</p>

      <p style={{ marginBottom: 20 }}>mx_ip: {props.emailResponse.mx_ip}</p>

    </div>
  );
};


export default Email;


