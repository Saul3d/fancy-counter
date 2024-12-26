type props = {
  locked: boolean;
};
export default function Title({ locked }: props) {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          Limit! Buy <strong>Pro</strong> for &gt;5
        </span>
      ) : (
        "Fancy Counter"
      )}
    </h1>
  );
}
