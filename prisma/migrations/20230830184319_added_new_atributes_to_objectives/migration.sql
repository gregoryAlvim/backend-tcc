-- AlterTable
ALTER TABLE "Objective" ADD COLUMN     "isActivated" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Parcel" ADD COLUMN     "isPaid" BOOLEAN NOT NULL DEFAULT false;
