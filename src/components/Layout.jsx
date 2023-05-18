import React from 'react'
import Nav from './Nav'
import classes from '../styles/Layout.module.css'


function Layout({children}) {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>
          {/* <div class="videos">
            <a href="quiz.html">
              <div class="video">
                <img src="./images/3.jpg" alt="" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div class="qmeta">
                  <p>10 Questions</p>
                  <p>Score : Not taken yet</p>
                </div>
              </div>
            </a>

            <a href="quiz.html">
              <div class="video">
                <img src="./images/3.jpg" alt="" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div class="qmeta">
                  <p>10 Questions</p>
                  <p>Score : Not taken yet</p>
                </div>
              </div>
            </a>

            <a href="quiz.html">
              <div class="video">
                <img src="./images/3.jpg" alt="" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div class="qmeta">
                  <p>10 Questions</p>
                  <p>Score : 10 / 10</p>
                </div>
              </div>
            </a>

            <a href="quiz.html">
              <div class="video">
                <img src="./images/3.jpg" alt="" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div class="qmeta">
                  <p>10 Questions</p>
                  <p>Score : Not taken yet</p>
                </div>
              </div>
            </a>

            <a href="quiz.html">
              <div class="video">
                <img src="./images/3.jpg" alt="" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div class="qmeta">
                  <p>10 Questions</p>
                  <p>Score : 5 / 10</p>
                </div>
              </div>
            </a>

            <a href="quiz.html">
              <div class="video">
                <img src="./images/3.jpg" alt="" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div class="qmeta">
                  <p>10 Questions</p>
                  <p>Score : Not taken yet</p>
                </div>
              </div>
            </a>

            <a href="quiz.html">
              <div class="video">
                <img src="./images/3.jpg" alt="" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div class="qmeta">
                  <p>10 Questions</p>
                  <p>Score : Not taken yet</p>
                </div>
              </div>
            </a>

            <a href="quiz.html">
              <div class="video">
                <img src="./images/3.jpg" alt="" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div class="qmeta">
                  <p>10 Questions</p>
                  <p>Score : Not taken yet</p>
                </div>
              </div>
            </a>
          </div> */}
          {children}
          
        </div>
      </main>
    </>
  );
}

export default Layout