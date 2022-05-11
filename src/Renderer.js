import React from 'react';
import Identicon from 'identicon.js';
const ethers = require('ethers');
const Renderer = ({ certificates, uploadCertificate, captureFile }) => {
  // certificate[0] = new Date(certificate[0].toNumber() * 1000).toLocaleString();
  let certificateDescription = '';
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="content mr-auto ml-auto">
          <h2>Share Certificate</h2>
          <form
            onSubmit={event => {
              event.preventDefault();
              const description = certificateDescription.value;
              uploadCertificate(description, captureFile);
            }}
          >
            <input
              type="file"
              accept=".jpg, .jpeg, .png, .bmp, .gif"
              onChange={captureFile}
            />
            <div className="form-group mr-sm-2">
              <br></br>
              <input
                id="certificateDescription"
                type="text"
                ref={input => {
                  certificateDescription = input;
                }}
                className="form-control"
                placeholder="Certificate description..."
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block btn-lg">
              Upload!
            </button>
          </form>
          <p>&nbsp;</p>
          {certificates.map((certificate, key) => {
            return (
              <div className="card mb-4" key={key}>
                <div className="card-header">
                  <img
                    className="mr-2"
                    width="30"
                    height="30"
                    src={`data:certificate/png;base64,${new Identicon(
                      certificate.author,
                      30
                    ).toString()}`}
                  />
                  <small className="text-muted">{certificate.author}</small>
                </div>
                <ul
                  id="certificateList"
                  className="list-group list-group-flush"
                >
                  <li className="list-group-item">
                    <p className="text-center">
                      <img
                        src={`https://ipfs.infura.io/ipfs/${certificate.hash}`}
                        style={{ maxWidth: '420px' }}
                      />
                    </p>
                    <p>{certificate.description}</p>
                    <p>{new Date(certificate.timestamp.toNumber() * 1000).toLocaleString()}</p>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Renderer;
