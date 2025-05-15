"use client";
import { useCallback, useEffect, useState } from "react";
import { getData } from "./server/coffee";
import CardList, { TypeData } from "@/components/card/cardList";

export default function Home() {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await getData();
      setData(response.data ?? []);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="min-h-screen bg-black">
      <div className="relative h-[300px] bg-[url('/images/bg-cafe.jpg')] z-10 bg-cover bg-center w-full"></div>
      <div className="absolute items-center bg-[#2c2e31] z-50 py-16 px-16 top-1/2  left-1/2 -translate-x-1/2 rounded-2xl max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-white text-3xl font-bold mb-3">Our Collection</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-10">
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm">
            All Products
          </button>
          <button className="hover:bg-gray-800 text-white px-4 py-2 rounded-md text-sm">
            Available Now
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* <div className="flex flex-col">
            <div className="relative">
              <div className="bg-gray-200 h-56 rounded-lg overflow-hidden">
                <img
                  src="/api/placeholder/400/320"
                  alt="Cappuccino with latte art"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute top-2 left-2 bg-yellow-500 text-xs font-bold px-2 py-1 rounded text-black">
                Popular
              </div>
            </div>
            <div className="mt-3">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-white font-medium">Cappuccino</h3>
                <span className="text-white bg-green-700 px-2 py-0.5 rounded text-xs">
                  $5.30
                </span>
              </div>
              <div className="flex items-center">
                <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                <span className="text-white text-sm ml-1">4.7</span>
                <span className="text-gray-400 text-xs ml-1">(65 votes)</span>
              </div>
            </div>
          </div> */}
          {data.map((item: unknown, index: number) => (
            <CardList data={item as TypeData} key={index} />
          ))}
          {/* <div className="bg-white rounded-2xl p-6">test</div>
          <div className="bg-white rounded-2xl p-6">test</div> */}
        </div>
      </div>
    </div>
  );
}
