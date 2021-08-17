const animalArray = [{
    "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
    "title": "UniWhal",
    "description": "A unicorn and a narwhal nuzzling their horns",
    "keyword": "narwhal",
    "horns": 1
  },
  
  {
    "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
    "title": "Rhino Family",
    "description": "Mother (or father) rhino with two babies",
    "keyword": "rhino",
    "horns": 2
  },
  
  {
    "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
    "title": "Unicorn Head",
    "description": "Someone wearing a creepy unicorn head mask",
    "keyword": "unicorn", 
    "horns": 1
  }];

function Main() {
    const beastArray = animalArray.map(item => {
        return (
            <HornedBeast title={item.title} imageUrl={item.image_url} description={item.description} horns={item.horns} keyword={item.keyword} />
        )
    })
    console.log(beastArray);
    return (
        <div id='mainDivElem'>
            {beastArray}
        </div>
    )
}
  
  function HornedBeast(props) {
    return (
      <div class='cardDivElems' id={props.keyword}>
      <h2>{props.title}</h2>
      <img src={props.imageUrl} title={props.title} alt={props.description} />
      <p>{props.description}</p>
      <p>Horns: {props.horns}</p>
      </div>
    )
  }
// comment
  export default Main;