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
      name: "Invicta Men's Pro Diver 2",
      img: "IMAGES/2.webp",
      price: 98,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "IMAGES/3.webp",
      price: 118,
      cat: "Sport",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "IMAGES/4.webp",
      price: 299,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
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
      name: "Invicta Men's Pro Diver",
      img: "IMAGES/8.webp",
      price: 34,
      cat: "Dress",
    },
    {
      id: 11,
      name: "Invicta Men's Pro Diver 2",
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
      name: "Casio Classic Resin Strap ",
      img: "IMAGES/14.webp",
      price: 10,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "IMAGES/15.webp",
      price: 89,
      cat: "Casual",
    },
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      img: "IMAGES/16.webp",
      price: 69,
      cat: "Dress",
    },
    {
      id: 11,
      name: "Invicta Men's Pro Diver 2",
      img: "IMAGES/17.webp",
      price: 72,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "IMAGES/18.webp",
      price: 205,
      cat: "Sport",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "IMAGES/19.webp",
      price: 350,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "IMAGES/20.webp",
      price: 40,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "IMAGES/21.webp",
      price: 14,
      cat: "Casual",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "IMAGES/22.webp",
      price: 100,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "IMAGES/23.webp",
      price: 54,
      cat: "Casual",
    },

  ];


  const productsContainer = document.querySelector(".products"); // used for calling stuff to the screen
  const searchInput = document.querySelector(".search");
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
  // fin