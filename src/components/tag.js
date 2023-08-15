export default function Tag({ children, props }) {
  return (
    <span
      className="px-6 py-2 border text-xs text-white rounded-full"
      {...props}
    >
      {children}
    </span>
  );
}
