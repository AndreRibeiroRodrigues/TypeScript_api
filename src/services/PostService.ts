import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

class PostDataBaseService {
  constructor() {}

  async readPosts() {
    try {
      return await prisma.post.findMany();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async createPost(post: Prisma.PostCreateInput) {
    try {
      const newPost = await prisma.post.create({
        data: post,
      });
      return newPost;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updatePost(post: Prisma.PostUpdateInput, id: number) {
    try {
      const updatedPost = await prisma.post.update({
        data: post,
        where: {
          id: id,
        },
      });
      return updatedPost;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deletePost(id: number) {
    try {
      await prisma.post.delete({
        where: {
          id: id,
        },
      });
      return true;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default new PostDataBaseService();
