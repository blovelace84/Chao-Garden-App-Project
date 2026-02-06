import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Chao Garden Prototype</h1>

      <ul>
        <li>
          <Link href="/garden">Go to Garden</Link>
        </li>
        <li>
          <Link href="/inventory">Go to Inventory</Link>
        </li>
        <li>
          <Link href="/chao/1">Go to Chao Detail</Link>
        </li>
      </ul>
    </div>
  );
}
