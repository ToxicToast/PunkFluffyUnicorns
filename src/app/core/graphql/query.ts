export const createVisitor = `mutation {
  visitorMutation(ip: "%VISITORIP%",
  country: "%VISITORCOUNTRY%",
  city: "%VISITORCITY%",
  useragent: "%VISITORAGENT%",
  platform: "%VISITORPLATFORM%") {
    id
    ip
    country
    city
    useragent
    platform
  }
}`;
