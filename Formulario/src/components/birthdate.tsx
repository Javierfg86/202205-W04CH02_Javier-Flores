import { useState } from 'react';
export function Birthdate() {
  const [data, setdata] = useState('');
  return (
    <div>
      <input
        type="date"
        name="birthdate"
        onChange={(e) => console.log(e.target.value)}
        required
      />
    </div>
  );
}
