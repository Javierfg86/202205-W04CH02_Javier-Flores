export function NameForm() {

      const [formData, setFormData] = useState({
        name,
        last name,
        birthdate,
        gender,
        email,
    });

  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event: any) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {' '}
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />{' '}
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
