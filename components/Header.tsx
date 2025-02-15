import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import { BookMarkedIcon, SwatchBook } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 bg-background/80 border-b border-border z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left */}
          <div className="flex items-center gap-4">
            <Link href="#" className="flex items-center gap-2">
              <SwatchBook />
              <span className="uppercase">Kdemy Academy</span>
            </Link>
          </div>

          {/* Right  */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <nav>
              <Link
                href="/my-courses"
                className="flex items-center gap-1 border px-3 py-2 rounded"
              >
                <BookMarkedIcon className="h-4 w-4" />
                <span className="hidden md:block">Enrolled Courses</span>
              </Link>
            </nav>

            <ModeToggle />

            <SignedIn>
              <UserButton />
            </SignedIn>

            <SignedOut>
              <SignInButton>
                <Button variant="outline">Sign In</Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
