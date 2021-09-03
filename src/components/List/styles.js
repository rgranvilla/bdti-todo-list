import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 1rem;
  border-radius: 10px;
  height: 100%;
  flex: 0 0 20rem;

  background: var(--bg-list);

  /* faz com que a estilização comece apartir do segundo elemento div (no caso a segunda lista)*/
  & + div {
    margin-left: 1rem;
  }

  header {
    .title-line {
      padding: 0.75rem 0;

      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        color: var(--txt-title);
        font-size: 1rem;
        font-weight: 500;
      }

      .counter {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 5px;

        background: var(--secondary);

        display: flex;
        justify-content: center;
        align-items: center;

        p {
          color: var(--txt-white);
          font-size: 1rem;
          font-weight: 600;
        }
      }
    }

    .button-line {
      button {
        border: 0;
        width: 100%;
        height: 2rem;

        border-radius: 5px;

        svg {
          width: 1.5rem;
          height: 1.5rem;
          color: var(--txt-content);
        }
      }
    }
  }
`;
