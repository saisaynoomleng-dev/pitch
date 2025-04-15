import Hero from '@/components/Hero';
import SearchForm from '@/components/SearchForm';

const HomePage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;
  return (
    <section>
      <Hero
        slogan="pitch, vote, and grow"
        title="pitch your startup, connect with entrepreneurs"
        text="Submit ideas, Vote on pitches, and Get Noticed in Virtual Competitions"
      >
        <SearchForm query={query} />
      </Hero>
    </section>
  );
};

export default HomePage;
