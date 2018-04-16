export const fetchGuides = `query fetchGuides {
  guidesQuery {
    id
    title
    thumbnail
  }
}`;

export const fetchSingle = `query fetchGuide {
  guidesQuery(id:%ID%) {
    id
    title
    text
  }
}`;
