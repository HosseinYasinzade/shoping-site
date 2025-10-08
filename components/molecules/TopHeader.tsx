import Text from "../atoms/Text/text";
import Links from "../atoms/Links/Links";

function TopHeader() {
  return (
    <header className="bg-black py-3">
      <div className="flex justify-center gap-5">
        <Text variant="white-text">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </Text>
        <Links variant="white-text" href="/about">
          ShopNow
        </Links>
      </div>
    </header>
  );
}

export default TopHeader;
