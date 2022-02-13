import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const makeQueryString = (obj) =>
  Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

export const useNavigateToResult = () => {
  const navigate = useNavigate();
  const navigateToResult = useCallback(({ typingSpeed, playtime, accuracy, maxCombo }) => {
    navigate(`/result?${makeQueryString({ typingSpeed, playtime, accuracy, maxCombo })}`);
  }, []);

  return navigateToResult;
};
