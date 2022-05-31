import { useState } from 'react';
export function Newsletter() {
  const [data, setdata] = useState('');
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="newsletter"
          onChange={(e) => console.log(e.target.value)}
          required
        />
        Desea recibir información de nuestra newsletter?
      </label>
    </div>
  );
}
