/*
Navicat MySQL Data Transfer

Source Server         : fbapp
Source Server Version : 50169
Source Host           : 50.57.130.144:3306
Source Database       : nes3_casadb

Target Server Type    : MYSQL
Target Server Version : 50169
File Encoding         : 65001

Date: 2016-09-28 16:45:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for lnc_registro
-- ----------------------------
DROP TABLE IF EXISTS `lnc_registro`;
CREATE TABLE `lnc_registro` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombreCompleto` varchar(100) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `tipoDocumento` enum('CC','CE') DEFAULT NULL,
  `documento` varchar(45) DEFAULT NULL,
  `multimedia` varchar(255) DEFAULT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `idDepto` int(11) DEFAULT NULL,
  `idCiudad` int(11) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `idea` text,
  `autorizoNestle` enum('N','S') DEFAULT 'N',
  `aceptoTerminos` enum('N','S') DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuario` (`documento`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of lnc_registro
-- ----------------------------
