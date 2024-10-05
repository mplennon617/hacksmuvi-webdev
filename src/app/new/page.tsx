"use client"

import Card from "@/components/Card";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// This is our NewPost component. Since this file is named new.js,
// Next.js renders this component when visiting http://localhost:3000/new/
export default function NewPost() {
  // Declare our state variables:
  // - `body`, `author`, and `title` state variables change based on the corresponding textbox input.
  // - The `error` state variable is a boolean flag that we set to true if anything goes wrong.
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);

  const { push } = useRouter();

  // handleSubmit function. Called from the Submit button's onClick() event.
  const handleSubmit = async () => {
    // Send a POST request to the server API to insert the new post data.
    try {
      const data = {
        body: body,
        author: author,
        title: title,
      };
      console.log(data);
      const res = await fetch("/api/cards", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      console.log(res);
      // If the HTTP response is successful, we extract the data (in JSON format)
      // and update our posts state variable with the data.
      if (res.status === 200) {
        console.log("Post successfully created!")
      }
    } catch (e) {
      // If the HTTP response fails, it will throw an exception.
      // We catch it, and update the state variable to let the user know something went wrong.
      setError(true);
    }
    // Redirect to the main page
    push("/");
  };

  // handleCancel function. Called from the Cancel button's onClick() event.
  const handleCancel = () => {
    push("/");
  };

  // Component contents. Note the JavaScript logic injected in curly braces {}
  return (
    <>
      <main className="md:container mx-auto">
        <div className="text-2xl text-center my-4">New Post</div>
        <div>
          {/* An HTML form. Contains 3 text boxes (<input>, type="text") and their labels.y
            Note the onChange() event handlers that update the state variables above.
          */}
          <form>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="author"
            >
              Author:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              id="author"
              placeholder="Author"
              type="text"
              onChange={(e) => setAuthor(e.target.value)}
            ></input>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              id="title"
              placeholder="Title"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="post"
            >
              Post:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline mb-2"
              rows={8}
              id="post"
              placeholder="Post"
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </form>
          {/* Submit and Cancel buttons. Note the onClick event handlers. */}
          <button
            onClick={handleCancel}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mr-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded"
          >
            Post
          </button>
        </div>
        {error && <h1 className="text-red-500">An error occurred.</h1>}
      </main>
    </>
  );
}
