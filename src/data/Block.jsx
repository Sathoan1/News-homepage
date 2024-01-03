import blocks from './blocks';
import './blockStyle.css'

// card component 

function BlockCard(props){
    return(
        <div className='blockCard'>
            <img src={props.image} className='blockImg' alt="" />
            <div className='blockText'>
                <h3>{props.tag}</h3>
            <h5>{props.title}</h5>
            <h6>{props.description}</h6>
            </div>

        </div>
    )
};

const Block = () => {
    
  return (
    <div className='blockContainer'>
        <div className='blockContent'>
       {blocks.map((block)=>{
        return  <BlockCard
       key={block.id}
       image={block.image}
       tag={block.tag}
       title={block.title}
       description={block.description}
       />
       })}
        </div>
    </div>
  )
}

export default Block



// {
//   blogs.map((blog)=>{
//       return <Blogcard key={blog.id} {...blog} />

//   })
// }