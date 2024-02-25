-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema inventorytrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `inventorytrackerdb` ;

-- -----------------------------------------------------
-- Schema inventorytrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `inventorytrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `inventorytrackerdb` ;

-- -----------------------------------------------------
-- Table `inventory`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `inventory` ;

CREATE TABLE IF NOT EXISTS `inventory` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `item_name` VARCHAR(200) NOT NULL,
  `quantity` INT NOT NULL,
  `unit_price` DOUBLE NULL,
  `category` VARCHAR(45) NULL,
  `location` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS supply@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'supply'@'localhost' IDENTIFIED BY 'supply';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'supply'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `inventory`
-- -----------------------------------------------------
START TRANSACTION;
USE `inventorytrackerdb`;
INSERT INTO `inventory` (`id`, `item_name`, `quantity`, `unit_price`, `category`, `location`) VALUES (1, 'Hammer Sledge', 3, 45.45, 'Tools', 'Supply Office');
INSERT INTO `inventory` (`id`, `item_name`, `quantity`, `unit_price`, `category`, `location`) VALUES (2, 'Mouse ', 5, 16.74, 'Electronics', 'Supply Office');
INSERT INTO `inventory` (`id`, `item_name`, `quantity`, `unit_price`, `category`, `location`) VALUES (3, 'Laptop, Dell D-5', 7, 145.98, 'Electronics', 'Operations Office');
INSERT INTO `inventory` (`id`, `item_name`, `quantity`, `unit_price`, `category`, `location`) VALUES (4, 'Hand Sanitizer', 15, 6.85, 'Sanitation', 'Supply Office Storage');
INSERT INTO `inventory` (`id`, `item_name`, `quantity`, `unit_price`, `category`, `location`) VALUES (5, 'Toilet Paper 1PLY 50CT', 2, 16.50, 'Toiletries', 'Janitor Closet');
INSERT INTO `inventory` (`id`, `item_name`, `quantity`, `unit_price`, `category`, `location`) VALUES (6, 'Keyboard, Dell ER-53', 5, 55.75, 'Electronics', 'Supply Office Storage');
INSERT INTO `inventory` (`id`, `item_name`, `quantity`, `unit_price`, `category`, `location`) VALUES (7, 'FM Radio F-6', 4, 405.92, 'Communication/Electronics', 'Communications Office');
INSERT INTO `inventory` (`id`, `item_name`, `quantity`, `unit_price`, `category`, `location`) VALUES (8, 'Coffee Cup, White', 16, 5.43, 'Sustenance', 'All Signed Out');
INSERT INTO `inventory` (`id`, `item_name`, `quantity`, `unit_price`, `category`, `location`) VALUES (9, 'File Cabinet, Gray', 24, 47.85, 'Storage', 'All Signed Out');

COMMIT;

