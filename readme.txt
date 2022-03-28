#Project Name
Meme-Generator

#Technology and Tools used
React JS, ES6,API

#Why this project?
It helps the user to fetch the data and add the text meme over the image 

#Things to consider
Create your own API username and password by signing up. 

https://imgflip.com/


#Features of Project
It helps to generate user defined memes and copy the link to users clipBoard.

#Components and Hooks used
React Hooks, clipBoard functionality,App.js component, Meme component,MemeGenerated Component and .css files for styling.

Strp by step process to implement the project and install dependencies

1.Start by creating npx create-react-app meme-generator
2. cd meme-generator
3. npm start

#Install additional dependencies

1. npm install react-router-dom
2.npm install clipboard-copy

#Render the components in index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App/App';
import { BrowserRouter } from 'react-router-dom';

#Render through App.js component

By importing Router Dom
import React from "react";

#Create Meme.js component

 #Fetch API to retrieve meme images from the server
 
 Inorder to proceed API fetch use React hooks useEffect();
 fetch('https://api.imgflip.com/get_memes') fetch data and and response in .json object by using .then
 
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useHistory } from 'react-router-dom';

#Rendered images using fetch and do some styling in .css file.

# Add two buttons Generate and Skip
Generate button will generate the output by using onClick event.
Skip button will help us to choose the randomly selected meme images.

For shuffling i have written Shuffle function for random images while reloading home page.

# Add caption to the meme images

It allows user to add some text over the meme images. For that we need tow text input field.

const [memes, setMemes] = useState([]);
const [memeIndex, setMemeIndex] = useState(0);
const [captions, setCaptions] = useState([]);

#This particular API have formData and it accepts only formData
for this operation we need username and password to process the meme request.

#Create a new free account username and password to generate the API call and proceed further.









