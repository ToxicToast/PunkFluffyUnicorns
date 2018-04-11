export const fetchVods = `query fetchVods {
  vodQuery {
    id
    youtube_thumbnail
    youtube_title
    youtube_duration
  }
}`;

export const fetchSingle = `query fetchVods {
  vodQuery(id:%ID%) {
    id
    youtube_id
    youtube_thumbnail
    youtube_title
    youtube_duration
  }
}`;

export const createVod = `mutation createVod($youtube_id: string) {
  vodMutation(youtube_id: $youtube_id) {
    youtube_id
  }
}`;
