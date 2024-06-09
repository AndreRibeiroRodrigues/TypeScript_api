import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserDataBaseService {
  constructor() {}

  async getUsers() {
    try {
      return await prisma.user.findMany();
    } catch (e) {
      console.log(e);
      return null;
    }
  }
  async getUserById(id: number){
    try {
      const user = await prisma.user.findMany({
        select: {
          name: true,
          email: true
        },
        where: {
          id: id
        }
        })
      return user;
    } catch (e) {
      console.log(e);
    }
  }

  async insertDBUser(user: Prisma.UserCreateInput) {
    try {
      const newuser = await prisma.user.create({
        data: user,
      });
      return newuser;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async updateDBUser(user: Prisma.UserUpdateInput, id: number) {
    try {
      const updatedUser = await prisma.user.update({
        data: user,
        where: {
          id: id,
        },
      });
      return updatedUser;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async deleteDBUser(id: number) {
    try {
      await prisma.user.delete({
        where: {
          id: id,
        },
      });
      return true;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}

export default new UserDataBaseService();
