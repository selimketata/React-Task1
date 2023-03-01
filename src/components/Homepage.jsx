import './HomePage.css'
import Article from './Article'
import Article1 from './Article1'
function HomePage(){
    let article2 = {
        cover: 'https://d3dkvycwtjicra.cloudfront.net/wp-content/uploads/2019/08/21103352/hybrid-apps-vs-native-apps-cover-3.jpg',
        category: 'Product',
        publishedAt: '2021-09-15',
        title: 'Hybrid vs Native - here is how you can choose one over the other...',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    } 
    let article1 = {
        cover: 'https://live.staticflickr.com/4524/26534652509_771c72c4d4_b.jpg',
        category: 'Design',
        publishedAt: '2021-03-22',
        title: 'How to design a website',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    } 
    let article3 = {
      cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
      category: 'Development',
      publishedAt: '2022-03-22',
      title: 'How To implement a website in react',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
  } 
    return(<div>
        <Article1 {...article1}/>
        <br></br>
        <div className='contenu'>
          <Article {...article2}/>
          <Article {...article3}/>
        </div>
        </div>
    )
}

export default HomePage