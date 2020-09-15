import styled from "styled-components";
import Pizza from "../../components/HomeComponents/img/Pizza.jpg";

export default styled.div`
  background-image: url(${Pizza});
  display: flex;
  text-align: center;

  height: 30rem;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 0.5rem;
    padding: 0.5rem 0.35rem;
  }
  button {
    padding: 0.5rem;
    width: 10rem;
    font-weight: bold;
    font-size: 1.15rem;
  }
`;
