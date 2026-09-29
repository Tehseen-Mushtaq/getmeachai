export default async function UsernamePage({ params }) {
  const { username } = await params;
  return <div className="text-white">{username}</div>;
}