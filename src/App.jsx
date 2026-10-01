import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950">
      <ProfileCard
        image="https://imgs.search.brave.com/jj63mkvkBbTI8R1nvraQF3iGE6NdvLl4ySjF9N4r5rI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjEx/NzgxOTI1Ni9waG90/by90aG91Z2h0ZnVs/LWJ1c2luZXNzLW1h/bi1sb29raW5nLXRo/cm91Z2gtdGhlLXdp/bmRvdy1hdC10aGUt/b2ZmaWNlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1Jd015/OVdyVWlBVmxIN3J1/bFNBMkZEM3YtUExw/d0dJM0VQLTh4bWFB/Mm9NPQ"
        fullName="Daniel Carter"
        job="UI/UX Designer"
        bio="I create clean and user-friendly digital experiences with a focus on simple and modern design."
      />
    </main>
  );
}

export default App;
