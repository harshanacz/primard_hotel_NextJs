// Hero Section

const heroCarouselImage = "/images/home/hero/hero.png";
const heroTitle = "Stay. Relax. Explore.";
const heroSubtitle = "Enjoy a unique experience at Hotel Primard, where comfort and charm await you.";



//about section
const  aboutInfo = {
    title: "Crafting Memorable Stays with Passion and Precision",
    description:
        "At Hotel Primard, we’re a dedicated team committed to delivering exceptional hospitality. With a blend of luxury and comfort, we ensure every guest enjoys a unique and unforgettable experience.",
    image1: "/images/home/about/booking.png",
    image2: "/images/home/about/awards.png",
    image3: "/images/home/about/trustpilot.png",
    image4: "/images/home/about/google.png",
    };

    //data list about rooms

    interface Room {
        name: string;
        description: string;
        type: string;
        maxGuests: number;
        doubleBed: number;
        singleBed: number;
        pricePerDay: number;
        imgUrls: string[];
        features: string[];
      }


    const roomData: Room[] = [
        {
          name: "Luxury Suite",
          description: "A luxurious suite with a stunning view of the ocean.",
          type: "Suite",
          maxGuests: 4,
          doubleBed: 2,
          singleBed: 0,
          pricePerDay: 250,
          imgUrls: ["/images/rooms/1.png"],
          features: ["Ocean View", "Free Wi-Fi", "Air Conditioning", "Breakfast Included"],
        },
        {
          name: "Deluxe Room",
          description: "A spacious deluxe room with modern amenities.",
          type: "Deluxe",
          maxGuests: 3,
          doubleBed: 1,
          singleBed: 1,
          pricePerDay: 180,
          imgUrls: ["/images/rooms/2.png"],
          features: ["Free Wi-Fi", "Air Conditioning", "Breakfast Included"],
        },
        {
          name: "Standard Room",
          description: "A comfortable room perfect for a short stay.",
          type: "Standard",
          maxGuests: 2,
          doubleBed: 1,
          singleBed: 0,
          pricePerDay: 100,
          imgUrls: ["/images/rooms/3.png"],
          features: ["Free Wi-Fi", "Air Conditioning"],
        },
        {
          name: "Family Room",
          description: "Ideal for families with children, featuring extra space.",
          type: "Family",
          maxGuests: 5,
          doubleBed: 2,
          singleBed: 1,
          pricePerDay: 200,
          imgUrls: ["/images/rooms/4.png"],
          features: ["Free Wi-Fi", "Air Conditioning", "Kid Friendly", "Breakfast Included"],
        },
        {
          name: "Single Room",
          description: "A cozy room for solo travelers.",
          type: "Single",
          maxGuests: 1,
          doubleBed: 0,
          singleBed: 1,
          pricePerDay: 80,
          imgUrls: ["/images/rooms/5.png"],
          features: ["Free Wi-Fi", "Air Conditioning"],
        },
        {
          name: "Presidential Suite",
          description: "An extravagant suite for a luxurious experience.",
          type: "Suite",
          maxGuests: 6,
          doubleBed: 3,
          singleBed: 0,
          pricePerDay: 500,
          imgUrls: ["/images/rooms/6.png"],
          features: ["Ocean View", "Private Pool", "Free Wi-Fi", "Air Conditioning", "Breakfast Included"],
        },
      ];


export { heroCarouselImage, heroTitle, heroSubtitle, aboutInfo, roomData };
