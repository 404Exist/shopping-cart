import { useTranslation } from "react-i18next";
import "../../css/Header/Header.css";
const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      { t("header.title") }
    </header>
  )
}

export default Header