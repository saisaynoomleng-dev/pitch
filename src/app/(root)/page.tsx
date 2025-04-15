import Hero from '@/components/Hero';
import SearchForm from '@/components/SearchForm';
import Image from 'next/image';
import { formatDate, shortDesc } from '../_lib/actions';
import { FaEye, FaUserGraduate } from 'react-icons/fa';
import Link from 'next/link';

const HomePage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;
  const cards = [
    {
      title: 'eco',
      author: { id: '2', position: 'senior level', name: 'sai' },
      image: '/beach-bum.png',
      id: 2,
      views: 2,
      date: new Date().toISOString(),
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, eveniet!',
    },
  ];
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
          {cards.map((card) => (
            <div
              key={card.id}
              className="border-2 border-r-8 border-b-8 rounded-4xl shadow-amber-700 flex flex-col gap-2 p-5 hover:-translate-y-2 transition-transform duration-500 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <p className="p-2 bg-brand-red/30 text-sm rounded-lg">
                  {formatDate(card.date)}
                </p>
                <p className="flex items-center gap-2">
                  <FaEye className="text-brand-red" />
                  {card.views}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <p className="capitalize">{card.author.name}</p>
                  <p className="font-bold text-lg capitalize">{card.title}</p>
                </div>
                <FaUserGraduate className="size-10" />
              </div>

              <p className="text-pretty text-justify">
                {shortDesc(card.description)}
              </p>

              <div>
                <Image
                  src={card.image}
                  width={100}
                  height={100}
                  alt=""
                  className="min-w-full rounded-3xl object-cover mx-auto"
                />
              </div>

              <div className="flex justify-between items-center">
                <p className="font-bold capitalize">{card.author.position}</p>
                <Link
                  href={`/${card.id}`}
                  className="p-3 bg-brand-black text-brand-white rounded-2xl"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
