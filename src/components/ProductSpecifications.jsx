export default function ProductSpecifications({ specs }) {
  return (
    <table className="specs-table">
      <caption className="sr-only">جدول مشخصات فنی</caption>
      <tbody>
        {specs.map((s) => (
          <tr key={s.label}>
            <th scope="row">{s.label}</th>
            <td>{s.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
