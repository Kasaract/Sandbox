import React, { useState, useRef } from 'react'

interface Person {
  first: string;
  last: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  person?: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string
}

export const TextField: React.FC<Props> = ({ handleChange }) => {
  const [count, setCount] = useState<number | null | undefined | string>(5);
  const [str, setStr] = useState<TextNode>({ text: 'world' });
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  setCount(undefined);
  setStr({ text: 'peeps' })

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  )
}

// 13:52 Time Stamp!!!