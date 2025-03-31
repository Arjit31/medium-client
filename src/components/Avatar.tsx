export function Avatar({ name, short}: { name: string, short?:string }) {
  return (
    <div className="inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {short ? short: name[0]}
      </span>
    </div>
  );
}
