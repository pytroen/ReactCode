export default function FancyText({title, text}) {
    // console.log(title);
  return title
    ? <h1 className='fancy title'>{text}</h1>
    : <h3 className='fancy cursive'>{text}</h3>
}