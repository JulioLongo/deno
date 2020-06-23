import client from "../db/mysqldb.ts";
import VideoRepository from "../repositories/video.ts";

const videoRepository = new VideoRepository();

const getUser = async (
  { params, response }: { params: { id: string }; response: any },
) => {
  const user = await videoRepository.getAll();

  if (user) {
    response.status = 200;
    response.body = user;
  } else {
    response.status = 404;
    response.body = { message: "User not found." };
  }
};

export { getUser };
