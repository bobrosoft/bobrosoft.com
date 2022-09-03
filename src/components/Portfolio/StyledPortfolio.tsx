import styled from 'styled-components';

const Project = styled.div`
  position: relative;
  padding: 14px 16px;
  height: 100%;
  //background-color: rgba(255, 255, 255, 0.03);
  background-color: #1a2b54;
  border-radius: 10px;
  overflow: hidden;

  .header {
    margin: 0;
    display: flex;
    align-items: center;

    .title {
      flex: 1;
      text-decoration: none;
    }

    .icons {
      & > * {
        margin-left: 10px;
        vertical-align: middle;
      }
    }
  }

  .description {
    margin-bottom: 5px;
    font-size: 0.9em;
  }

  ::before {
    content: '';
    position: absolute;
    top: -5px;
    left: 0;
    width: 100%;
    height: 5px;
    border-radius: 50%;
    box-shadow: 0 0px 20px rgba(255, 255, 255, 1);
    transition: transform 300ms;
    transform: scale(0, 1) translateY(-20px);
  }

  &:hover {
    ::before {
      transform: scale(1, 1) translateY(0);
    }
  }
`;

export const StyledPortfolio = {
  Project,
};
