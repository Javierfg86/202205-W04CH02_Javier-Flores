import { useState } from 'react';
export function Gender() {
  const [data, setdata] = useState('');
  return (
    <div>
      <p>Gender:</p>
      <div>
        <input
          type="radio"
          name="gender"
          onChange={(e) => console.log(e.target.value)}
        />
        <label>female</label>

        <input
          type="radio"
          name="gender"
          onChange={(e) => console.log(e.target.value)}
        />
        <label>male</label>

        <input
          type="radio"
          name="gender"
          onChange={(e) => console.log(e.target.value)}
        />
        <label>other</label>
        <input
          type="radio"
          name="gender"
          onChange={(e) => console.log(e.target.value)}
        />
        <label>prefer not to mention</label>
      </div>
    </div>
  );
}
