import { useEffect } from "react";

export default function useKey({
  key,
  callback,
}: {
  key: string;
  callback: () => void;
}) {
  useEffect(() => {
    function callbackKey(e: KeyboardEvent) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        callback();
      }
    }
    document.addEventListener("keydown", callbackKey);

    return () => {
      document.removeEventListener("keydown", callbackKey);
    };
  }, [callback, key]);
}
