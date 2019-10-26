import { useState } from 'react';

const useToggle = (initialValue) => {
  // Takes a boolean value and toggles it.
  const [boolean, toggle] = useState(initialValue);

  return [
    boolean,
    () => {
      toggle(!boolean)
    }
  ]
}

export default useToggle;