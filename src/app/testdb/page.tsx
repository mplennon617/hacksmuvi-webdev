"use client";

import Card from "@/components/Card";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CardType } from "@/types/CardType";


type Card = {
  title: string;
  body: string;
  author: string;
};

// This is our Home component.
// In Next.js, this is our main page (http://localhost:3000)
export default function Home() {
  // Declare our state variables:
  // - The `cards` state variable will be populated with the data from the API.
  // - The `error` state variable is a boolean flag that we set to true if anything goes wrong.
  const [cards, setCards] = useState<CardType[]>([]);
  const [error, setError] = useState<boolean>(false);

  // handleLoad function. Called from the useEffect().
  // Note: fetch(...) is an async function, which means we must make handleLoad async as well.
  const handleLoad = async () => {
    // Send a GET request to the server API to fetch all the Card data.
    try {
      const res = await fetch("/api/cards", {
        method: "GET",
      });
      console.log(res);
      // If the HTTP response is successful, we extract the data (in JSON format)
      // and update our cards state variable with the data.
      if (res.status === 200) {
        const data = await res.json();
        setCards(data);
      }
    } catch (e) {
      // If the HTTP response fails, it will throw an exception.
      // We catch it, and update the state variable to let the user know something went wrong.
      setError(true);
    }
  };

  // useEffect() - runs whenever this component renders or updates
  // - we call handleLoad(), which gets the cards from the API and updates the `cards` state variable.
  useEffect(() => {
    handleLoad();
  }, []);

  // Component contents. Note the JavaScript logic injected in curly braces {}
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="md:container mx-auto">
        <div className="text-2xl text-center my-4">Simple Social App</div>
        {/* Link to the New Card page. Using Tailwind.css, we make the Link look like a button. */}
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right"
          href="/new"
        >
          New Card
        </Link>
        {/* Here, cards?.map iterates through each Card, 
         and generates a Card component with the current Card data. */}
        <div className="flex flex-wrap items-center">
          {cards.length > 0 ? (
            cards?.map((card, index) => <Card key={index} card={card} />)
          ) : (
            <p className="text-center">No cards yet!</p>
          )}
        </div>

        {error && <h1 className="text-red-100">An error occurred.</h1>}
      </main>
    </>
  );
}
