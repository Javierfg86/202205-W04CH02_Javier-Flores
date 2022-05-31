import { useState } from 'react';
export function Lastform() {
  const [data, setdata] = useState('');
  return (
    <div>
      <input
        type="text"
        name="lastname"
        onChange={(e) => console.log(e.target.value)}
        placeholder="Last Name"
        required
      />
    </div>
  );
}
