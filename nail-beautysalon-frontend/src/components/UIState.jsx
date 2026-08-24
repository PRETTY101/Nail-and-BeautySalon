export function Notice({ children, type = "info" }) {
  return (
    <div className={`notice notice-${type}`}>
      {children}
    </div>
  );
}
