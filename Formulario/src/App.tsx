import React from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
  });

  function handleSubmit(ev: any) {
    ev.preventDefault();
    console.log('Guardando', formData);
  }
  function handleChange(ev: any) {
    const value =
      ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value;
    setFormData({ ...formData, [ev.target.name]: value });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
    </form>
  );
}

export default App;
