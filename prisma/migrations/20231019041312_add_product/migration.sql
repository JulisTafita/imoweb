-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `reference` VARCHAR(191) NOT NULL,
    `IsExclusif` BOOLEAN NOT NULL DEFAULT false,
    `IsNew` BOOLEAN NOT NULL DEFAULT false,
    `NbPiece` INTEGER NOT NULL,
    `NbRoom` INTEGER NOT NULL,
    `Surface` INTEGER NOT NULL,
    `Price` INTEGER NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
