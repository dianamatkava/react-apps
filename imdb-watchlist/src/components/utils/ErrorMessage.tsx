

export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="error">
      <div className="loader-inner ball-pulse">
        <p>ERROR: {message} </p>
      </div>
    </div>
  );
}
