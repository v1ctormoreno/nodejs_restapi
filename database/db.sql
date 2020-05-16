CREATE DATABASE restapi;
CREATE TABLE IF NOT EXISTS `employees` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  role varchar(255) NOT NULL,
  salary int(20) NOT NULL,
  active BOOLEAN DEFAULT false
) ENGINE = InnoDB DEFAULT CHARSET = utf8;