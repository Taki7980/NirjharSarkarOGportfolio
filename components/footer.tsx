export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nirjhar Sarkar. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
