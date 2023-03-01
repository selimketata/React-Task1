import './Article1.css'
function Article1({cover,category,publishedAt,title,shortDescription}){
   return(
    <div className='Article1'>
        <img src={cover} alt={`image of ${title}`} className="photo1"></img>
    <div className='details1'>
        <div className='details'>
        <span>{category}</span>
        <span>{publishedAt}</span>
        </div>
    <h2>{title}</h2>
    <p>{shortDescription}</p>
    </div>
    </div>
   )

}

export default Article1;