"use client";
import axios from "axios";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  const book = {
    title: "Tek Adam",
    description:
      "ek Adam, Şevket Süreyya Aydemir'in 1963-1965 yılları arasında kaleme aldığı biyografi kitabı. Mustafa Kemal Atatürk'ün hayatının anlatıldığı üç ciltlik bu eser, biyografi olmasının yanı sıra bir inceleme-araştırma kitabı da sayılmalıdır.",
    image: "https://i.idefix.com/cache/500x400-0/originals/0001877582001-1.jpg",
    price: 80,
    stock: 100,
    authorId: "64237ff94b695f862f308d0a",
    publisherId: "645540b4f16d7ecc331b9bb8",
    languageId: "64553734f16d7ecc331b9b9b",
    genreId: "64553de4f16d7ecc331b9ba7",
    slug: "tek-adam",
  };

  const onSubmit = async () => {
    const b = await axios
      .post("/api/book/", book)
      .then(() => console.log("created"))
      .catch((error) => console.log("Encountered with an error"));
  };

  return (
    <div>
      <p>Create a book</p>
      <button onClick={onSubmit}>Create</button>
    </div>
  );
};

export default Page;

const book = {
  title: "Rabıta ",
  description:
    "12 Eylül 1980 darbesinin sözde Atatürkçü generalleri, yeterli din hizmeti verilemediğinden, şeriatçı tarikatların, cematlerin eline düştüğüne inandıkları Avrupa`daki Türklere, Diyanet işleri`nin memur imamlarını göndermek ister ama döviz yoktur! Gizli bir anlaşmayla, imam maaşlarının, Suudi Arabistan`ın, yine şeriatçı Rabıtatül Alemül İslam  örgütünce karşılıksız ödenmesi sağlanır! Gizli Kararname, hepsi de Atatürkçülük iddiasındaki devlet başkanı general Kenan Evren, başbakan amiral Bülend Ulusu ve bakanlarca imzalanmıştır.1980 öncesinde Demirel ve Ecevit Hükümetleri de bu yöntemi kullanmıştır. Bu kirli çamaşırları sergilediği için öldürülen Uğur Mumcu, Rabıta`nın sonunda, Meclisi bombalanmış 2016 Türkiye tablosu için 30 yı için şöyle ıuyarmış: Din ve inanç özgürlüğünün en sağlam güvencesi, laikliktir. Siyasal amaçlı dinsel akımların devlete egemen olmasını önlemek için getirilen nu ilkenin ne kadar önemli ve vazgeçilmez olduğunu, her gün yaşadığımız olaylarla çok daha iyi anlıyoruz.",
  image: "https://i.idefix.com/cache/500x400-0/originals/0000000069578-1.jpg",
  price: 75,
  stock: 100,
  authorId: "64237ff94b695f862f308d03",
  publisherId: "645540b4f16d7ecc331b9bb5",
  languageId: "64553734f16d7ecc331b9b9b",
  genreId: "64553de4f16d7ecc331b9ba6",
  slug: "rabita",
};

// ugur mumcu authorId eksik kalanlar tamam
