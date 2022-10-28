import React from "react";
import Jokes from "./Jokes";

function App() {
  return (
    <div>
      <Jokes
        upvotes = {0} 
        downvotes = {0}
        comments={[]}
        isPun = {Boolean}
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
      />
      <Jokes
        upvotes = {0} 
        downvotes = {0}
        comments={[]}
        isPun = {Boolean}
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
      />
      <Jokes
        upvotes = {10} 
        downvotes = {2}
        comments={[{author: "", body: "", title: ""}]}
        isPun = {Boolean}
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
      />
      <Jokes
        upvotes = {0} 
        downvotes = {0}
        comments={[]}
        isPun = {Boolean}
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
      />
      <Jokes
        upvotes = {0} 
        downvotes = {0}
        comments={[]}
        isPun = {Boolean}
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />
      <Jokes 
        upvotes = {0} 
        downvotes = {0}
        comments={[]}
        isPun = {Boolean}
        punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally." />
    </div>
  );
}

export default App;
