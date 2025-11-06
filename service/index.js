const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.use(express.static('public'));

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());