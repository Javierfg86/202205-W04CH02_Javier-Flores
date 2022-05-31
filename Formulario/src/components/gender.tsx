export function Gender() {
  return (
    <div>
      <p>Gender:</p>
      <div>
        <input type="radio" name="gender" value="female" />
        <label>female</label>

        <input type="radio" name="gender" value="male" />
        <label>male</label>

        <input type="radio" name="gender" value="other" />
        <label>other</label>
        <input type="radio" name="gender" value="not" />
        <label>prefer not to mention</label>
      </div>
    </div>
  );
}
