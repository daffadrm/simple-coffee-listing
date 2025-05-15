"use client";

import { Star } from "lucide-react";

export interface TypeData {
  id: number;
  name: string;
  available: boolean;
  image: string;
  popular: boolean;
  price: string;
  rating: number;
  votes: number;
}

interface TypeCardList {
  data: TypeData;
}

const CardList = ({ data }: TypeCardList) => {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <div className="bg-gray-200 h-56 rounded-lg overflow-hidden">
          <img
            src={data.image}
            alt={data.image}
            className="h-full w-full object-cover"
          />
        </div>
        {data.popular && (
          <div className="absolute top-2 left-2 bg-yellow-500 text-xs font-bold px-2 py-1 rounded text-black">
            Popular
          </div>
        )}
      </div>
      <div className="mt-3">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-white font-medium">{data.name || "-"}</h3>
          <span className="text-white bg-green-700 px-2 py-0.5 rounded text-xs">
            {data.price}
          </span>
        </div>
        <div className="flex items-center">
          <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
          <span className="text-white text-sm ml-1">{data.rating}</span>
          <span className="text-gray-400 text-xs ml-1">({data.votes})</span>
          {!data.available && (
            <span className="text-red-500 tex-xs ml-auto">Sold Out</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardList;
