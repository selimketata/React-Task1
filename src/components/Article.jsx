import './Article.css'
function Article({cover,category,publishedAt,title,shortDescription}){
   return(
    <div className='Article'>
        <img src={cover} alt={`image of ${title}`} className="photo"></img>
    <div className='details'>
        <span>{category}</span>
        <span>{publishedAt}</span>
    </div>
    <h2>{title}</h2>
    <p>{shortDescription}</p>
    </div>
   )

}

export default Article;