import Post from './post'
import './assets/styles/main.scss';
const post = new Post('webpack post title')
const getElement = () => console.log('getElement')
document.addEventListener('click', getElement)
console.log(post.toString())