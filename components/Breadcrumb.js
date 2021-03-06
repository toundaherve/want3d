export default function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <a href="/">Home</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Results
        </li>
      </ol>
    </nav>
  );
}
