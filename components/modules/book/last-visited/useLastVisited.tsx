import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

type LastVisited = { id: string; title: string; image: string; slug: string };

const useLastVisited = ({ id, title, image, slug }: LastVisited) => {
  const [lastVisited, setLastVisited] = useState<LastVisited[]>([]);
  const cookies = new Cookies();

  useEffect(() => {
    const existingLastVisited = cookies
      .get("lastVisited")
      ?.filter((b: LastVisited) => b.id !== id);

    const expires = new Date();
    expires.setTime(expires.getTime() + 86400 * 1000);

    cookies.set(
      "lastVisited",
      [{ id, title, image, slug }, ...(existingLastVisited || [])],
      {
        path: "/",
        expires,
      }
    );

    setLastVisited(existingLastVisited || []);
  }, []);

  return { lastVisited };
};

export default useLastVisited;
