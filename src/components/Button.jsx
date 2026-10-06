import { Link } from 'react-router-dom';

export default function Button({ to, href, children, variant = 'primary', size = 'md', className = '', ...rest }) {
  const cls = `btn btn-${variant} btn-${size} ${className}`.trim();
  if (to) {
    return <Link to={to} className={cls} {...rest}>{children}</Link>;
  }
  return <button type="button" className={cls} {...rest}>{children}</button>;
}
