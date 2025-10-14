import lips1a from './images/lips1a.png';
import lips1b from './images/lips1b.png';
import lips2a from './images/lips2a.png';
import lips2b from './images/lips2b.png';
import lips3a from './images/lips3a.png';
import lips3b from './images/lips3b.png';
import lips4a from './images/lips4a.png';
import lips4b from './images/lips4b.png';
import lips5a from './images/lips5a.png';
import lips5b from './images/lips5b.png';
import lips6a from './images/lips6a.png';
import lips6b from './images/lips6b.png';
import lips7a from './images/lips7a.png';
import lips7b from './images/lips7b.png';
import lips8a from './images/lips8a.png';
import lips8b from './images/lips8b.png';
import eyes1a from './images/eyes1a.png';
import eyes1b from './images/eyes1b.png';
import eyes2a from './images/eyes2a.png';
import eyes2b from './images/eyes2b.png';
import eyes3a from './images/eyes3a.png';
import eyes3b from './images/eyes3b.png';
// import eyes4a from './images/eyes4a.png';
// import eyes4b from './images/eyes4b.png';
// import eyes5a from './images/eyes5a.png';
// import eyes5b from './images/eyes5b.png';
// import eyes6a from './images/eyes6a.png';
// import eyes6b from './images/eyes6b.png';
import eyes7a from './images/eyes7a.png';
import eyes7b from './images/eyes7b.png';
import eyes8a from './images/eyes8a.png';
import eyes8b from './images/eyes8b.png';
import face1a from './images/face1a.png';
import face1b from './images/face1b.png';
import face2a from './images/face2a.png';
import face2b from './images/face2b.png';
import face3a from './images/face3a.png';
import face3b from './images/face3b.png';
import face4a from './images/face4a.png';
import face4b from './images/face4b.png';
import face5a from './images/face5a.png';
import face5b from './images/face5b.png';
import face6a from './images/face6a.png';
import face6b from './images/face6b.png';
import face7a from './images/face7a.png';
import face7b from './images/face7b.png';
import face8a from './images/face8a.png';
import face8b from './images/face8b.png';


const productsData = {
  Lips: [
    {
      name: "Queen of Mattes",
      images: [lips1a, lips1b],
      reviews: "47 reviews",
      price: "Rs. 499",
      colors: ["#ff0000", "#f99"]
    },
    {
      name: "CineMagic Gloss",
      images: [lips2a, lips2b],
      reviews: "No reviews",
      price: "Rs. 399",
      colors: ["#f66", "#faa"]
    },
    {
      name: "Velvet Touch",
      images: [lips3a, lips3b],
      reviews: "22 reviews",
      price: "Rs. 450",
      colors: ["#800000", "#c33"]
    },
    {
      name: "Glossy Charm",
      images: [lips4a, lips4b],
      reviews: "13 reviews",
      price: "Rs. 420",
      colors: ["#ff77aa", "#ff99cc"]
    },
    {
      name: "Matte Magic",
      images: [lips5a, lips5b],
      reviews: "68 reviews",
      price: "Rs. 480",
      colors: ["#aa0000", "#dd4444"]
    },
    {
      name: "Lip Luxe",
      images: [lips6a, lips6b],
      reviews: "No reviews",
      price: "Rs. 500",
      colors: ["#ff4444", "#ff8888"]
    },
    {
      name: "Soft Satin",
      images: [lips7a, lips7b],
      reviews: "39 reviews",
      price: "Rs. 430",
      colors: ["#cc3333", "#ee6666"]
    },
    {
      name: "Perfect Pout",
      images: [lips8a, lips8b],
      reviews: "24 reviews",
      price: "Rs. 470",
      colors: ["#dd5555", "#ff9999"]
    }
  ],

  Eyes: [
    {
      name: "Lash Drama Mascara",
      images: [eyes1a, eyes1b],
      reviews: "47 reviews",
      price: "Rs. 470",
      colors: ["#000000", "#222222"]
    },
    {
      name: "Smoky Nights Palette",
      images: [eyes2a, eyes2b],
      reviews: "No reviews",
      price: "Rs. 499",
      colors: ["#444", "#888"]
    },
    {
      name: "Bold Kajal Stick",
      images: [eyes3a, eyes3b],
      reviews: "19 reviews",
      price: "Rs. 350",
      colors: ["#111", "#555"]
    },
    {
      name: "Wing It Liner",
      images: [eyes7a, eyes7b],
      reviews: "61 reviews",
      price: "Rs. 399",
      colors: ["#000", "#333"]
    },
    {
      name: "Glitter Gaze Shadow",
      images: [eyes8a, eyes8b],
      reviews: "No reviews",
      price: "Rs. 520",
      colors: ["#bbaaff", "#ccbbff"]
    }
  ],

  Face: [
    {
      name: "Radiant Foundation",
      images: [face1a, face1b],
      reviews: "47 reviews",
      price: "Rs. 799",
      colors: ["#e0b097", "#f1c8a7"]
    },
    {
      name: "Flawless Finish Compact",
      images: [face2a, face2b],
      reviews: "No reviews",
      price: "Rs. 650",
      colors: ["#f0c8a8", "#f6d5b5"]
    },
    {
      name: "Glow Highlighter",
      images: [face3a, face3b],
      reviews: "32 reviews",
      price: "Rs. 560",
      colors: ["#ffd8b5", "#fff0d9"]
    },
    {
      name: "Matte Perfection Primer",
      images: [face4a, face4b],
      reviews: "11 reviews",
      price: "Rs. 499",
      colors: ["#ddd", "#eee"]
    },
    {
      name: "Natural Blush",
      images: [face5a, face5b],
      reviews: "No reviews",
      price: "Rs. 420",
      colors: ["#fbb", "#fcc"]
    },
    {
      name: "Skin Tint Serum",
      images: [face6a, face6b],
      reviews: "25 reviews",
      price: "Rs. 680",
      colors: ["#f2c8a2", "#f8d3b4"]
    },
    {
      name: "Bronze Glow",
      images: [face7a, face7b],
      reviews: "14 reviews",
      price: "Rs. 590",
      colors: ["#b87d52", "#d49b6b"]
    },
    {
      name: "Silky Setting Powder",
      images: [face8a, face8b],
      reviews: "No reviews",
      price: "Rs. 530",
      colors: ["#f5d7b7", "#f9e5c9"]
    }
  ],

  Tools: [],
  Combos: []
};

export default productsData;
