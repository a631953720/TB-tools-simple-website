import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyleButton = styled.button`
  min-width: 100px;
  height: 36px;
`;

export default function Devices() {
  const navigate = useNavigate();
  const handleClick = useCallback(
    () => {
      navigate('/');
    },
    [],
  );
  return (
    <><div>Devices</div><StyleButton onClick={handleClick}>go back</StyleButton></>
  );
}
