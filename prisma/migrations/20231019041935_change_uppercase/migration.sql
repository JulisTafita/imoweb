/*
  Warnings:

  - You are about to drop the column `IsExclusif` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `IsNew` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `NbPiece` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `NbRoom` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `Price` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `Surface` on the `product` table. All the data in the column will be lost.
  - Added the required column `nbPiece` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nbRoom` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surface` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `IsExclusif`,
    DROP COLUMN `IsNew`,
    DROP COLUMN `NbPiece`,
    DROP COLUMN `NbRoom`,
    DROP COLUMN `Price`,
    DROP COLUMN `Surface`,
    ADD COLUMN `isExclusif` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `isNew` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `nbPiece` INTEGER NOT NULL,
    ADD COLUMN `nbRoom` INTEGER NOT NULL,
    ADD COLUMN `price` INTEGER NOT NULL,
    ADD COLUMN `surface` INTEGER NOT NULL;
