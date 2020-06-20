export default class DataMovie {
  static async getMovie(keyword) {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${keyword}&apikey=5b4b89d6`
    );
    const json = await response.json();
    if (json.Response == "True") {
      return json;
    } else {
      throw new Error(json.Error);
    }
  }
}
