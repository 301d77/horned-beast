import './App.css';

function App() {
  return (
    <>
      <Header title="Horned Beasts" />
      <Main />
      <Footer author="Haustin Kimbrough"/>
    </>
  );
}

function Header(props) {
  return (
    <h1>{props.title}</h1>
  )
}

function Main() {
  return (
    <HornedBeast title="Horned Beasts" imageUrl="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" description="beasts"/>
  )
}

function HornedBeast(props) {
  return (
    <>
    <h2>{props.title}</h2>
    <img src={props.imageUrl} title={props.title} alt={props.description} />
    <p>{props.description}</p>
    </>
  )
}

function Footer(props){
  return(
    <p>{props.author}</p>
  )
}
export default App;
