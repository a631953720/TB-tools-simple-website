import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyleButton = styled.button`
  min-width: 100px;
  height: 36px;
`;

export default function Home() {
  const navigate = useNavigate();
  const handleClick = useCallback(
    () => {
      navigate('devices');
    },
    [],
  );

  return (
    <><div>Home</div><StyleButton onClick={handleClick}>go to devices page</StyleButton></>
  );
}
