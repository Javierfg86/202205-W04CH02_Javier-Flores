import { useState } from 'react';
export function NameForm() {
  const [data, setdata] = useState('');

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={(e) => console.log(e.target.value)}
        required
      />
    </div>
  );
}
