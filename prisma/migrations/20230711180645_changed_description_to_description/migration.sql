/*
  Warnings:

  - You are about to drop the column `Description` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `Description` on the `Income` table. All the data in the column will be lost.
  - Added the required column `description` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Income` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "Description",
ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Income" DROP COLUMN "Description",
ADD COLUMN     "description" TEXT NOT NULL;
