import Hero from '@/components/Hero';
import SearchForm from '@/components/SearchForm';
import { sanityFetch } from '@/sanity/lib/live';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import Card from '@/components/Card';

const HomePage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;
  const params = { search: query || null };
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });
  return (
    <section>
      <Hero
        slogan="pitch, vote, and grow"
        title="pitch your startup, connect with entrepreneurs"
        text="Submit ideas, Vote on pitches, and Get Noticed in Virtual Competitions"
      >
        <SearchForm query={query} />
      </Hero>

      <div className="w-full mt-3 p-10">
        <p className="font-bold text-2xl">
          {query ? `Search Results for '${query}'` : 'All Startups'}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
          {posts.map((post) => (
            <Card key={post.slug?.current} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
