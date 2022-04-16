import { useTranslation } from "react-i18next";
import "../../css/Footer/Footer.css";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      { t("footer.title") }
    </footer>
  )
}

export default Footer