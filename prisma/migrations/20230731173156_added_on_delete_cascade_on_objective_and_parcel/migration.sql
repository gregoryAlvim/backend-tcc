-- DropForeignKey
ALTER TABLE "Parcel" DROP CONSTRAINT "Parcel_objectiveId_fkey";

-- AddForeignKey
ALTER TABLE "Parcel" ADD CONSTRAINT "Parcel_objectiveId_fkey" FOREIGN KEY ("objectiveId") REFERENCES "Objective"("id") ON DELETE CASCADE ON UPDATE CASCADE;
