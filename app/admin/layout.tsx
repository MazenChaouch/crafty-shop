const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen bg-stone-800 text-stone-100">
      {children}
    </div>
  );
};

export default AdminLayout;
