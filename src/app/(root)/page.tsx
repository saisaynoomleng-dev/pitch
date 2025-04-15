import Hero from "@/components/Hero";
import SearchForm from "@/components/SearchForm";

const HomePage = () => {
  return (
    <section>
      <Hero
        slogan="pitch, vote, and grow"
        title="pitch your startup, connect with entrepreneurs"
        text="Submit ideas, Vote on pitches, and Get Noticed in Virtual Competitions"
      >
        <SearchForm />
      </Hero>
    </section>
  );
};

export default HomePage;
