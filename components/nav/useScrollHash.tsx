"use client";

import {  useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function useScrollToHash() {
  const searchParams = useSearchParams()
  const id = searchParams.get("id")

  console.log("Here is ID: ", id)

  useEffect(() => {
    if (!id) return;

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [id]);

}
