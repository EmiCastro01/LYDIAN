-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: lydian
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `productId` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `total` decimal(10,0) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (11,0,250000,'checked','Bv Peron 1150','2023-08-04 08:25:11','2023-08-04 08:25:11'),(12,0,289900,'checked','Bv Peron 1150','2023-08-04 08:40:58','2023-08-04 08:40:58');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `seller` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `imageSrc` varchar(255) NOT NULL,
  `cap` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (7,'Guitarra Fender',250000,'Cuerdas','Emi Castro','2023-08-02 17:53:08','2023-08-02 17:53:08','/image/fender-acoustic.jpg','Es una guitarra muy linda'),(9,'Cuerdas Daddario',3000,'Accesorios','Olmos Music','2023-08-02 21:42:12','2023-08-02 21:42:12','/image/daddario.jpg','Cuerdas 0.11 para guitarra acustica'),(10,'Bateria Alesis Nitro Mesh',500000,'Percusion','Olmos Music','2023-08-02 21:42:12','2023-08-02 21:42:12','/image/alesis-nitromesh.jpg','Bateria electronica, tiene choke en dos de los platillos'),(11,'Guitarra Acustica Taylor',36900,'Cuerdas','Emi Castro','2023-08-02 21:42:12','2023-08-02 21:42:12','/image/taylor-acoustic.jpg','Guitarra Taylor nueva. Sin uso'),(12,'Piano electrico ',100300,'Percusion','Gonza SerfaMusic','2023-08-02 21:42:12','2023-08-02 21:42:12','/image/teclado.jpg','Piano electrico con pedalera tripe. Conexion a MIDI '),(16,'Bajo Electrico Ibanez',190999,'Cuerdas','Tres Octavas','2023-08-02 21:42:12','2023-08-02 21:42:12','/image/bajo.jpg','Bajo electrico. viene con el ampli. perfecto estado'),(17,'Violin antiguo ',50800,'Cuerdas','Tres Octavas','2023-08-02 21:42:12','2023-08-02 21:42:12','/image/violin.jpg','Violin antiguo de la epoca de mi abuelo xd'),(18,'Pandereta washborn',800,'Accesorios','Olmos Music','2023-08-02 21:42:12','2023-08-02 21:42:12','/image/pandereta.jpg','Pandereta moderna. '),(19,'Guitarra Alpujarra',90000,'Cuerdas','Estefania Arias','2023-08-02 21:42:12','2023-08-02 21:42:12','/image/alpujarra.jpg','Guitarra electroacustica. Viene con afinador integrado. Muy linda'),(20,'Amplificador Marshall',84000,'Accesorios','Tres Octavas','2023-08-02 21:42:12','2023-08-02 21:42:12','/image/ampli.jpg','Cualquier consulta al mp!!'),(21,'Harpa Nogan',1400000,'Cuerdas','Guitar Center','2023-08-02 21:42:12','2023-08-02 21:42:12','/image/harpa.jpg','Harpa traida desde singapore. poor eso el precio'),(22,'Ukelele Ibanez',24500,'Cuerdas','Blue Note','2023-08-02 21:42:12','2023-08-02 21:42:12','/image/ukulele1.jpg','ukelele ibanez. se desafina todo el tiempo. pero cuando te faltan cuerdas en la guitarra va como piña'),(23,'Guitarra Electrica Ibanez',92300,'Cuerdas','Blue Note','2023-08-02 21:42:12','2023-08-02 21:42:12','/image/guitarraIbanez.jpg','esta buena, tiene buenas pastillas. como nueva'),(24,'Flauta',3000,'Viento','Libreria Guemes','2023-08-02 21:42:12','2023-08-02 21:42:12','/image/flauta.jpg','flauta. que descripcion podria tener una flauta'),(25,'Puas varias',600,'Accesorios','Emi Castro','2023-08-02 21:42:12','2023-08-02 21:42:12','/image/puas.jpg','puas');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20230730232309-create-lydian.js'),('20230731020142-create-producto.js'),('20230731194156-addColumnToTable.js'),('20230801042113-agregarDomicilioAUsers.js'),('20230801042420-limpiar-registros-de-tabla.js'),('20230801042628-num-tel.js'),('20230802173147-add_img_src.js'),('20230803143305-create-cart.js'),('20230803143639-create-order.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `domicilio` varchar(255) DEFAULT NULL,
  `numcel` bigint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'pepe@example.com','pepe','ramirez','2023-08-01 04:41:45','2023-08-01 04:41:45','asasd123','Av Ignacio de la rosa 3001',2644897233),(13,'emilianocg.9@gmail.com','Emiliano','Castro','2023-08-01 04:42:51','2023-08-01 04:42:51','$2b$10$UtWSG/4C9vhPkuE.coo0Q.LMsRbQwEQO1xYU1gXNnWpxFZp4azcdy','Bv Peron 1150',2644437777),(14,'myriamedith.gimenez@gmail.com','Myiriam','Gimenez','2023-08-01 04:46:55','2023-08-01 04:46:55','$2b$10$e2.PYvOeJfNqD36ydxu/p.VRDPLMAppVTUOV.Gh6htpD/uoT87aqa',NULL,NULL),(15,'adolfodante.castro@gmail.com','Adolfo','Castro','2023-08-01 04:53:00','2023-08-01 04:53:00','$2b$10$pMBeU/MTfJBT2lFH1z02Web/KE8WhD8b8FBs1lQBz2a8rVjX2igzC','larioja123 calle 32',2645789023),(16,'wacvhin@wsachin','Wachin','asdasd','2023-08-02 14:06:34','2023-08-02 14:06:34','$2b$10$6qmTcjh3V5pj5MMUgk2oPuuPYw4AbHVUn0ROVGFvIbFH93qVU1Tq6','asdsad987',3432457234234),(17,'rufinor@gmail.com','Ramira','Rufino','2023-08-02 23:15:33','2023-08-02 23:15:33','$2b$10$FK/H8wAUw2.0RXSYO.AC..vKZS4kKmDCLd3yugt9CnkOa2ptWzUg6','Av. Circunvalacion 1510 Sur',NULL),(18,'ramira@fxadsf','ramiora','adsdasdadas','2023-08-03 01:52:27','2023-08-03 01:52:27','$2b$10$l1hqlq3ZCoZA6hHOHnzCh..tCtJ3KZsxRDZtacBDkDWOEgnFzuWEq','asdasdasd234',34232),(19,'pepepepito@fdsf','Pepes','dfsdfdsf','2023-08-03 01:58:56','2023-08-03 01:58:56','$2b$10$smbw.b1T/aJ.1WM8UZMKWem8YdBOVXx5kqgR3w5D9ncrmtXYUy9W.','sdfsdf',2345345),(25,'dalel156@gmail.com','Dalel','Ares','2023-08-04 03:27:12','2023-08-04 03:27:12','$2b$10$JHMwMD4yBc/Beb09VgI8Be50sBBSWolK.8oSdPYtwKevawMxc4azi','Brasil 70',3517388234);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-04  5:42:15
