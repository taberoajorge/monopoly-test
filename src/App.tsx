import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Dev</h1>
      <h2>Let's begin with your test.</h2>
      <p>
        Fork this repository and create the example in your own copy. When you
        are done send us your URL with your work. The estimated time to
        accomplishment is up to 2 hours.
      </p>
      <p>
        We use React as our frontend so this task is set up on it. Feel free to
        keep it simple, or to pull in your CSS framework of choice. If you have
        design skills you can display them, but we prefer a functionally
        complete version rather than spending much time on CSS.
      </p>

      <p>
        TICKET 1: As a public user I would like to see a list of generated
        "Lands" displaying the following data:
      </p>
      <ul>
        <li>id</li>
        <li>title</li>
        <li>price</li>
        <li>rarity</li>
      </ul>
      <p>
        TICKET 2: As a public user I must have a way to generate a new "Land" by
        seeing a preview of the next one and confirm the action. The new land
        could be generated using the following seeds:
        <ul>
          <li>Title: Diamond - Price: $500.00 - Rarity: 3</li>
          <li>Title: Gold - Price: $250.00 - Rarity: 2</li>
          <li>Title: Silver - Price: $100.00 - Rarity: 1</li>
        </ul>
      </p>
      <p>
        TICKET 3: As a public user I would like to delete my lands one by one.
      </p>
      <p>
        API / backend - usually we would have a backend to make queries. For
        this exercise, do it all on the frontend. Thus a page refresh will
        effectively reset the data to the original state. Bonus: Implement
        operations to the list (search, filter, sorting) write them as
        asynchronous functions.
      </p>
      <p>Answer the next questions to explain your solution</p>
      <ol>
        <li>List view. Cards? Table? Carousel? Other?. Paging / scrolling.</li>
        <li>
          Generate view. How? New page & destroy list? Hide list? Show both?
        </li>
        <li>Next steps? Testing? Performance? Code quality?</li>
      </ol>
    </div>
  );
}
