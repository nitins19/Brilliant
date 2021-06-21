import React from 'react';

function Home()
{
    return(<>
    <div className="content">
    <div className="container">
    <div className="text">
        <p className="back"> &lt;Back to all courses </p>
        <h1 className="logic">Logic</h1>
        <h2 className="stretch">Stretch your analytic muscles with knights, knaves, logic gates, and more!</h2>
        <p className="beginning">The beginning of our introductory math journey is Logic. Through these challenging problem solving exercises, you'll construct the critical thinking skills that are the basis for mathematical reasoning.</p>
        <p className="limited">You'll use limited information to make predictions – eliminating the impossible to uncover the truth. This course builds up to some truly mind-bending challenges!</p>
        <button className="prerequisites">View prerequisites and next steps</button>
        </div>
    <div className="carder">
        <img src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=254" alt="loading.." ></img>
        <div className="stats">
            <div>
                <span>37</span>
                <h3>Interactive quizzes</h3>
            </div>
            <div>
                <span>265+</span>
                <h3>Concepts and exercises</h3>
            </div>
        </div>
        <button>Start Course</button>
    </div>

    </div>
    </div>
    </>)
}
export default Home;