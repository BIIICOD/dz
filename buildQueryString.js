export default function bqs(query) {
  let url = "";

  const sortQuery = Object.fromEntries(Object.entries(query).sort());

  for (let prop in sortQuery) {
    url += prop + "=" + query[prop] + "&";
  }

  console.log(url.slice(0, url.length - 1));
}
