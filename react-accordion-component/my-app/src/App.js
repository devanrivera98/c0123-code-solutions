import './App.css';
import Accordion from './Accordion';


function App() {
  const topicList = [{ number: 1, name: 'Hypertext Markup Language', paragraph: "Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web." }, { number: 2, name: 'Cascading Style Sheets', paragraph: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a documnet written in a markup language like HTML. CSS is a cornerstone Technology of the World Wide Web alongside HTML and JavaScript" }, { number: 3, name: 'JavaScript', paragraph: "Javascript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation and first-class functions." }]

  return (
    <Accordion topicList={topicList} />
  );
}

export default App;
