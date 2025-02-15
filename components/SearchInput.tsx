import { Search } from 'lucide-react';
import Form from 'next/form';

const SearchInput = () => {
  return (
    <Form action="/search" className="relative w-full flex-1">
      <input
        className="w-full px-3 py-2 pl-10 text-sm bg-background/80 focus:outline-none border-2 border-slate-600 rounded-full"
        name="query"
        placeholder="Search for Courses"
      />
      <Search className="absolute h-4 w-4 top-1/2 left-3 -translate-y-1/2 text-muted-foreground" />
    </Form>
  );
};

export default SearchInput;
