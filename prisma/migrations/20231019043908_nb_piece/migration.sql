/*
  Warnings:

  - You are about to drop the column `isExclusif` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `isNew` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `nbPiece` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `nbRoom` on the `product` table. All the data in the column will be lost.
  - Added the required column `nb_piece` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nb_room` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `isExclusif`,
    DROP COLUMN `isNew`,
    DROP COLUMN `nbPiece`,
    DROP COLUMN `nbRoom`,
    ADD COLUMN `is_exclusif` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `is_new` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `nb_piece` INTEGER NOT NULL,
    ADD COLUMN `nb_room` INTEGER NOT NULL;
