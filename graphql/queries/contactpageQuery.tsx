export const contactpageQueryDocument = `
  query getContact {
    contact {
      emailaddress
      introduction
      cv {
        filename
        url
        id
      }
    }
  }
`;
