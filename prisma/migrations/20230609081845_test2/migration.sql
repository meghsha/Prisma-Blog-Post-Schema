/*
  Warnings:

  - You are about to drop the column `userId` on the `userpreferences` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userPrefernceId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `userpreferences` DROP FOREIGN KEY `UserPreferences_userId_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `userPrefernceId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `userpreferences` DROP COLUMN `userId`;

-- CreateIndex
CREATE UNIQUE INDEX `User_userPrefernceId_key` ON `User`(`userPrefernceId`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_userPrefernceId_fkey` FOREIGN KEY (`userPrefernceId`) REFERENCES `UserPreferences`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
