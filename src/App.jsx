 import './App.css';
import Accordian from './components/Accordion';
import Image_slider from './components/Image_slider';
import Load_products from './components/Load_products';
import Random_color from './components/Random_color';
import Star_rating from './components/Star_rating';
import Tree_view from './components/Tree_view';
import treeData from './components/Tree_view/data';
function App() {
  return(
    <>
    <div className='container'>
    <Accordian/>
    <Random_color/> 
    <Star_rating noOfStars={10}/> 
    <Image_slider url={'https://picsum.photos/v2/list'} limit={'7'}/>
    <Load_products/>
  </div>
      <div className='tree_view'>
    <Tree_view menus={treeData}/>
    </div>
  </>
)
}

export default App
