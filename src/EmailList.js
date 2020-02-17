import React from 'react';
import Email from './Email';
import { Card } from 'semantic-ui-react';

const EmailList = ({ email, emailResponse }) => {
  const EmailJsx = emailResponse ? (
    <Email
      emailResponse={emailResponse}
      email={email}
    />) : null

  return (
    <div style={{ width: 300 }}>
      <Card className="ResultCard" style={{ width: "100%", marginTop: 25, backgroundColor: "green", borderRadius: 10 }}>
        {EmailJsx}
      </Card>
    </div>
  );
}

export default EmailList;