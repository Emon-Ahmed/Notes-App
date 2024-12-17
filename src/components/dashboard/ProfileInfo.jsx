import { Link } from "react-router";

const ProfileInfo = () => {
  const getInitials = (name) => {
    if (!name) return "-";
    const words = name.split(" ");
    let initials = "";

    for (let i = 0; i < Math.min(words.length, 2); i++) {
      initials += words[i][0];
    }

    return initials.toUpperCase();
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-12 h-12 font-medium rounded-full text-slate-950 bg-slate-100">
        {getInitials("Emon Ahmed")}
      </div>
      <div>
        <p className="text-sm font-medium ">Ahmed</p>
        <Link to="/login">
          <button className="text-sm underline text-slate-700">Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileInfo;
