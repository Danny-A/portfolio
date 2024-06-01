export const workpageQueryDocument = `
  query getWork {
    allWorks(orderBy: startdate_DESC) {
      id
      title
      location
      role
      startdate
      enddate
      description
    }
  }
`;
