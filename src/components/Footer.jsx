export function Footer() {
  return (
    <footer className="bg-white dark:bg-[#3A4565] text-center p-4 shadow-inner">
      <div className="container mx-auto">
        <p className="text-gray-600 dark:text-gray-300">
          &copy; {new Date().getFullYear()} VisionCap. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
