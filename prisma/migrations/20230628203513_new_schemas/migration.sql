/*
  Warnings:

  - Added the required column `planningId` to the `PlanningByCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PlanningByCategory" ADD COLUMN     "planningId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "PlanningByCategory" ADD CONSTRAINT "PlanningByCategory_planningId_fkey" FOREIGN KEY ("planningId") REFERENCES "Planning"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
