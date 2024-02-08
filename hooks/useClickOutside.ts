import React, { useRef, useEffect, ReactElement, LegacyRef } from "react";

export const useClickOutside = (handler : (e?: MouseEvent) => void) : [ref: LegacyRef<any>] => {
    const ref = useRef<any>(null);
    useEffect(() => {
      const listener = (event: MouseEvent) => {
        if (!ref.current || ref.current?.contains(event.target)) {
          return;
        }
        handler(event)
      };
      document.addEventListener("click", listener);
      return () => document.removeEventListener("click", listener);
    }, [ref, handler]);
    return [ref];
};