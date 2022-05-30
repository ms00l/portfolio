import { 
  Animator,
  ScrollContainer,
  ScrollPage,
  Sticky,
  Zoom,
  batch,
  Fade
 } from 'react-scroll-motion'
import './App.css'
import tictacmoe from './images/tictacmoe.png'
import brickbreaker from './images/brickbreaker.png'
import rechat from './images/ReChat.png'
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import man from './images/manny222.png'
import aero from './images/aeronaut.png'
import crazy from './images/crazy.png'
import mqh from './images/mqh.png'
import plund from './images/plund.png'
import sloth from './images/sloth.png'

const ani = batch(Fade(), Zoom(), Sticky())

function App() {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={ani}>
          <h1>Hey! Welcome To My Portfolio</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={ani}>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={ani}>
          <h1>Selected Projects</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <Animator animation={ani}>
        </Animator>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={ani}>
          <h1>TicTacMoe</h1>
          <h6>A simple game of TicTacToe with the game pieces being my face. The game was built using HTML, CSS, JavaScript and jQuery and uses AJAX to connect to the back end. Implements basic user authentication & authorization to allow players to sign up, sign in, sign out and change their password. Allows only signed in users to play the game. Deployed onto a personal GitHub page.</h6>
          <img src={tictacmoe} width="700" height="500" />
          <br></br>
          <a href="https://ms00l.github.io/TicTacMoeRevenge/" target="_blank">
            <AiOutlineGithub className="icons" />
          </a>
        </Animator>
      </ScrollPage>
      <ScrollPage page={5}>
        <Animator animation={ani}>
        </Animator>
      </ScrollPage>
      <ScrollPage page={6}>
        <Animator animation={ani}>
          <h1>ReChat</h1>
          <h6>A React messaging application where users can message each other using all the same functions as previous projects in relation to authentication & authorization and CRUD actions. Utilized socket.io for messaging functionality and version control through a git repository hosted on Github. Deployed onto the organization’s GitHub page using Heroku.</h6>
          <img src={rechat} width="700" height="500" />
          <br></br>
          <a href="https://mosaco-group.github.io/chat-app-react-front/" target="_blank">
            <AiOutlineGithub className="icons" />
          </a>
        </Animator>
      </ScrollPage>
      <ScrollPage page={7}>
        <Animator animation={ani}>
        </Animator>
      </ScrollPage>
      <ScrollPage page={8}>
        <Animator animation={ani}>
          <h1>Brickbreaker</h1>
          <h6>A simple single page application for a simple game of brickbreaker. Utilizes the same authentication & authorization and CRUD actions as the ReChat project. Created game using Canvas in HTML and JS, setting up multiple different functions for the physics and gameplay of the actual game. Deployed onto personal Github page using Heroku.</h6>
          <img src={brickbreaker} width="700" height="500" />
          <br></br>
          <a href="https://ms00l.github.io/brickbreakCLIENT/" target="_blank">
            <AiOutlineGithub className="icons" />
          </a>
        </Animator>
      </ScrollPage>
      <ScrollPage page={9}>
        <Animator animation={ani}>
        </Animator>
      </ScrollPage>
      <ScrollPage page={10}>
        <Animator animation={ani}>
          <h1>Selected Design Works</h1>
          <img src={man} width="200" height="200" />
          <img src={aero} width="200" height="200" />
          <img src={crazy} width="200" height="200" />
          <img src={mqh} width="200" height="200" />
          <img src={plund} width="200" height="200" />
          <img src={sloth} width="200" height="200" />
        </Animator>
      </ScrollPage>
      <ScrollPage page={11}>
        <Animator animation={ani}>
        </Animator>
      </ScrollPage>
      <ScrollPage page={12}>
        <Animator animation={ani}>
          <h1>About Me [link to resume here]</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage page={13}>
        <Animator animation={ani}>
        </Animator>
      </ScrollPage>
      <ScrollPage page={14}>
        <Animator animation={ani}>
          <h1>Contact Me</h1>
          <a href="https://www.linkedin.com/in/moemoemoemoe/" target="_blank">
            <AiOutlineLinkedin className="icons" />
          </a>
          <a href="mailto: moesuleiman8@gmail.com" target="_blank">
            <AiOutlineMail className="icons" />
          </a>
          <button>
            <FaDiscord className="icons" onClick={() =>  navigator.clipboard.writeText('moemoemoe#3035')} />
          </button>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
