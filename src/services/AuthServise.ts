import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

class AuthDatabaseService {
  async createUser(user: { email: string, password: string, name?: string }) {
    try {
      return await prisma.user.create({ data: user });
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async findUserByEmail(email: string) {
    try {
      return await prisma.user.findUnique({
        where: { email },
      });
    } catch (error) {
      console.error('Error finding user by email:', error);
      throw error;
    }
  }
}

export default new AuthDatabaseService();
