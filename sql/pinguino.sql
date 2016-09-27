/*
Navicat MySQL Data Transfer

Source Server         : migracion
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : pinguino

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2016-09-26 16:01:45
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
-- Table structure for tb_remeber_pass
-- ----------------------------
DROP TABLE IF EXISTS `tb_remeber_pass`;
CREATE TABLE `tb_remeber_pass` (
  `id` int(10) NOT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `keyMail` varchar(255) DEFAULT NULL,
  `valido` enum('S','N') DEFAULT 'S',
  `fecha` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_remeber_pass
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_session
-- ----------------------------
INSERT INTO `tb_session` VALUES ('1', '5', 'j/S/ubkP4IXVO9EExraxl9tRIHPIwhWIQ5KH3NVlin8=', '00f62d0aabcb4beecbf406b68a9f3d91554136ba4cc88f2230adef1f9c10fd620e7bdea6d15627e233765f66bc244b1ca3b469686ed40277c0c08c41c917fe53', '172.16.229.22', '1474469315');
INSERT INTO `tb_session` VALUES ('2', '5', 'j/S/ubkP4IXVO9EExraxl9tRIHPIwhWIQ5KH3NVlin8=', '00f62d0aabcb4beecbf406b68a9f3d91554136ba4cc88f2230adef1f9c10fd620e7bdea6d15627e233765f66bc244b1ca3b469686ed40277c0c08c41c917fe53', '172.16.229.22', '1474469326');
INSERT INTO `tb_session` VALUES ('3', '5', 'j/S/ubkP4IXVO9EExraxl9tRIHPIwhWIQ5KH3NVlin8=', '00f62d0aabcb4beecbf406b68a9f3d91554136ba4cc88f2230adef1f9c10fd620e7bdea6d15627e233765f66bc244b1ca3b469686ed40277c0c08c41c917fe53', '172.16.229.22', '1474471027');

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
  `provincia` varchar(100) NOT NULL,
  `ciudad` varchar(100) NOT NULL,
  `activo` enum('S','N') NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `idFacebook` varchar(50) DEFAULT NULL,
  `fecha` datetime NOT NULL,
  `fechaActualizacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_usuario
-- ----------------------------
INSERT INTO `tb_usuario` VALUES ('1', 'Cristian', 'Tangarife', '0000-00-00', '', '', 'cristian.tangarife@brm.com.co', 'provincia', 'ciudad', 'S', 'MTIzNDU2', null, '2016-09-22 02:17:08', null);
INSERT INTO `tb_usuario` VALUES ('2', 'cristian', 'tangarife', '0000-00-00', '', '', 'cristian.tangarife@brm.com.co', 'hola', 'ciudad', 'S', 'MTIzNDU2', null, '2016-09-22 02:31:28', null);
INSERT INTO `tb_usuario` VALUES ('3', 'cristian', 'tangarife', '0000-00-00', '', '', 'cristian.tangarife@brm.com.co', 'hola', 'ciudad', 'S', 'MTIzNDU2', null, '2016-09-22 02:31:28', null);
INSERT INTO `tb_usuario` VALUES ('4', 'cristian', 'tangarife', '0000-00-00', '', '', 'cristian.tangarife@brm.com.co', 'hola', 'ciudad', 'S', 'MTIzNDU2', null, '2016-09-22 02:31:28', null);
INSERT INTO `tb_usuario` VALUES ('5', 'cristian', 'tangarife', '0000-00-00', '', '', 'cristian.tangarife@brm.com.co', 'hola', 'ciudad', 'S', 'MTIzNDU2', null, '2016-09-22 02:31:29', null);
INSERT INTO `tb_usuario` VALUES ('6', 'cristian', 'tangarife', '0000-00-00', '', '', 'cristian.tangarife@brm.com.co', 'hola', 'ciudad', 'S', 'MTIzNDU2', null, '2016-09-22 02:31:29', null);

-- ----------------------------
-- Table structure for tb_usuario_org
-- ----------------------------
DROP TABLE IF EXISTS `tb_usuario_org`;
CREATE TABLE `tb_usuario_org` (
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
-- Records of tb_usuario_org
-- ----------------------------
