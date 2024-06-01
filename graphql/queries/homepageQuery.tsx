export const homepageQueryDocument = `
  query getHome {
    home {
      currentStack
      introduction
      subtitle
      title
      availability
      cv {
        filename
        url
        id
      }
    }
  }
`;
