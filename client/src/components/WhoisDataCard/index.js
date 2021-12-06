import React from "react";
import { Col } from 'react-bootstrap';
import './index.css';

function WhoisDataCard(props) {
  const { whoisData } = props;

  const whois = whoisData.WhoisRecord;
  const error = whoisData.ErrorMessage;
  
  if (error) {
    return (
      <Col>
        <h5 className="error">{`${error.msg}`}</h5>
      </Col>
    )
  }

  if(whois) {
    return(
      <Col className="results">
        {whois.domainName &&
          <h5><strong>Domain Name:</strong> {`${whois.domainName}`} </h5>
        }
        {whois.createdDate &&
          <p><strong>Created Date:</strong> {`${whois.createdDate}`}</p>
        }
        {whois.updatedDate &&
          <p><strong>Updated Date:</strong> {`${whois.updatedDate}`}</p>
        }
        {whois.expiresDate &&
          <p><strong>Expires Date:</strong> {`${whois.expiresDate}`}</p>
        }
        {whois.registrant && whois.registrant.organization &&
          <p><strong>Registrant Organization:</strong> {`${whois.registrant.organization}`}</p>
        }
        {whois.registrant && whois.registrant.state &&
          <p><strong>Registrant State:</strong> {`${whois.registrant.state}`}</p>
        }
        {whois.registrant && whois.registrant.country &&
          <p><strong>Registrant Country:</strong> {`${whois.registrant.country}`}</p>
        }
        {whois.administrativeContact && whois.administrativeContact.organization &&
          <p><strong>Administrative Contact:</strong> {`${whois.administrativeContact.organization}`}</p>
        }
        {whois.administrativeContact && whois.administrativeContact.state &&
          <p><strong>Administrative Contact State:</strong> {`${whois.administrativeContact.state}`}</p>
        }
        {whois.administrativeContact && whois.administrativeContact.country &&
          <p><strong>Administrative Contact Country:</strong> {`${whois.administrativeContact.country}`}</p>
        }
        {whois.administrativeContact && whois.administrativeContact.phone &&
          <p><strong>Administrative Contact Phone Number:</strong> {`${whois.administrativeContact.phone}`}</p>
        }
        {whois.administrativeContact && whois.administrativeContact.email &&
          <p><strong>Administrative Contact Email:</strong> {`${whois.administrativeContact.email}`}</p>
        }
        {whois.technicalContact && whois.technicalContact.organization &&
          <p><strong>Technical Contact:</strong> {`${whois.technicalContact.organization}`}</p>
        }
        {whois.technicalContact && whois.technicalContact.state &&
          <p><strong>Technical Contact State:</strong> {`${whois.technicalContact.state}`}</p>
        }
        {whois.technicalContact && whois.technicalContact.country &&
          <p><strong>Technical Contact Country:</strong> {`${whois.technicalContact.country}`}</p>
        }
        {whois.technicalContact && whois.technicalContact.phone &&
          <p><strong>Technical Contact Phone Number:</strong> {`${whois.technicalContact.phone}`}</p>
        }
        {whois.technicalContact && whois.technicalContact.email &&
          <p><strong>Technical Contact Email:</strong> {`${whois.technicalContact.email}`}</p>
        }
        {whois.nameServers &&
          <p><strong>Host Names:</strong> {`${whois.nameServers.hostNames}`}</p>
        }
        {whois.registrarName &&
          <p><strong>Registrar Name:</strong> {`${whois.registrarName}`}</p>
        }
        {whois.registrarIANAID &&
          <p><strong>Registratr IANAID:</strong> {`${whois.registrarIANAID}`}</p>
        }
        {whois.registryData && whois.registryData.whoisServer &&
          <p><strong>WHOIS Server:</strong> {`${whois.registryData.whoisServer}`}</p>
        }
        {whois.contactEmail &&
          <p><strong>Contact Email:</strong> {`${whois.contactEmail}`}</p>
        }
        {whois.subRecords && whois.subRecords.createdDate &&
          <p><strong>Created Date:</strong> {`${whois.subRecords.createdDate}`}</p>
        }
      </Col>
    )
  }
  return (
    <h5 className="content-spacing">Your Results Will Appear Here!</h5>
  )
}

export default WhoisDataCard;