-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: portfoliodb
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `educacion`
--

DROP TABLE IF EXISTS `educacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `educacion` (
  `id_educacion` int NOT NULL AUTO_INCREMENT,
  `institucion` varchar(50) NOT NULL,
  `carrera` varchar(50) NOT NULL,
  `fecha` varchar(8) NOT NULL,
  `img_institucion` varchar(255) DEFAULT NULL,
  `perfil_id_perfil` int NOT NULL,
  PRIMARY KEY (`id_educacion`),
  KEY `fk_educacion_perfil1_idx` (`perfil_id_perfil`),
  CONSTRAINT `fk_educacion_perfil1` FOREIGN KEY (`perfil_id_perfil`) REFERENCES `perfil` (`id_perfil`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `educacion`
--

LOCK TABLES `educacion` WRITE;
/*!40000 ALTER TABLE `educacion` DISABLE KEYS */;
INSERT INTO `educacion` VALUES (1,'ISPC','Programacion','01/03/22','imasdadg',1),(2,'UNLa','Nutricion','01/03/19','imasdadg',1);
/*!40000 ALTER TABLE `educacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perfil`
--

DROP TABLE IF EXISTS `perfil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `perfil` (
  `id_perfil` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `profesion` varchar(255) NOT NULL,
  `descripcion` longtext NOT NULL,
  `img_perfil` varchar(45) DEFAULT NULL,
  `banner` varchar(255) DEFAULT NULL,
  `user_id_user` int NOT NULL,
  PRIMARY KEY (`id_perfil`),
  KEY `fk_perfil_user_idx` (`user_id_user`),
  CONSTRAINT `fk_perfil_user` FOREIGN KEY (`user_id_user`) REFERENCES `user` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfil`
--

LOCK TABLES `perfil` WRITE;
/*!40000 ALTER TABLE `perfil` DISABLE KEYS */;
INSERT INTO `perfil` VALUES (1,'Hernan','Sanchez','Desarrollador Full Stack','Apasionado por el desarrollo web. Actualmente estudio una tecnicatura en desarrollo de software, sin embargo desde el año 2020 me capacito en lo que respecta al diseño y desarrollo web. Soy una persona comprometida con gran interés en las nuevas tecnologías, me capacito constantemente para superarme. Mi meta actual es pertenecer a una empresa y equipo donde pueda aplicar mis conocimientos de forma profesional, que me acompañe en mi progreso personal y laboral, y a la cual pueda aportar toda mi dedicación, conocimientos y habilidades.','https://i.ibb.co/PxqsrZ4/img-min.jpg','chauchau',1);
/*!40000 ALTER TABLE `perfil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proyecto`
--

DROP TABLE IF EXISTS `proyecto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proyecto` (
  `id_proyecto` int NOT NULL AUTO_INCREMENT,
  `nombre_proyecto` varchar(55) NOT NULL,
  `descripcion_proyecto` varchar(255) NOT NULL,
  `link_url` varchar(255) NOT NULL,
  `link_repo` varchar(255) NOT NULL,
  `img_proyecto` varchar(255) DEFAULT NULL,
  `perfil_id_perfil` int NOT NULL,
  PRIMARY KEY (`id_proyecto`),
  KEY `fk_proyecto_perfil1_idx` (`perfil_id_perfil`),
  CONSTRAINT `fk_proyecto_perfil1` FOREIGN KEY (`perfil_id_perfil`) REFERENCES `perfil` (`id_perfil`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyecto`
--

LOCK TABLES `proyecto` WRITE;
/*!40000 ALTER TABLE `proyecto` DISABLE KEYS */;
INSERT INTO `proyecto` VALUES (1,'Cual es mi numero','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae assumenda, ipsam facilis expedita illo obcaecati inventore, molestias facere distinctio veritatis quasi magnam id. Iste, a voluptates. Nulla labore reprehenderit deserunt','https://cual-es-mi-numero.netlify.app/','https://github.com/Hernan-99/cual_es_mi_numero','asdad.com',1),(4,'Portfolio web con JAVA','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae assumenda, ipsam facilis expedita illo obcaecati inventore, molestias facere distinctio veritatis quasi magnam id. Iste, a voluptates. Nulla labore reprehenderit deserunt','https://hernan-sanchez-portfolio.web.app/','https://github.com/Hernan-99/portfolio-frontEnd-YoProgramo','asdad.com',1),(5,'Lista de compras (AWP)','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae assumenda, ipsam facilis expedita illo obcaecati inventore, molestias facere distinctio veritatis quasi magnam id. Iste, a voluptates. Nulla labore reprehenderit deserunt','https://hernan-99.github.io/','https://github.com/Hernan-99/Hernan-99.github.io','asdad.com',1);
/*!40000 ALTER TABLE `proyecto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skill`
--

DROP TABLE IF EXISTS `skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skill` (
  `id_skill` int NOT NULL AUTO_INCREMENT,
  `nombre_skill` varchar(55) NOT NULL,
  `icono_skill` varchar(255) DEFAULT NULL,
  `perfil_id_perfil` int NOT NULL,
  PRIMARY KEY (`id_skill`),
  KEY `fk_skill_perfil1_idx` (`perfil_id_perfil`),
  CONSTRAINT `fk_skill_perfil1` FOREIGN KEY (`perfil_id_perfil`) REFERENCES `perfil` (`id_perfil`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skill`
--

LOCK TABLES `skill` WRITE;
/*!40000 ALTER TABLE `skill` DISABLE KEYS */;
INSERT INTO `skill` VALUES (1,'HTML','fab fa-html5',1),(2,'CSS','fab fa-css3-alt',1),(3,'JavaScript','fab fa-js',1),(6,'Angular','fab fa-angular',1),(7,'GitHub','fab fa-github-square',1),(8,'NodeJS','fab fa-node-js',1),(9,'MySQL','fas fa-database',1),(10,'Ubuntu','fab fa-ubuntu',1);
/*!40000 ALTER TABLE `skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skill_has_proyecto`
--

DROP TABLE IF EXISTS `skill_has_proyecto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skill_has_proyecto` (
  `skill_id_skill` int NOT NULL,
  `proyecto_id_proyecto` int NOT NULL,
  PRIMARY KEY (`skill_id_skill`,`proyecto_id_proyecto`),
  KEY `fk_skill_has_proyecto_proyecto1_idx` (`proyecto_id_proyecto`),
  KEY `fk_skill_has_proyecto_skill1_idx` (`skill_id_skill`),
  CONSTRAINT `fk_skill_has_proyecto_proyecto1` FOREIGN KEY (`proyecto_id_proyecto`) REFERENCES `proyecto` (`id_proyecto`),
  CONSTRAINT `fk_skill_has_proyecto_skill1` FOREIGN KEY (`skill_id_skill`) REFERENCES `skill` (`id_skill`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skill_has_proyecto`
--

LOCK TABLES `skill_has_proyecto` WRITE;
/*!40000 ALTER TABLE `skill_has_proyecto` DISABLE KEYS */;
/*!40000 ALTER TABLE `skill_has_proyecto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(25) NOT NULL,
  `contrasenia` varchar(45) NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Hernan','hernanGabriel1999');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-30 17:46:05
