import styled, { css } from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 30rem;
  height: 40rem;
  box-shadow: 0 5px 16px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 10;
  margin-top: 0.5rem;
  padding: 0 1rem;
  border-radius: 10px;

  background: var(--bg-dashboard);

  header {
    height: 6rem;
    display: flex;
    flex-direction: column;

    .title-line {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-size: 1.5rem;
        font-weight: 500;

        color: var(--txt-title);
      }

      .controls {
        display: flex;
        gap: 0.5rem;

        button {
          background: transparent;
          svg {
            width: 1.25rem;
            height: 1.25rem;

            ${props =>
              !props.isActive &&
              css`
                color: var(--unselected) !important;
              `}
            ${props =>
              props.isAllowed &&
              css`
                cursor: not-allowed !important;
              `}
          }
        }
      }
    }

    .deadline {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 0.5rem;

      color: var(--txt-content);

      p {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.25rem;
      }

      svg {
        width: 1.25rem;
        height: 1.25rem;
      }
    }
  }

  main {
    height: 29.5rem;
    .content {
      padding: 0 0.5rem;

      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        font-size: 1rem;
        font-weight: 400;

        text-align: justify;
        text-justify: inter-word;

        color: var(--txt-content);
      }
    }
  }

  footer {
    height: 4.5rem;

    display: flex;
    align-items: center;

    .info {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      .area {
        display: flex;
        gap: 0.25rem;

        div {
          width: 2rem;
          height: 2rem;
          border-radius: 1rem;
        }
      }

      .add-area {
        button {
          width: 2rem;
          height: 2rem;
          display: inline-flex;
          justify-content: center;
          align-items: center;

          border: 0;
          border-radius: 1rem;
          background: var(--secondary);

          svg {
            width: 1.5rem;
            height: 1.5rem;
            color: var(--txt-white);
          }
        }
      }

      .employee {
        display: flex;
        flex-direction: row-reverse;

        transition: margin 0.3s;

        .avatar-portrait {
          transition: margin 0.3s;
          margin-right: -1rem;
          img {
            width: 3rem;
            height: 3rem;

            border-radius: 2rem;
          }
        }
      }
      .employee:hover {
        margin-right: 0;
        gap: 0.5rem;

        .avatar-portrait {
          margin-right: 0;
        }
      }

      .add-employee {
        button {
          width: 3rem;
          height: 3rem;
          display: inline-flex;
          justify-content: center;
          align-items: center;

          border: 0;
          border-radius: 2rem;
          background: var(--secondary);

          svg {
            width: 2rem;
            height: 2rem;
            color: var(--txt-white);
          }
        }
      }
    }
  }

  /* Default Controls Color */
  #btn-cancel {
    color: var(--primary);
  }

  #btn-save {
    color: var(--primary);
  }

  #btn-in-progress {
    color: var(--active);
  }

  #btn-completed {
    color: var(--active);
  }

  #btn-pause {
    color: var(--alert);
  }

  #btn-delete {
    color: var(--primary);
  }

  #btn-edit {
    color: var(--secondary);
  }

  /* Default Area Colors */
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

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: -2rem;
  right: 0;
  width: 2rem;
  height: 2rem;
  padding: 0;
  color: var(--txt-white);
  z-index: 10;
`;
