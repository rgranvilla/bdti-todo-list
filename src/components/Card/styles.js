import styled from 'styled-components';

export const Container = styled.div`
  width: 18rem;
  margin-top: 0.5rem;
  padding: 0 1rem;
  border-radius: 10px;

  background: var(--bg-dashboard);

  header {
    height: 2.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title-line {
      h2 {
        font-size: 1rem;
        font-weight: 400;

        color: var(--txt-title);
      }

      .controls {
        display: none;
      }
    }
    .deadline {
      display: flex;

      p {
        font-size: 0.75rem;
        font-weight: 400;

        color: var(--txt-content);
      }
    }
  }

  main {
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        font-size: 0.75rem;
        font-weight: 400;

        text-align: justify;
        text-justify: inter-word;

        color: var(--txt-content);

        & + p {
          display: none;
        }
      }

      svg {
        width: 1rem;
        height: 1rem;
        color: var(--txt-content);
      }
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: center;

    .grabbing-bar {
      width: 18rem;
      height: 1rem;
      border-radius: 0 0 10px 10px;

      display: flex;
      justify-content: center;

      background-color: var(--bg-button);

      cursor: grabbing;

      svg {
        width: 1.25rem;
        height: 1.25rem;

        transform: translateY(-2px);

        color: var(--txt-content);
      }
    }

    .info {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: baseline;

      .area {
        display: flex;
        gap: 0.25rem;

        div {
          width: 1rem;
          height: 1rem;
          border-radius: 1rem;
        }
      }

      .add-area {
        display: none;

        button {
          width: 2rem;
          height: 2rem;
          display: inline-flex;
          justify-content: center;
          align-items: center;

          border: 0;
          border-radius: 1rem;
          background: var(--bg-button-card);

          svg {
            width: 1.5rem;
            height: 1.5rem;
          }
        }
      }

      .employee {
        margin-right: 1rem;
        display: flex;
        flex-direction: row-reverse;

        transition: margin 0.3s;

        .avatar-portrait {
          transition: margin 0.3s;
          margin-right: -1rem;
          img {
            width: 2rem;
            height: 2rem;

            border-radius: 1rem;
          }
        }
      }
      .employee:hover {
        margin-right: 0;
        gap: 0.25rem;

        .avatar-portrait {
          margin-right: 0;
        }
      }

      .add-employee {
        display: none;
        button {
          width: 2rem;
          height: 2rem;
          display: inline-flex;
          justify-content: center;
          align-items: center;

          border: 0;
          border-radius: 1.25rem;
          background: var(--bg-button-card);

          svg {
            width: 1.5rem;
            height: 1.5rem;
          }
        }
      }
    }
  }

  .front {
    background: #4ccd41 !important;
  }
  .back {
    background: #3762f0 !important;
  }

  .mobile {
    background: #9666ff !important;
  }

  .admin {
    background: #fcd34c !important;
  }
`;
