export default function CornerPieces() {
  return (
    <div className="absolute -inset-4 pointer-events-none">
      <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-border" />
      <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-border" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-border" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-border" />
    </div>
  );
}
