import styled from 'styled-components';

export const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
overflow-y: scroll;
`;

export const OverlaysRoot = styled.div`
top: 0;
left: 0;
right: 0;
bottom: 0;
position: sticky;
`;

export const ModelOverlay = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: sticky;
top: 0;
height: 100vh;
margin-top: -100vh;
`;