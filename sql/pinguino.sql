/*
Navicat MySQL Data Transfer

Source Server         : migracion
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : pinguino

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2016-09-14 15:55:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tb_accion
-- ----------------------------
DROP TABLE IF EXISTS `tb_accion`;
CREATE TABLE `tb_accion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_accion
-- ----------------------------

-- ----------------------------
-- Table structure for tb_ciudad
-- ----------------------------
DROP TABLE IF EXISTS `tb_ciudad`;
CREATE TABLE `tb_ciudad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idProvincia` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='       ';

-- ----------------------------
-- Records of tb_ciudad
-- ----------------------------

-- ----------------------------
-- Table structure for tb_log_usuario_x_receta
-- ----------------------------
DROP TABLE IF EXISTS `tb_log_usuario_x_receta`;
CREATE TABLE `tb_log_usuario_x_receta` (
  `idUsuario` int(11) NOT NULL,
  `idReceta` int(11) NOT NULL,
  `idIngrediente` int(11) NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_log_usuario_x_receta
-- ----------------------------

-- ----------------------------
-- Table structure for tb_paso
-- ----------------------------
DROP TABLE IF EXISTS `tb_paso`;
CREATE TABLE `tb_paso` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `activo` enum('S','N') NOT NULL,
  `idAccion` int(11) DEFAULT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_paso
-- ----------------------------

-- ----------------------------
-- Table structure for tb_paso_receta
-- ----------------------------
DROP TABLE IF EXISTS `tb_paso_receta`;
CREATE TABLE `tb_paso_receta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idPaso` int(11) NOT NULL,
  `idReceta` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_paso_receta
-- ----------------------------

-- ----------------------------
-- Table structure for tb_provincia
-- ----------------------------
DROP TABLE IF EXISTS `tb_provincia`;
CREATE TABLE `tb_provincia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(75) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='     ';

-- ----------------------------
-- Records of tb_provincia
-- ----------------------------

-- ----------------------------
-- Table structure for tb_receta
-- ----------------------------
DROP TABLE IF EXISTS `tb_receta`;
CREATE TABLE `tb_receta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombreReceta` varchar(50) NOT NULL,
  `videourl` varchar(50) DEFAULT NULL,
  `img1` varchar(50) DEFAULT NULL,
  `img2` varchar(50) DEFAULT NULL,
  `img3` varchar(50) DEFAULT NULL,
  `img4` varchar(50) DEFAULT NULL,
  `descripcion` text,
  `activo` enum('S','N') NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_receta
-- ----------------------------

-- ----------------------------
-- Table structure for tb_receta_desbloqueada
-- ----------------------------
DROP TABLE IF EXISTS `tb_receta_desbloqueada`;
CREATE TABLE `tb_receta_desbloqueada` (
  `idUsuario` int(11) NOT NULL,
  `idReceta` int(11) NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_receta_desbloqueada
-- ----------------------------

-- ----------------------------
-- Table structure for tb_session
-- ----------------------------
DROP TABLE IF EXISTS `tb_session`;
CREATE TABLE `tb_session` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(128) NOT NULL,
  `data` text NOT NULL,
  `session_key` varchar(128) NOT NULL,
  `dns` varchar(128) NOT NULL,
  `set_time` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_session
-- ----------------------------

-- ----------------------------
-- Table structure for tb_usuario
-- ----------------------------
DROP TABLE IF EXISTS `tb_usuario`;
CREATE TABLE `tb_usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) NOT NULL,
  `apellido` varchar(150) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `documento` varchar(20) NOT NULL,
  `telefono` varchar(25) NOT NULL,
  `email` varchar(150) NOT NULL,
  `idProvincia` int(11) NOT NULL,
  `idCiudad` int(11) NOT NULL,
  `activo` enum('S','N') NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `idFacebook` varchar(50) DEFAULT NULL,
  `fecha` datetime NOT NULL,
  `fechaActualizacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_usuario
-- ----------------------------
