import client from "../db/mysqldb.ts";

class VideoRepository {
  async getAll() {
    const user = await client.query(`select * from animes`);

    return user;
  }
}

export default VideoRepository;
