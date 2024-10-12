import React from 'react';
import { Link } from 'react-router-dom';
import AccessibleIcon from '@mui/icons-material/Accessible';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline';

const linkClasses2 = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline';

const SIDEBAR_LINKS = [
  { key: 1, path: '/accessible', label: 'Accessibility', icon: <AccessibleIcon /> },
  { key: 2, path: '/time', label: 'Time Management', icon: <AccessTimeIcon /> },
  { key: 4, path: '/timesss', label: 'something', icon: <AccessTimeIcon /> },
  { key: 3, path: '/logout', label: 'Logout', icon: <AccessibleIcon /> }
];

export default function Sidebar() {
  return (
    <div className="h-full bg-neutral-900 w-60 p-3 flex flex-col text-white">

      <div className="flex items-center gap-2 px-1 py-3">
        <AccessibleIcon fontSize="large" />
        <span className="text-neutral-100 text-lg">OpenShop</span>
      </div>
      
      <div className="flex-1">
        {SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>

      <div className={linkClasses2}>
        <Link to="/products" className={linkClasses}>
            PENIS
        </Link>
      </div>
        
      

    </div>
  );
}

function SidebarLink({ item }) {
  return (
    <Link to={item.path} className={linkClasses}>
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}
