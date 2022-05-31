import { useState } from 'react';
export function Email() {
  const [data, setdata] = useState('');
  return (
    <div>
      <input
        type="email"
        name="email"
        onChange={(e) => console.log(e.target.value)}
        placeholder="email"
        required
      />
    </div>
  );
}
