import MenuItem from "@/components/atoms/MenuItem/MenuItem";

function Menu() {
  return (
    <div className="flex">
      <MenuItem>Home</MenuItem>
      <MenuItem className="mx-20">Contact</MenuItem>
      <MenuItem className="mr-20">About</MenuItem>
      <MenuItem>Signup</MenuItem>
    </div>
  );
}

export default Menu;
