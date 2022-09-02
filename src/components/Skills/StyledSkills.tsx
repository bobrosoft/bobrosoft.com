import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template: auto / 33% 33% 33%;
  gap: 20px;

  @media (max-width: 900px) {
    grid-template: auto / 50% 50%;
  }

  @media (max-width: 500px) {
    grid-template: auto / auto;
  }
`;

const SkillSet = styled.div`
  position: relative;
  padding: 14px 16px;
  height: 100%;
  //background-color: rgba(255, 255, 255, 0.03);
  background-color: #1a2b54;
  border-radius: 10px;
  //overflow: hidden;

  .header {
    margin: 0;
    text-align: center;
    font-weight: 500;
  }

  .content {
    margin-top: 0.8em;
  }

  .list {
    margin-top: 1.2em;
    font-size: 0.9em;

    .item {
      margin: 0.6em 0;
      max-width: 100%;
      display: flex;
      list-style: none;
      border-radius: 20px;
      overflow: hidden;
    }

    .badge {
      display: inline-block;
      flex: 1;
      padding: 0.2em 0.7em;
      background: #7b7cbc;
    }

    .exp {
      padding: 0.2em 0.7em;
      color: gold;
      background-color: #3f3f6c;
    }
  }

  .badges {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-size: 0.85em;

    .badge {
      margin: 0.3em 0.2em;
      padding: 0.2em 0.6em;
      border-radius: 20px;
      background-color: #6a6a6a;
    }
  }

  .zoom-on-hover {
    transition: transform 0.3s, box-shadow 0.3s;
    will-change: transform;

    &:hover {
      transform: scale(1.2);
      box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
      z-index: 1;
    }
  }

  .contrast {
    color: #333;
  }
`;

export const StyledSkills = {
  Grid,
  SkillSet,
};
