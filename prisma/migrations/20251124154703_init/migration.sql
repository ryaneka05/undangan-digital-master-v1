-- CreateTable
CREATE TABLE "WishesInvitationGuest" (
    "id" SERIAL NOT NULL,
    "invitationId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "attending" TEXT NOT NULL,
    "createDateTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WishesInvitationGuest_pkey" PRIMARY KEY ("id")
);
