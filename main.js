import './style.css'
import products from './data/products.js';



const shop = ()=>{
  const app = document.querySelector('#app');
  const shop = document.createElement('div');
  shop.id= 'shop';
  shop.innerHTML=`
  <div id=shopTitle> TIENDA </div>
  <div id=finder></div>
  <div id=shopContainer> </div>
  `
  app.appendChild(shop)
  createCards(products);
  finder();

}


const createCards = (products)=>{
  const shop = document.querySelector('#shopContainer');
  for (const product of products){
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML=`
    <div>
      <div class='h2'>
        <h2> BMW QJ SRT 550 2023  </h2>
      </div>
    <h3 class='img'> FOTO </h3>
    <ul>
      <li> <p>Con garantía</p> </li>
      <li> <p>Motocenter Prime</p> </li>
      <li> <p>Seminuevo</p> </li>
      <li> <p>Revisada</p> </li>
    </ul>
    </div>
    <button> PRECIO </button>
    <p id='articleViews'>344 visitas</p>
    `
    shop.appendChild(card);
  }
};




const finder=()=>{
  const finder = document.querySelector('#finder');
  finder.innerHTML=`
   <div id='search'>
      <input type="search" id="type" name="q" placeholder='Busque aquí su moto' />
      <button> Go! </button>
   </div>
  <div class='filters'>
    <div id='filterBy'> (-) </div>
    <div id='sortBy'> (-) </div>
  </div>
  `
  createFilterPanels();
}

const createFilterPanels = ()=>{
  //FILTER BY
  const filterByPanel = document.createElement('div');
  filterByPanel.id= 'filterByPanel'
  document.body.appendChild(filterByPanel)

  const filterBy = document.querySelector('#filterBy');
  filterBy.addEventListener('click', ()=>{
    filterByPanel.style.display= "inline-block";
  })

  filterByPanel.innerHTML=`
  <h2> FILTRAR POR </h2>
  <ul id='filterList'>
  <li>

    <div id='box'>
      <p>MARCA</p>
    </div>
    <div id='boxShadow'></div>
    <div id='interactible' id='brand'>
      Recurrir a librería con marcas.
      <h4>Selecciona:</h4>
      <select class='optionBrand'>
        <option>Kawasaki</option>
        <option>Honda</option>
        <option>Ducati</option>
        <option>Voge</option>
        <option>BMW</option>
        <option>KTM</option>
      </select>
    </div>
  </li>


  <li>
    <div id='box'>
    <p>TIPO</p>
    </div>
    <div id='boxShadow'></div>
    <div id='interactible' id='type'>
    Insertar carrusel con motos y diseños.
    </div>
  </li>
  <li>
    <div id='box'>
    <p>MODELO</p>
    </div>
    <div id='boxShadow'></div>
    <div id='model'>
    Recurrir a librería con modelos, y hacer que se active al seleccionar una marca.
      <h4>Selecciona:</h4>
      <select class='optionModel'>
      </select>
    </div>
  </li>


  <li>
    <div id='box'>
    <p>ESTADO</p>
    </div>
    <div id='boxShadow'></div>
    <div id='condition'>
      <input type="radio" name="estado" value="nuevo"> <label for="nuevo">Nuevo</label>
      <input type="radio" name="estado" value="Seminuevo"> <label for="seminuevo">Seminuevo</label>
      <input type="radio" name="estado" value="Usado"> <label for="usado">Usado</label>
    </div>
  </li>


  <li>
    <div id='box'>
    <p>CARNÉ</p>
    </div>
    <div id='boxShadow'></div>
    <div id='license'>
      <input type="radio" name="carne" value="a"> <label for="a">A</label>
      <input type="radio" name="carne" value="a2"> <label for="a2">A2</label>
      <input type="radio" name="carne" value="a1"> <label for="a1">A1</label>
    </div>
  </li>

  <li>
    <div id='box'>
    <p>GARANTÍA</p>
    </div>
    <div id='boxShadow'></div>
    <div id='guarantee'>
      <input type="radio" name="garantia" value="3"> <label for="3">3 años // *MC Premium</label>
      <input type="radio" name="garantia" value="1"> <label for="1">1 año</label>
    </div>
  </li>

  <li>
    <div id='box'>
    <p>CILINDRADA</p>
    </div>
    <div id='boxShadow'></div>
    <div id='cc'>
      <input type="range" value="125" min="1" max="1300" oninput="this.nextElementSibling.value = this.value">
      <output>125</output>

    </div>
  </li>


  <button id='sendFilters'>Go!</button>
  </ul>
  `
  const sendFilters = document.querySelector('#sendFilters');
  sendFilters.addEventListener('click',()=>{
    filterByPanel.style.display= "none";
    alert('¡Cambios guardados de forma exitosa!')
  })
    

  
  //SORT BY
  const sortByPanel = document.createElement('div');
  sortByPanel.id= 'sortByPanel'
  document.body.appendChild(sortByPanel)

  const sortBy = document.querySelector('#sortBy');
  sortBy.addEventListener('click', ()=>{
    sortByPanel.style.display= "inline-block";
  })

}

shop();

