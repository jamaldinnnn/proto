export function BionicText({ text }: { text: string }) {
  return (
    <span>
      {text.split(" ").map((word, i) => (
        <span key={i} className="mr-1">
          <span className="font-bold">{word.slice(0, Math.ceil(word.length * 0.4))}</span>
          {word.slice(Math.ceil(word.length * 0.4))}
        </span>
      ))}
    </span>
  )
}

