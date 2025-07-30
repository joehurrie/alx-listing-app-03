import Head from "next/head";
import { Quicksand, Source_Sans_3 } from "next/font/google";
import Pill from "@/components/common/Pill";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

const filters = [
  "All",
  "Top Villa",
  "Free Reschedule",
  "Book Now Pay Later",
  "Self Checkin",
  "Instant Book",
];

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Property Listings | OscarMike</title>
        <meta name="description" content="Find the best deals on luxury villas and curated stays around the world." />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&family=Source+Sans+3:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* 🌄 Hero Section */}
      <section
        className="w-full h-[480px] mt-[80px] rounded-[27px] bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: 'url("/assets/ListingImages/heroImage.png")' }}
      >
        <h1
          className={`text-[64px] md:text-[80px] lg:text-[94px] leading-tight text-white font-semibold ${sourceSansPro.className}`}
        >
          Find your favorite place here!
        </h1>
        <p
          className={`text-[18px] md:text-[20px] lg:text-[24px] text-white mt-4 font-light ${quicksand.className}`}
        >
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* 🔍 Filter Section */}
      <section className="mt-12 px-4 md:px-[60px] flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex flex-wrap gap-3">
          {filters.map((label, index) => (
            <Pill key={index} label={label} />
          ))}
        </div>
        <div className="flex gap-3 mt-4 md:mt-0">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-md bg-white hover:bg-gray-100">
            <span>🔍</span>
            <span>Filter</span>
          </button>
          <button className="px-4 py-2 border rounded-md bg-white hover:bg-gray-100">
            Sort: Highest Price
          </button>
        </div>
      </section>

      {/* 🏘️ Listing Section */}
      <section className="mt-12 px-4 md:px-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {property.name}
              </h3>
              <p className="text-blue-600 font-medium mt-2">${property.price}</p>
              <p className="text-sm text-gray-500 mt-1">⭐ {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
