import React from 'react';
import './App.css';

const IpAddress = (props) => {
  console.log(props)
  return (
    <div className="email-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "white" }}>
      <h2 style={{ color: "white", textAlign: "center", marginTop: 10, marginBottom: 20 }}>{props.ipAddress}</h2>
      <p>organisation: {props.ipResponse.asn.organisation}</p>

      <p>area: {props.ipResponse.area.name == null ? "Not Available" : props.ipResponse.area.name}</p>

      <p>city: {props.ipResponse.city.name == null ? "Not Available" : props.ipResponse.city.name}</p>

      <p>population: {props.ipResponse.city.population == null ? "Not Available" : props.ipResponse.city.population}</p>

      <p>continent: {props.ipResponse.continent.name}</p>

      <p>latitude: {props.ipResponse.location.latitude}</p>

      <p>longitude: {props.ipResponse.location.longitude}</p>

      <p>is_crawler: {props.ipResponse.security.is_crawler.toString()}</p>

      <p>is_proxy: {props.ipResponse.security.is_proxy.toString()} </p>

      <p>is_tor: {props.ipResponse.security.is_tor.toString()}</p>

      <p style={{ marginBottom: 20 }}>is_thread: {props.ipResponse.security.is_thread.toString()}</p>

    </div>
  );
}


export default IpAddress;