-- DropForeignKey
ALTER TABLE "Planning" DROP CONSTRAINT "Planning_userId_fkey";

-- DropForeignKey
ALTER TABLE "PlanningByCategory" DROP CONSTRAINT "PlanningByCategory_planningId_fkey";

-- AddForeignKey
ALTER TABLE "Planning" ADD CONSTRAINT "Planning_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanningByCategory" ADD CONSTRAINT "PlanningByCategory_planningId_fkey" FOREIGN KEY ("planningId") REFERENCES "Planning"("id") ON DELETE CASCADE ON UPDATE CASCADE;
