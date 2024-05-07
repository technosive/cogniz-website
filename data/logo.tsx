import { chakra, HTMLChakraProps, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import LogoImage from "../public/static/images/logo.png";

export const Logo: React.FC<HTMLChakraProps<"svg">> = (props) => {
  const color = useColorModeValue("#231f20", "#fff");
  return (
    <div className="flex flex-row items-center gap-x-2 justify-center">
      <Image src={LogoImage} width={30} height={30} alt="COGNIZ" />
      <span style={{ color: color }} className="font-semibold text-[1.4rem]">
        COGNIZ
      </span>
    </div>
  );
};
