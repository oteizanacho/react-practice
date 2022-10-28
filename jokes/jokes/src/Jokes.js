import React from "react"

export default function Jokes(props) {
    
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            <p>{props.punchline}</p>
            <button>Upvote</button>
            <button>Downvote</button>
            <br />
            <input type="text" placeholder="Comments"></input>
            <br />
            <p>Is pun?<input type="checkbox"></input></p>
            <hr />
        </div>
    )
}