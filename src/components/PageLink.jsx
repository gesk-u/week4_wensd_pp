import { Link } from 'react-router-dom';

const PageLink = ({ link, itemClass }) => {
  return (
    <li>
      <Link href={link.href} className={itemClass}>
        {link.text}
      </Link>
    </li>
  );
};
export default PageLink;
