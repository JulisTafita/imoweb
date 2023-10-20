-- AlterTable
ALTER TABLE `imo` ADD COLUMN `has_digicode` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `has_gardian` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `has_interphone` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `has_kitchen` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `nb_bathroom` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `nb_salle_d_eau` INTEGER NOT NULL DEFAULT 0,
    MODIFY `description` TEXT NOT NULL DEFAULT '';
