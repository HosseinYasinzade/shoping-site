import Text from "../atoms/Text/text";
import Links from "../atoms/Links/Links";

function TopHeader() {
  return (
    <header className="bg-black py-3">
      <div className="flex justify-center gap-5">
        <Text
          text="Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
          variant="white-text"
        />
        <Links text="ShopNow" variant={"white-text"} href="#" />
      </div>
    </header>
  );
}

export default TopHeader;
