document.addEventListener('DOMContentLoaded', () => {
    const products = [
      {
        id: 1,
        name: "Trueview",
        price: "₹2,300",
        image: "https://m.media-amazon.com/images/I/31y3XZSCsXL._SX300_SY300_QL70_FMwebp_.jpg",
        description: "Trueview 2MP+2MP Smart Linkage Robot Tracking Security Camera"
      },
      {
        id: 2,
        name: "Trueview 3Mp HD 4G SIM",
        price: "₹3,600",
        image: "https://m.media-amazon.com/images/I/51bObbGPh0L._SX679_.jpg",
        description: "Trueview 3Mp HD 4G SIM Based Pan Tilt CCTV Camera, Outdoor Indoor Security Camera, Water Proof, 2 Way Talk, Cloud Storage, Motion Detect, Supports SD Card Up to 256 GB, Color Night Vision, Alexa"
      },
      {
        id: 3,
        name: "Trueview 3+3Mp 4G Mini Pt Solar Powered Linkage",
        price: "₹8,999",
        image: "https://m.media-amazon.com/images/I/51EgezQOmPL._SX679_.jpg",
        description: "rueview 3+3Mp 4G Mini Pt Solar Powered Linkage Security Camera, 1296p Ethernet Advanced Cctv Surveillance Solution, Outdoor Camera, Water Proof, 2 Way Talk"
      },
      {
        id: 4,
        name: "CP PLUS Full HD 8 Channel DVR",
        price: "₹11,400",
        image: "https://m.media-amazon.com/images/I/61umMle4GQL._SX679_.jpg",
        description: "CP PLUS Full HD 8 Channel DVR with 2.4 MP 5 Outdoor Cameras [Built-in Audio MIC + Motion Detection] + 1 TB HDD + 8 Ch SMPS + CCTV Cable, JK Vision HDMI+BNC/DC Set"
      },
      {
        id: 5,
        name: "CP PLUS Full HD 8 Channel DVR ",
        price: "₹15,150",
        image: "https://m.media-amazon.com/images/I/71GO9L6pAzL._SX679_.jpg",
        description: "CP PLUS Full HD 8 Channel DVR with 2.4 MP 8 Outdoor Cameras [Built-in Audio MIC + Motion Detection] + 2 TB HDD + 8 Ch SMPS + CCTV Cable, USEWELL HDMI+BNC/DC Set"
      },
      {
        id: 6,
        name: "CP PLUS 8 Channel DVR",
        price: "₹17,999",
        image: "https://m.media-amazon.com/images/I/71jjiJTeHOL._SX679_.jpg",
        description: "CP PLUS 8 Channel DVR with 2MP 8X Outdoor, Built-in Audio Mic, Dual Light Color Night Vision Wired CCTV Cameras, Motion Detection, 8 Channel SMPS, 70 Meters CCTV Cable, 2TB HDD, Required BNC/DC"
      },
      {
        id: 7,
        name: "CP PLUS 4 Channel DVR",
        price: "₹9,800",
        image: "https://m.media-amazon.com/images/I/51jNoOWURGL._SX679_.jpg",
        description: "CP PLUS 4 Channel DVR with 2.4MP 4 Bullet Cameras (Day/Night Vision) + 1TB HDD + Copper Cable Roll (1+3) + CLOCITE 4 CH Power Supply + BNC & DC Full Combo Kit"
      },
      {
        id: 8,
        name: "CP PLUS 4 Channal HD DVR",
        price: "₹8,300",
        image: "https://m.media-amazon.com/images/I/61UVG2SxY4L._SX569_.jpg",
        description: "CP PLUS 4 Channal HD DVR 1080p 1Pcs,Outdoor Wired Camera 2.4 MP 2Pcs,Indoor Camera 2.4 MP 2Pcs,1 TB Hard Disk with USEWELL BNC/DC Full Combo Set"
      },
      {
        id: 9,
        name: "CP Plus SRPL-CP-UVR-0801E1-V4 ",
        price: "₹3,550",
        image: "https://m.media-amazon.com/images/I/21PvjlcrEjL.jpg",
        description: "CP Plus SRPL-CP-UVR-0801E1-V4 /CP-UVR-0801E1-CS 8CH Cosmic HD DVR (Without Hard Disk)"
      },
      {
        id: 10,
        name: "HIKVISION 4 Channel DVR",
        price: "₹11,600",
        image: "https://m.media-amazon.com/images/I/61EC6vfTO-L._SX679_.jpg",
        description: "HIKVISION 4 Channel DVR with 5 MP 4 Bullet Cameras with Audio Recording + 1 TB HDD + (3+1) Cable roll + 4 CH Power Supply + USEWELL BNC & DC Full Combo Kit"
      },
      {
        id: 11,
        name: "HIKVISION 8 Channel DVR",
        price: "₹16,250",
        image: "https://m.media-amazon.com/images/I/513Zf+zS1OL._SX679_.jpg",
        description: "HIKVISION 8 Channel DVR with 5MP 5 Bullet Cameras with Audio Recording (Day/Night Vision) + 2TB HDD + Cable Roll (1+3) + CLOCITE 8 CH Power Supply + BNC & DC Full Combo Kit"
      },
      {
        id: 12,
        name: "EZVIZ by Hikvision",
        price: "₹1,549",
        image: "https://m.media-amazon.com/images/I/61ursG1QR9L._SX679_.jpg",
        description: "EZVIZ by Hikvision | 2MP Full HD Pan & Tilt Home Security Wi-Fi smart Camera | Motion Detection | Auto Tracking | Night Vision | 2 way Audio | Sleep Mode | Microsd Card Upto 256Gb | Alexa Enabled |H6C"
      },
      {
        id: 13,
        name: "Eagle Spy Vision Bullet",
        price: "₹1,050",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfPRsak9qcc-6Hhs6_ojzLqbqp_u8LpFLo3A&s",
        description: "Eagle Spy Vision Bullet Camera with Night Vision, Power Supply: 12v5AM"
      },
      {
        id: 14,
        name: "Eagle`s Eye XPIA 1080P",
        price: "₹1,050",
        image: "https://m.media-amazon.com/images/I/61WCAol2IcL._SX679_.jpg",
        description: "Eagle`s Eye XPIA 1080P 2MP Full HD WiFi 360° Home Security Camera 1 Pc"
      },
      {
        id: 15,
        name: "IMOU 360° 1080P Full HD",
        price: "₹1,399",
        image: "https://m.media-amazon.com/images/I/315Hg3Saq5L._SX300_SY300_QL70_FMwebp_.jpg",
        description: "IMOU 360° 1080P Full HD CCTV Security Camera, Human Detection, Motion Tracking, 2-Way Audio, Night Vision, Dome Camera with WiFi & Ethernet Connection, Alexa Enabled, Up to 256GB SD Card Support"
      }
    ];
  
    function scrollToProducts() {
      document.getElementById("products").scrollIntoView({ behavior: "smooth" });
    }
  
    const productList = document.getElementById('product-list');
  
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
  
      const productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.alt = product.name;
  
      const productName = document.createElement('h3');
      productName.textContent = product.name;
  
      const productPrice = document.createElement('p');
      productPrice.textContent = product.price;
  
      const productDescription = document.createElement('p');
      productDescription.textContent = product.description;
  
      productCard.appendChild(productImage);
      productCard.appendChild(productName);
      productCard.appendChild(productPrice);
      productCard.appendChild(productDescription);
  
      productList.appendChild(productCard);
    });
  });
  