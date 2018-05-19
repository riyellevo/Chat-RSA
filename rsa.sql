-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 19, 2018 at 06:15 AM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rsa`
--

-- --------------------------------------------------------

--
-- Table structure for table `chat_room`
--

CREATE TABLE `chat_room` (
  `id` int(11) NOT NULL,
  `public_key_1` varchar(1000) NOT NULL,
  `public_key_2` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chat_room`
--

INSERT INTO `chat_room` (`id`, `public_key_1`, `public_key_2`) VALUES
(1, 'asdads', 'asdad'),
(2, 's', 'asdad'),
(3, 'aaaa', 'asdad'),
(4, ' -----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwn2GqL9tDjdXR3LyW1VM\ntf957dqN/o15lynKn5QsXC4eykxhjXV0u2Ix4DMUTXaGxsocNjpfuxMDxcxfOaFB\njI6APD6KGtjE0dhf5CdFZCmy84yNne8Js7aC9qdur9pBdI6GlVencelvnB5Vz5IN\nXaQxUHg5uG7B4u1zXkw4a2wI0konHvsGbb41T5Zq7Or0IpINoqHqhiNxHiQUtD/e\nZWJCatgzJzXw+K+bijtlC7l1W54MAxVHWzpFD+x1Nsc1GNH7FEjG+SqgguM7U/jA\ndYeXhQKfCIP1lZoeiOQmrcGTxDgeLBap0nn3FHnyO2wif4syNcF+Z8wUE4CKWc6N\nnQIDAQAB\n-----END PUBLIC KEY-----', 'asdad');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chat_room`
--
ALTER TABLE `chat_room`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chat_room`
--
ALTER TABLE `chat_room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
