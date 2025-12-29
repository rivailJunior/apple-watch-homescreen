const CustomIcon = ({ label = 'Custom' }: { label: string }) => (
  <div
    className={`w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-white`}
    data-value={label}
  >
    {label}
  </div>
);
export { CustomIcon };
