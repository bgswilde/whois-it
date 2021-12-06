import React from "react";
import { Col } from 'react-bootstrap';
import './index.css';
// import testdata from '../../testdata.json';

function WhoisDataCard(props) {
  const { whoisData } = props;
  // const testdata = {
  //   WhoisRecord: {
  //     createdDate: "1997-09-15T07:00:00+0000",
  //     updatedDate: "2019-09-09T15:39:04+0000",
  //     expiresDate: "2028-09-13T07:00:00+0000",
  //     registrant: {
  //       organization: "Google LLC",
  //       state: "CA",
  //       country: "UNITED STATES",
  //       countryCode: "US"
  //     },
  //     administrativeContact: {
  //       organization: "Google LLC",
  //       state: "CA",
  //       country: "UNITED STATES",
  //       countryCode: "US"
  //     },
  //     technicalContact: {
  //       organization: "Google LLC",
  //       state: "CA",
  //       country: "UNITED STATES",
  //       countryCode: "US"
  //     },
  //     domainName: "google.com",
  //     nameServers: {
  //       hostNames: [
  //         "ns1.google.com",
  //         "ns2.google.com",
  //         "ns4.google.com",
  //         "ns3.google.com"
  //       ],
  //       ips: []
  //     },
  //     status: "clientUpdateProhibited clientTransferProhibited clientDeleteProhibited serverUpdateProhibited serverTransferProhibited serverDeleteProhibited",
  //     parseCode: 3515,
  //     audit: {
  //       createdDate: "2021-12-05 00:04:54 UTC",
  //       updatedDate: "2021-12-05 00:04:54 UTC"
  //     },
  //     registrarName: "MarkMonitor, Inc.",
  //     registrarIANAID: "292",
  //     createdDateNormalized: "1997-09-15 07:00:00 UTC",
  //     updatedDateNormalized: "2019-09-09 15:39:04 UTC",
  //     expiresDateNormalized: "2028-09-13 07:00:00 UTC",
  //     registryData: {
  //       createdDate: "1997-09-15T04:00:00Z",
  //       updatedDate: "2019-09-09T15:39:04Z",
  //       expiresDate: "2028-09-14T04:00:00Z",
  //       domainName: "google.com",
  //       nameServers: {
  //         hostNames: [
  //           "NS1.GOOGLE.COM",
  //           "NS2.GOOGLE.COM",
  //           "NS3.GOOGLE.COM",
  //           "NS4.GOOGLE.COM"
  //         ],
  //         ips: []
  //       },
  //       status: "clientDeleteProhibited clientTransferProhibited clientUpdateProhibited serverDeleteProhibited serverTransferProhibited serverUpdateProhibited",
  //       parseCode: 251,
  //       audit: {
  //         createdDate: "2021-12-05 00:04:54 UTC",
  //         updatedDate: "2021-12-05 00:04:54 UTC"
  //       },
  //       registrarName: "MarkMonitor Inc.",
  //       registrarIANAID: "292",
  //       createdDateNormalized: "1997-09-15 04:00:00 UTC",
  //       updatedDateNormalized: "2019-09-09 15:39:04 UTC",
  //       expiresDateNormalized: "2028-09-14 04:00:00 UTC",
  //       whoisServer: "whois.markmonitor.com"
  //     },
  //     contactEmail: "abusecomplaints@markmonitor.com",
  //     domainNameExt: ".com",
  //     estimatedDomainAge: 8846
  //   }
  // };

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
          // (<h5>Domain Name Not Listed</h5>)
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
        {whois.registrant &&
          <p><strong>Registrant:</strong> {`${whois.registrant.organization} | ${whois.registrant.state}, ${whois.registrant.country}`}</p>
        }
        {whois.administrativeContact &&
          <p><strong>Administrative Contact:</strong> {`${whois.administrativeContact.organization} | ${whois.administrativeContact.state}, ${whois.administrativeContact.country}`}</p>
        }
        {whois.administrativeContact.telephone &&
          <p><strong>Administrative Contact Phone Number:</strong> {`${whois.administrativeContact.phone}`}</p>
        }
        {whois.administrativeContact.email &&
          <p><strong>Administrative Contact Email:</strong> {`${whois.administrativeContact.email}`}</p>
        }
        {whois.technicalContact &&
          <p><strong>Technical Contact:</strong> {`${whois.technicalContact.organization} | ${whois.technicalContact.state}, ${whois.technicalContact.country}`}</p>
        }
        {whois.technicalContact.telephone &&
          <p><strong>Technical Contact Phone Number:</strong> {`${whois.technicalContact.phone}`}</p>
        }
        {whois.technicalContact.email &&
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
        {whois.registryData.whoisServer &&
          <p><strong>WHOIS Server:</strong> {`${whois.registryData.whoisServer}`}</p>
        }
        {whois.contactEmail &&
          <p><strong>Contact Email:</strong> {`${whois.contactEmail}`}</p>
        }
      </Col>
    )
  }
  return (
    <h5 className="content-spacing">Your Results Will Appear Here!</h5>
  )
}

export default WhoisDataCard;