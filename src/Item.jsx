export default function Item({r,g,b}){
    return <li style={ {  backgroundColor : `rgb(${[r,g,b].join(",")})`} }>{ [r,g,b].join(",") }</li>
}