import { Link, Stack, Typography } from "@mui/material";
import { ImgLogo, LinksBody, Root, StlyedButton, StyledLink } from "./styles";
import Logo from "../../../assets/icons/logo.svg";
import { ReactComponent as GreenDot } from "../../../assets/icons/green-dot.svg";
import clsx from "clsx";

const links = [
  { label: "Home", path: "/" },
  { label: "About Me", path: "about-me" },
  { label: "My Work", path: "my-work" },
];

function Header({ active }) {
  return (
    <Root direction="row" alignItems="center" justifyContent="space-between">
      <Link to="/">
        <ImgLogo src={Logo} />
      </Link>

      <LinksBody direction="row" gap={1}>
        {links.map((link, index) => {
          return (
            <StyledLink
              key={index}
              to={link.path}
              className={clsx({
                active: link.label.toLowerCase() === active,
              })}
            >
              {link.label}
            </StyledLink>
          );
        })}
      </LinksBody>
      <StlyedButton variant="md" startIcon={<GreenDot />}>
        <Typography
          pl={0.75}
          fontSize="0.875rem"
          fontWeight="500"
          lineHeight="18.2px"
        >
          Contact me
        </Typography>
      </StlyedButton>
    </Root>
  );
}

export default Header;
