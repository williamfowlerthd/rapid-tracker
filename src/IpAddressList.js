import React from 'react';
import IpAddress from './IpAddress';
import { Card } from 'semantic-ui-react';

const IpAddressList = ({ ipAddress, ipResponse }) => {
  const IpJsx = ipResponse ? (
    <IpAddress
      ipResponse={ipResponse}
      ipAddress={ipAddress}
    />) : null

  return (
    <div style={{ width: 300 }}>
      <Card className="ResultCard" style={{ width: "100%", marginTop: 25, backgroundColor: "red", borderRadius: 10 }}>
        {IpJsx}
      </Card>
    </div>
  );
}

export default IpAddressList;