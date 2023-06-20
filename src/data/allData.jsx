const allData = [
  {
    id: 1,
    title: "New Leads",
    counts: 3050,
    type: "statistics",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="statistics-item__icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "This week Sales",
    counts: null,
    price: 80500,
    type: "statistics",

    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="statistics-item__icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Inventory Status",
    counts: "8.5% Stock Surplus",
    type: "statistics",

    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="statistics-item__icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Orders to deliver",
    counts: "305 Orders",
    type: "statistics",

    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="statistics-item__icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    ),
  },
  {
    id: 5,
    img: "./assets/images/products/product-1.jpg",
    name: "Earphone",
    price: 90,
    type: "product",
  },
  {
    id: 6,
    img: "./assets/images/products/product-2.png",
    name: "shoos",
    price: 70,
    type: "product",
  },
  {
    id: 7,
    img: "./assets/images/products/product-3.png",
    name: "shoos",
    price: 80,
    type: "product",
  },
  {
    id: 8,
    img: "./assets/images/products/product-4.jpg",
    name: "IPhone X",
    price: 67,
    type: "product",
  },
  {
    id: 9,
    img: "./assets/images/products/product-5.png",
    name: "Head Phone",
    price: 78,
    type: "product",
  },
  {
    id: 10,
    img: "./assets/images/products/product-6.png",
    name: "headset",
    price: 86,
    type: "product",
  },
  {
    id: 11,
    img: "./assets/images/products/product-7.jpg",
    name: "headphone",
    price: 74,
    type: "product",
  },
  {
    id: 12,
    img: "./assets/images/products/product-8.jpg",
    name: "IPhone 13pro",
    price: 400,
    type: "product",
  },
];

export default allData;
