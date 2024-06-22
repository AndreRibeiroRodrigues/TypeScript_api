import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserDataBaseService {
  constructor() {}

  async readUsers() {
    try {
      return await prisma.user.findMany();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async createUser(user: Prisma.UserCreateInput) {
    try {
      const newuser = await prisma.user.create({
        data: user,
      });
      return newuser;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateUser(user: Prisma.UserUpdateInput, id: number) {
    try {
      const updatedUser = await prisma.user.update({
        data: user,
        where: {
          id: id,
        },
      });
      return updatedUser;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteUser(id: number) {
    try {
      await prisma.user.delete({
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

export default new UserDataBaseService();
