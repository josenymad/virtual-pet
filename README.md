<h1>This is my Virtual Pet!</h1>
<h3>This project is part of my studies in Object Oriented Programming and Test Driven Development at Command Shift.</h3>

<br />

<h3>Languages and Tools</h3>
<p> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> </p>

<h2>Installation</h2>

<p>Make sure you have Node.js installed, you can do so on this <a href="https://nodejs.org/en/download">link</a>.</p>

<p>Once Node.js is installed, clone this repository on your machine via your terminal and navigate to the virtual-pet directory.</p>

<p>Open Node.js by entering <code>node</code> in your terminal, and get ready to create a virtual pet by entering the following command:</p>

<code>const Pet = require('./src/pet')</code>

<p>Next, create and name your new virtual pet by entering this command:</p>

<code>const pet = new Pet('pet name goes here')</code>

<h2>How to use</h2>

<p>Check out your pet's properties by simply entering `pet` in your node terminal!</p>

<p>You can interact with your pet with the following commands:</p>

<li><code>pet.growUp()</code></li>
<li><code>pet.walk()</code></li>
<li><code>pet.feed()</code></li>

<br />

<p>Make sure you regularly check up on your pet's wellbeing by using this command:</p>

<li><code>pet.checkUp()</code></li>

<br />

<p>If your pet unfortunately dies, have a think about the way you treated your pet. You can create another by entering <code>.exit</code> and then following the steps again from when you entered <code>node</code> on your terminal.</p> 

<p>Want to have two pets? Simply repeat the step below as many times as you'd like, making sure that you change the word after <code>const</code> with something like <code>pet2</code>:</p>

<code>const pet2 = new Pet('pet name goes here')</code>

<p><strong><em>Make sure to use that same word when you want to give that pet some commands and check that particular pet's properties!</em></strong></p>

<p>As a final feature, your pets can adopt children with this command:</p>

<code><em>pet</em>.adoptChild(insert <em>pet</em> being adopted here)</code>

