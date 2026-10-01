function ProfileCard({ image, fullName, job, bio }) {
  return (
    <div className="w-80 rounded-2xl bg-slate-900 text-center border border-slate-800 hover:border-cyan-500 p-4">
      <img
        src={image}

        className="mx-auto h-64 w-73 rounded-4xl object-cover"
      />

      <h2 className="mt-4 text-2xl font-bold text-white">
        {fullName}
      </h2>

      <p className="mt-1 text-sm font-medium text-cyan-400">
        {job}
      </p>

      <p className="mt-4 text-sm leading-6 text-slate-400">
        {bio}
      </p>
    </div>
  );
}

export default ProfileCard;
