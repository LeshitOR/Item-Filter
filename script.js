const data = [
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      img: "IMAGES/61hdArKPVqL._AC_UL480_FMwebp_QL65_.webp",
      price: 74,
      cat: "Dress",
    },
    {
      id: 11,
      name: "Invicta girl's Pro",
      img: "IMAGES/2.webp",
      price: 98,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex thief",
      img: "IMAGES/3.webp",
      price: 118,
      cat: "Sport",
    },
    {
      id: 3,
      name: "Breitling Angry Birds",
      img: "IMAGES/4.webp",
      price: 299,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic A12 ",
      img: "IMAGES/6.webp",
      price: 20,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "IMAGES/7.webp",
      price: 95,
      cat: "Casual",
    },
    {
      id: 1,
      name: "Niko Men Elite",
      img: "IMAGES/8.webp",
      price: 34,
      cat: "Dress",
    },
    {
      id: 11,
      name: "Invicta Pro max",
      img: "IMAGES/9.webp",
      price: 74,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "IMAGES/10.webp",
      price: 50,
      cat: "Sport",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "IMAGES/11.webp",
      price: 207,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "IMAGES/12.webp",
      price: 102,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "IMAGES/13.webp",
      price: 32,
      cat: "Casual",
    },
    {
      id: 4,
      name: "Casio Watch Nord ",
      img: "IMAGES/14.webp",
      price: 10,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Smartwatch ",
      img: "IMAGES/15.webp",
      price: 89,
      cat: "Casual",
    },
    {
      id: 1,
      name: "Rolex Fendi",
      img: "IMAGES/16.webp",
      price: 69,
      cat: "Dress",
    },
    {
      id: 11,
      name: "Invicta Men's  Diver 2",
      img: "IMAGES/17.webp",
      price: 72,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's  Scout ",
      img: "IMAGES/18.webp",
      price: 205,
      cat: "Sport",
    },
    {
      id: 3,
      name: "Breitling Superocean",
      img: "IMAGES/19.webp",
      price: 350,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Casio Resin Strap ",
      img: "IMAGES/20.webp",
      price: 40,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Garmin  Smartwatch ",
      img: "IMAGES/21.webp",
      price: 14,
      cat: "Casual",
    },
    {
      id: 4,
      name: "Casio Classic Strap ",
      img: "IMAGES/22.webp",
      price: 100,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Venu Smartwatch ",
      img: "IMAGES/23.webp",
      price: 54,
      cat: "Casual",
    },

  ];


  const productsContainer = document.querySelector(".products"); // used for calling stuff to the screen
  const searchInput = document.querySelector(".search"); // used while filtering by names
  const categoriesContainer = document.querySelector(".cats");
  const priceRange = document.querySelector(".priceRange");
  const priceValues = document.querySelector(".priceValue");


// making stuff apearing to the screen, you'll use this : 
  const displayProducts = (filteredProduct) => {
    productsContainer.innerHTML = filteredProduct.map( product => 
      `
      <div class="product">
        <img src=${product.img} />
        <span class="name">${product.name}</span>
        <span class="priceText">$${product.price}</span>
      </div>         
      `).join("");
  };

  displayProducts(data);
  // end of rendering to z screen

//

  // First filter : filtering by names troughtout the search input 
searchInput.addEventListener("keyup", (e)=>{
  const value = e.target.value.toLowerCase();

  if(value){
    displayProducts(data.filter(item => item.name.toLocaleLowerCase().indexOf(value) !== -1));
  }else{
    displayProducts(data);
  };
});
// end of first filter


// Second filter : filtering by Categories
const setCategories = () => {
  const allCats = data.map((item) => item.cat);
  const categories = [
    "All",
    ...allCats.filter((item, i) => {
      return allCats.indexOf(item) === i;
    }),
  ]
  categoriesContainer.innerHTML = categories.map(cat => 
    `
    <span class = "cat">${cat}</span>
    `).join("") 
    
    categoriesContainer.addEventListener("click", (e) => {
      const selectedCat = e.target.textContent;

      selectedCat === "All"
      ? displayProducts(data)
      : displayProducts(data.filter((item) => item.cat === selectedCat));
    });
};

setCategories();
// End of Second filter 

// third filter : filtering by price
const setPrices = () => {
  const priceList = data.map((item) => item.price)
  const minPrice = Math.min(...priceList)
  const maxPrice = Math.max(...priceList)

  priceRange.min = minPrice
  priceRange.max = maxPrice
  priceRange.value = maxPrice
  priceValues.textContent = "$" + maxPrice

  priceRange.addEventListener("input", (e) => {
    priceValues.textContent = "$" + e.target.value
    displayProducts(data.filter((item)=> item.price <= e.target.value))
  })
}

setPrices();

// end