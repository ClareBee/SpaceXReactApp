import { StyledLoader } from './styles';

export const Loader = () => (
  <StyledLoader viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="2"
    />
  </StyledLoader>
);
