CREATE DATABASE IF NOT EXISTS endpoint_bitespeed;

USE endpoint_bitespeed;

CREATE TABLE IF NOT EXISTS Contact (
  id INT AUTO_INCREMENT PRIMARY KEY,
  phoneNumber VARCHAR(15),
  email VARCHAR(255),
  linkedId INT,
  linkPrecedence ENUM('primary', 'secondary') NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
  deletedAt DATETIME
);
