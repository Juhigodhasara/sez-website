import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function useScrollTo() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = useCallback(
    (sectionId) => {
      const scroll = () => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(scroll, 100);
      } else {
        scroll();
      }
    },
    [navigate, location.pathname]
  );

  return scrollTo;
}

