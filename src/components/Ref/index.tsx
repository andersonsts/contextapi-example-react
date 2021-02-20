import React, { useRef } from "react"

const Ref = React.memo(() => {
  console.log('render REF component')

  const inputRef = useRef<HTMLInputElement>(null);

  function handlePrintName() {
    if(inputRef.current) {
      inputRef.current.value = 'my name is anderson'
      alert(inputRef.current.value);
    }
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handlePrintName}>Print name</button>
    </div>
  )
})

export default Ref;