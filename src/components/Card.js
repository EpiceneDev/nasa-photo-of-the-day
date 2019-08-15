import React from "react"
import { Segment, Image } from 'semantic-ui-react'
import '../../src/App.css'

export default function Card(props) {
    
    console.log("Card props: ", props)
    return(
        <Segment raised>
            <Segment styledSegment raised>
                <h1>{props.data && props.data.title}</h1>

                <Image src={props.data && props.data.url} size='fluid' alt="From Nasa"  className="photo" rounded fluid bordered />
            </Segment>

            <Segment raised>
                <h4>{props.data && props.data.date}</h4>
            </Segment>
            
            <Segment raised>
                <p>{props.data && props.data.explanation}</p>
            </Segment>
                
            
        </Segment>
    )
}
//From Semantic UI Reveal:
{/* <Reveal animated='move right'>
<Reveal.Content visible>
  <Image src='/images/wireframe/square-image.png' size='small' />
</Reveal.Content>
<Reveal.Content hidden>
  <Image src='/images/avatar/large/jenny.jpg' size='small' />
</Reveal.Content>
</Reveal> */}

//Tried but not true:
{/* <Segment raised>
<h1>{props.data && props.data.title}</h1>

<Reveal animated='move right'>

    <Reveal.Content visible>
        <Image src={props.data && props.data.url} size='small' alt="From Nasa"  className="photo" />
    </Reveal.Content>

    <Segment raised><h4>{props.data && props.data.date}</h4></Segment>
    
    <Segment raised>
        <Reveal.Content hidden><p>{props.data && props.data.explanation}</p></Reveal.Content>
    </Segment>
    
</Reveal>
</ */}