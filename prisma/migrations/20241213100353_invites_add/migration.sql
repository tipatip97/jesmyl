-- CreateTable
CREATE TABLE "InviteGuest" (
    "id" SERIAL NOT NULL,
    "meetId" INTEGER NOT NULL,
    "isCome" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "InviteGuest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InviteMeeting" (
    "id" SERIAL NOT NULL,
    "meetId" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "InviteMeeting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InviteGuest_id_key" ON "InviteGuest"("id");

-- CreateIndex
CREATE UNIQUE INDEX "InviteMeeting_id_key" ON "InviteMeeting"("id");

-- CreateIndex
CREATE UNIQUE INDEX "InviteMeeting_meetId_key" ON "InviteMeeting"("meetId");

-- AddForeignKey
ALTER TABLE "InviteGuest" ADD CONSTRAINT "InviteGuest_meetId_fkey" FOREIGN KEY ("meetId") REFERENCES "InviteMeeting"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
