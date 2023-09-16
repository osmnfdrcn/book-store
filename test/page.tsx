"use client";
import axios from "axios";
import React from "react";
import Wrapper from "../components/layout/wrapper";

type Props = {};

const AuthorCratePage = async (props: Props) => {
  const book = {
    title: "Nietzsche Agladıgında",
    description:
      "Yalom yarı gerçek, yarı kurgu olarak yazdığı bu kitabında deha filozof Friedrich Nietzsche ile Psikanalizm'in kurucusu Sigmund Freud'un yakın arkadaşı ve hocası olan Josef Breuer'in karşılaşmasını ve birbirlerine konuşma terapisi yolu ile yardım etmelerini anlatıyor.",
    image: "https://i.idefix.com/cache/500x400-0/originals/0000000651687-1.jpg",
    price: 70,
    stock: 100,
    authorId: "64237ff94b695f862f308cf4",
    publisherId: "645540b4f16d7ecc331b9bab",
    languageId: "64553734f16d7ecc331b9b9b",
    genreId: "64553de4f16d7ecc331b9ba1",
    slug: "nietzsche-agladiginda",
  };

  const onSubmit = () => {
    const b = axios
      .post("/api/book/", book)
      .then(() => console.log("created"))
      .catch((error) => console.log("Encountered with an error"));
  };

  return <Wrapper>iop</Wrapper>;
};

export default AuthorCratePage;
