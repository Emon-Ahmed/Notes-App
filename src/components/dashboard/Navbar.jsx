import { NavLink, useNavigation } from "react-router";
import ProfileInfo from "./ProfileInfo";
import SearchBar from "./SearchBar";
import { useState } from "react";

const DashboardNavbar = () => {
  const navigate = useNavigation;
  const [searchQuery, setSearchQuery] = useState("");

  const onLogout = () => {
    navigate("/login");
  };

  const handleSearch = () => {};
  const onClearSearch = () => {
    setSearchQuery("");
  };
  return (
    <div className="flex items-center justify-center bg-white drop-shadow">
      <div className="container flex items-center justify-between py-2">
        <NavLink className="px-2" to="/" end>
          <h2 className="py-2 text-xl font-medium text-black">Note App</h2>
        </NavLink>
        <SearchBar
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />
        <ProfileInfo onLogout={onLogout} />
      </div>
    </div>
  );
};

export default DashboardNavbar;
