'use client';

import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

const SearchInput = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      router.push(`/search/${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <form className="relative w-full flex-1" onSubmit={handleSubmit}>
      <input
        className="w-full px-3 py-2 pl-10 text-sm bg-background/80 focus:outline-none border-2 border-slate-600 rounded-full"
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for Courses"
      />
      <Search className="absolute h-4 w-4 top-1/2 left-3 -translate-y-1/2 text-muted-foreground" />
    </form>
  );
};

export default SearchInput;
