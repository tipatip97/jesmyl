/*
  Warnings:

  - Added the required column `chatId` to the `InviteMeeting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InviteMeeting" ADD COLUMN     "chatId" BIGINT NOT NULL;
